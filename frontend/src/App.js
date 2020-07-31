import React, {Component}  from 'react';

import GlobalStyle from "./styles/global";
import {Container, Content, Wrapper, ContentForm, Separetor} from "./styles";
import FileList from "./components/FileList";
import Upload from "./components/Upload";
import api from "./services/api";



import {Button, Input, InputLabel} from '@material-ui/core';
import {uniqueId} from "lodash";
import filesize from "filesize";

class App extends Component{
    state = {
        uploadedFile : [],
        project : "",
        version : "",
        board: ""
    };

    // async componentDidMount(){
    //     const response = await api.get("/firmwares");

    //     this.setState({
    //         uploadedFile : response.data.map(file => ({
    //             id : file._id,
    //             name : file.name,
    //             readableSize : filesize(file.size),
    //             uploaded : true,
    //             url : file.url
    //         }))
    //     })
    // }

    handleUpload = files => {

        const uploadedFile = {
            file : files[0],
            id : uniqueId(),
            name : files[0].name,
            readableSize : filesize(files[0].size),
            key : uniqueId(),
            progress : 0,
            uploaded : false,
            error : false,
            url : null
        };


        this.setState({uploadedFile});

        this.setState({uploadingFile : uploadedFile});

        console.log(this.state.uploadedFile.file);
    };

    handleDelete = async id => {
        await api.delete(`/firmwares/${id}`);
        this.setState({
            uploadedFile : this.state.uploadedFile.filter(file => file.id !== id)
        });
    }

    updateFile = (id, data) => {
        this.setState({
            uploadedFile :
                uploadedFile => {
                    return id === uploadedFile.id ? {...uploadedFile, ...data} : uploadedFile;
                }
            })
    }

    processUpload = (uploadedFile, project, version, board) => {
        const data = new FormData();
        data.append("file", uploadedFile.file);
        data.append("project", project);
        data.append("version", version);
        data.append("board", board);
        api.post("/firmwares", data, {
            onUploadProgress : e => {
                const progress = parseInt(Math.round((e.loaded * 100) / e.total ));
                this.updateFile(uploadedFile.id, {progress})
            }
        }).then(response =>{
            this.updateFile(uploadedFile.id, {
                uploaded : true,
                id : response.data._id,
                url : response.data.url
            });
            this.setState({
                uploadedFile : [],
                project : "",
                version : "",
                board : "",
                uploadingFile : ""
            });
        }).catch(() => {
            this.updateFile(uploadedFile.id, {
                error : true
            });
        });
    }

    handleProject = (e) =>{
        this.setState({project: e.target.value})
    }
    handleBoard= (e) =>{
        this.setState({board: e.target.value})
    }
    handleVersion = (e) =>{
        this.setState({version: e.target.value})
    }

    handleSubmit = (e) => {
        e.preventDefault();
        if(this.state.version !== '' && this.state.nameProject !== '' && this.state.board !== ''){
            this.processUpload(this.state.uploadedFile, this.state.project, this.state.version, this.state.board);
        }else{
            //add massage error
        }
        //uploadedFile(this.processUpload, this.state.project, this.state.version, this.state.board);
    }


    componentWillMount(){
        this.state.uploadedFile.forEach(file => URL.revokeObjectURL(file.preview));
    }

    render() {
        const {uploadedFile} = this.state;
        return (
            <Container>
                <Content>
                <Wrapper>
                <ContentForm>
                <form onSubmit={this.handleSubmit} >

                    <InputLabel htmlFor="project">Nome do Projeto</InputLabel>
                    <Input value={this.state.project}  id="project" placeholder="Nome do Projeto" onChange={this.handleProject} required={true}/>
                    <Separetor/>

                    <InputLabel htmlFor="board">Placa compatível</InputLabel>
                    <Input  value={this.state.board} id="board" placeholder="Placa compatível" onChange={this.handleBoard} required={true}/>
                    <Separetor/>

                    <InputLabel htmlFor="version">Versão</InputLabel>
                    <Input value={this.state.version} id="version" placeholder="Ex: v1_0_0" onChange={this.handleVersion} required={true} />
                    <Separetor/>

                    {!this.state.uploadingFile &&
                    <Upload onUpload={this.handleUpload}></Upload>
                    }


                    <button type="submit">Enviar</button>
                </form>
                </ContentForm>
                </Wrapper>
                </Content>
                <Content>
                    {!!uploadedFile.length && (<FileList onDelete={this.handleDelete}/>)}
                </Content>
                <GlobalStyle/>
            </Container>
        );
    };
}

export default App;
