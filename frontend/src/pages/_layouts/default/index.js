import React from "react";
import {Wrapper} from "./styles";
import {PropTypes} from "prop-types";
import Header from "../../../components/Header"

export default function DefaultLayout({children}) {
    return (
        <Wrapper>
            <Header/>
            {children}
        </Wrapper>
    );
}


DefaultLayout.propTypes = {
    children : PropTypes.element.isRequired
}