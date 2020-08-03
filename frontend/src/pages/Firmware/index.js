import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {Form, Input} from "@rocketseat/unform";
import {uniqueId} from "lodash";
import filesize from "filesize";
// import {singOut} from "../../store/modules/auth/actions";
import {uploadedFile, updateProject, updateBoard, updateVersion} from "../../store/modules/firmware/actions";
import {Container} from "./styles";
import Upload from "./Upload";
import api from "../../services/api";

export default function Firmware() {
    const dispatch = useDispatch();

    const firmware = {
        project : useSelector(state => state.firmware.project),
        board : useSelector(state => state.firmware.board),
        version : useSelector(state => state.firmware.version),
        file :  useSelector(state => state.firmware.file)
    };

    function handleUpload(files){

        const file = {
            file : files[0],
            id : uniqueId(),
            name : files[0].name,
            readableSize : filesize(files[0].size),
            uploaded : false,
            error : false,
            url : null
        };

        dispatch(uploadedFile(file))
    };

    function handleProject(e){
        dispatch(updateProject(e.target.value));
    }

    function handleBoard(e){
        dispatch(updateBoard(e.target.value));
    }

    function handleVersion(e){
        dispatch(updateVersion(e.target.value));
    }


    // function updateFile(id, data){
    //     this.setState({
    //         file :
    //             uploadedFile => {
    //                 return id === uploadedFile.id ? {...uploadedFile, ...data} : uploadedFile;
    //             }
    //         })
    // }

    // function processUpload(uploadedFile, project, version, board){
    //     const data = new FormData();
    //     data.append("file", uploadedFile.file);
    //     data.append("project", project);
    //     data.append("version", version);
    //     data.append("board", board);
    //     api.post("/firmwares", data, {
    //         onUploadProgress : e => {
    //             const progress = parseInt(Math.round((e.loaded * 100) / e.total ));
    //             this.updateFile(uploadedFile.id, {progress})
    //         }
    //     }).then(response =>{
    //         this.updateFile(uploadedFile.id, {
    //             uploaded : true,
    //             id : response.data._id,
    //             url : response.data.url
    //         });
    //         this.setState({
    //             uploadedFile : [],
    //             project : "",
    //             version : "",
    //             board : "",
    //             file : ""
    //         });
    //     }).catch(() => {
    //         this.updateFile(uploadedFile.id, {
    //             error : true
    //         });
    //     });
    // }

    async function handleSubmit() {
        if(firmware.project !== '' && firmware.board !== '' && firmware.version !== '' && firmware.file !== ''){
            // dispatch(createFirmwareRequest(firmware));
            // this.processUpload(firmware.uploadedFile, firmware.project, firmware.version, firmware.board);
            console.log(firmware.file);
            const data = new FormData();
            data.append("file", firmware.file.file);
            data.append("project", firmware.project);
            data.append("version", firmware.version);
            data.append("board", firmware.board);
            const response = await api.post("/firmwares", data);
            console.log(response.data);
        }else{
            console.log("erro");
            //add massage error
        }
        //uploadedFile(this.processUpload, this.state.project, this.state.version, this.state.board);
    }

    // const {uploadedFile} = this.state;
    return (
        <Container>
            <Form onSubmit={handleSubmit}>

                <Input name="project" onChange={handleProject} type="text" placeholder="Nome do Projeto"/>
                <Input name="board" onChange={handleBoard} type="text" placeholder="Placa Compativel"/>
                <Input name="version" onChange={handleVersion} type="text" placeholder="Versão do firmware"/>

                <hr/>

                {!useSelector(state => state.firmware.file) &&
                    <Upload onUpload={handleUpload}></Upload>
                }
                <hr/>

                <button type="submit">Salvar Firmware</button>
            </Form>
            {/* <button type="button" onClick={handleSingOut}>Logout</button> */}
        </Container>
    )
}
