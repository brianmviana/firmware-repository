import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {Form, Input} from "@rocketseat/unform";
import * as Yup from "yup";
import {singInRequest} from "../../store/modules/auth/actions"

const schema = Yup.object().shape({
    email : Yup.string().email("Insira um e-mail valido").required("O e-mail é obrigatorio"),
    password : Yup.string().min(8, "Minimo de 8 caracteres").required("A senha é obrigatoria")
});

export default function SignIn() {

    const dispatch = useDispatch();
    const loading = useSelector(state => state.auth.loading);

    function handleSubmit({email, password}){
        dispatch(singInRequest(email, password));
    }

    return (<>
        <Form schema={schema} onSubmit={handleSubmit}>
            <Input name="email" type="email" placeholder="Digite seu e-mail"/>
            <Input name="password" type="password" placeholder="Digite sua senha"/>
            <button type="submit">{loading ? "Carregando..." : "Entrar"}</button>
            <Link to="/register">Criar nova conta</Link>
        </Form>
    </>)
}
