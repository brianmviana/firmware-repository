import styled from 'styled-components';
import {darken} from "polished";

export const Container = styled.div`
    height : 100%;
    display : flex;
    justify-content : center;
    align-items : center;
`;

export const Content = styled.div`
    width : 100%;
    max-width : 400px;
    margin : 30px;
    background : #FFF;
    border-radius : 4px;
    padding : 20px;
`;



export const Separetor = styled.div`
    height : 100%;
    /* background : linear-gradient(-90deg, #4159c1, #ab59c1); */
    display : flex;
    justify-content : center;
    align-items : center;
    content : "";
    margin : 10px;
`;

export const Wrapper = styled.div`
    height : 100%;
    /* background : linear-gradient(-90deg, #4159c1, #ab59c1); */
    display : flex;
    justify-content : center;
    align-items : center;
`;


export const ContentForm = styled.div`
    width : 100%;
    max-width : 315px;
    text-align : center;

    form {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        margin-top : 30px;

        label {
            color: #9e9e9e;
            margin-left: 5px;
            font-size: 0.8rem;
            cursor: text;
            text-align: initial;
            transform: translateY(3px);
        }

        input {
            background : rgba(0, 0, 0, 0.1);
            border : 0;
            border-radius : 4px;
            height : 44px;
            padding : 0 15px;
            color : black;

            &::pleceholder {
                color : black;
            }

        }

        button {
            margin : 15px 0;
            height : 44px;
            background : #3b9eff;
            font-weight : bold;
            color : #FFFFFF;
            border : 0;
            border-radius : 4px;
            font-size : 16px;
            transition : background 0.2s;

            &:hover {
                background : ${darken(0.03, "#3b9eff")}
            }

        }

        a {
            color : #FFFFFF;
            margin-top : 15px;
            font-size : 16px;
            opacity : 0.8;

            &:hover {
                opacity : 1;
            }
        }

    }
`;
