import {takeLatest, call, put, all} from "redux-saga/effects";
import {toast} from "react-toastify";
import history from "../../../services/history";
import api from "../../../services/api";
import { singInSuccess, singFailure } from "./actions";

export function* singIn({payload}){
    try{
        const {email, password} = payload;
        const response = yield call(api.post, "/sessions", {email, password});
        const {token, user} = response.data;

        api.defaults.headers.Authorization = `Bearer ${token}`;

        yield put(singInSuccess(token, user));

        history.push("/dashboard");
    }
    catch(err){
        toast.error("Usuário ou senha inválidos");
        yield put(singFailure());
    }
}

export function* singUp({payload}){
    try{
        const {name, email, password} = payload;
        yield call(api.post, "/users", {name, email, password});
        history.push("/");
    }
    catch(err){
        toast.error("Erro ao cadastrar");
        yield put(singFailure());
    }
}

export function setToken({payload}){
    if(!payload){
        return;
    }

    const {token} = payload.auth;

    if(token){
        api.defaults.headers.Authorization = `Bearer ${token}`;
    }

}

export function singOut(){
    history.push("/");
}

export default all([
    takeLatest("persist/REHYDRATE", setToken),
    takeLatest("@auth/SIGN_IN_REQUEST", singIn),
    takeLatest("@auth/SIGN_UP_REQUEST", singUp),
    takeLatest("@auth/SIGN_OUT", singOut)
]);

