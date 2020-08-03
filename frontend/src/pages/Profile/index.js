import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {Form, Input} from "@rocketseat/unform";
import {singOut} from "../../store/modules/auth/actions";
import {updateProfileRequest} from "../../store/modules/user/actions";
import {Container} from "./styles";

export default function Profile() {
    const dispatch = useDispatch();
    const profile = useSelector(state => state.user.profile);

    function handleSubmit(data){
        dispatch(updateProfileRequest(data));
    }

    function handleSingOut(){
        dispatch(singOut());
    }

    return (
        <Container>
            <Form initialData={profile} onSubmit={handleSubmit}>

                <Input name="name" type="text" placeholder="Nome Completo"/>
                <Input name="email" type="email" placeholder="Digite seu email"/>

                <hr/>

                <Input name="oldPassword" type="password" placeholder="Senha atual"/>
                <Input name="password" type="password" placeholder="Nova senha"/>
                <Input name="confirmPassword" type="password" placeholder="confirmar nova senha"/>
                <button type="submit">Atualizar perfil</button>
            </Form>
            <button type="button" onClick={handleSingOut}>Logout</button>
        </Container>
    )
}
