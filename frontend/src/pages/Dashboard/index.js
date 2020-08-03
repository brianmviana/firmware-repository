import React, {useState, useEffect} from "react";
import {Form, Input} from "@rocketseat/unform";
import {Select, MenuItem} from '@material-ui/core';
import {toast} from "react-toastify";
import api from "../../services/api";
import {Container, Firmwares} from "./styles";
import {updateSearchBy, updateSearching} from "../../store/modules/firmware/actions";
import { useSelector, useDispatch } from "react-redux";
// import {MdChevronLeft, MdChevronRight} from "react-icons/md"

export default function Dashboard() {
    const dispatch = useDispatch();
    const [firmwares, setFirmwares] = useState([]);

    const searchBy = useSelector(state => state.firmware.searchBy);
    const searching = useSelector(state => state.firmware.searching);
    const query =
        (searchBy == "project") ? {params : {"project" : searching}} : (
            (searchBy == "board") ? {params : {"board" : searching}} : {}
        )


    useEffect(() => {
        async function loadFirmwares(){
            const response = await api.get("/firmwares", query);
            setFirmwares(response.data);
        }
        loadFirmwares();
    }, [firmwares]);

    // async function handleSubmit(data){
    //     if(searching !== ""){
    //         const response = await api.get("/firmwares", query);
    //         setFirmwares(response.data);
    //     }
    //     else {
    //         toast.error("Preencha o campo de pesquisa")
    //     }
    //     console.log(data);
    //     // dispatch(updateProfileRequest(data));
    // }

    function handleSearchBy(e){
        dispatch(updateSearchBy(e.target.value));
    }

    function handleSearching(e){
        dispatch(updateSearching(e.target.value));
    }

    return (
        <Container>
            <header>

                <Form>
                    <Input name="search" placeholder="Pesquisar..." id="search" value={searching} onChange={handleSearching}/>

                    <Select value={searchBy} onChange={handleSearchBy}>
                        <MenuItem value={"project"}>Nome do Projeto</MenuItem>
                        <MenuItem value={"board"}>Placa Compatível</MenuItem>
                    </Select>
                    {/* <button type="submit">Perquisar</button> */}
                </Form>
            </header>

            <ul>
                {firmwares.map(firmware => (
                    <Firmwares key={firmware.id}>
                        <strong>{firmware.name}</strong>
                        <span><span>Projeto:</span> {firmware.project}</span>
                        <span><span>Placa compativel:</span> {firmware.board}</span>
                        <span><span>Versão:</span> {firmware.version}</span>
                    </Firmwares>
                ))}
            </ul>
        </Container>
    );
}
