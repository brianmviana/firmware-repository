import {takeLatest, call, put, all} from "redux-saga/effects";
import {toast} from "react-toastify";
import api from "../../../services/api";
import {createFirmwareSuccess, createFirmwareFailure} from "./actions";

export function* createFirmwareRequest({payload}){
    try{
        console.log(payload.data.file);
        const data = new FormData();
        data.append("file", payload.data.file.file);
        data.append("project", payload.data.project);
        data.append("board", payload.data.board);
        data.append("version", payload.data.version);
        console.tron.log(data);
        // console.tron.log(payload);

        const response = yield call(api.post, "/firmwares", data);
        // this.setState({
        //     uploadedFile : [],
        //     project : "",
        //     version : "",
        //     board : "",
        //     uploadingFile : ""
        // });
        toast.success("Firmware cadastrado com sucesso!")
        yield put(createFirmwareSuccess(response.data));
    }
    catch(err){
        console.log(err);
        toast.error("Erro ao cadastrar o Firmware")
        yield put(createFirmwareFailure());
    }

}

export default all([
    takeLatest("@firmware/CREATE_FIRMWARE_REQUEST", createFirmwareRequest)
]);
