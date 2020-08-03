import React from "react";
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {Container, Content, Profile} from "./styles";

export default function Header() {

    const profile = useSelector(state => state.user.profile);

    return (
        <Container>
            <Content>
                <nav>
                    <Link to="/dashboard">Dashboard</Link>
                    <Link to="/firmware">Novo Firmware</Link>
                </nav>
                <aside>
                    <Profile>
                        <div>
                             <strong>{profile.name}</strong>
                             <Link to="/profile">Meu Perfil</Link>
                        </div>
                        {/* <img src="https://api.adorable.io/avatars/50/abott@adorable.png" alt="Nome do USUÁRIO"/> */}
                    </Profile>
                </aside>

            </Content>
        </Container>
    )
}
