import React from 'react'
import {useDispatch} from "react-redux";
import {Link} from "react-router-dom";
import * as Yup from "yup";
import {Form, Input} from "@rocketseat/unform";
import {singUpRequest} from "../../store/modules/auth/actions"

const schema = Yup.object().shape({
    name : Yup.string().required("O nome é obrigatoria"),
    email : Yup.string().email("Insira um e-mail valido").required("O e-mail é obrigatorio"),
    password : Yup.string().min(8, "Minimo de 8 caracteres").required("A senha é obrigatoria")
});

export default function SignUp() {

    const dispatch = useDispatch();

    function handleSubmit({name, email, password}){
        dispatch(singUpRequest(name, email, password));
    }

    return (<>
        <Form schema={schema} onSubmit={handleSubmit}>
            <Input name="name" type="text" placeholder="Nome"/>
            <Input name="email" type="email" placeholder="E-mail"/>
            <Input name="password" type="password" placeholder="Senha"/>
            <button type="submit">Criar conta</button>
            <Link to="/" >Já tenho uma conta</Link>
        </Form>
    </>)
}
