import styled from 'styled-components';
import {darken} from "polished";

export const Container = styled.div`
    max-width : 600px;
    margin : 50px auto;

    form {
        display : flex;
        flex-direction : column;
        margin-top : 30px;

        input {
            background : rgba(0, 0, 0, 0.1);
            border : 0;
            border-radius : 4px;
            height : 44px;
            padding : 0 15px;
            color : #FFFFFF;
            margin : 0 0 10px;

            &::placeholder {
                /* color : orange; */
                color : rgba(255, 255, 255, 0.5);
            }
        }

        span {
            color : #FA6f91;
            align-self : flex-start;
            margin : 0 0 10px;
            font-weight : bold;
            background : rgba(0, 0, 0, 0.1);
            padding : 5px;
            border-radius : 5px;
        }

        hr{
            border : 0;
            height : 1px;
            background : rgba(255, 255, 255, 0.2);
            margin: 10px 0 20px;
        }

        button {
            margin : 5px 0 0;
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

    > button {
        width : 100%;
        margin : 10px 0 0;
        height : 44px;
        background : #FA6f91;
        font-weight : bold;
        color : #FFFFFF;
        border : 0;
        border-radius : 4px;
        font-size : 16px;
        transition : background 0.2s;

        &:hover {
            background : ${darken(0.05, "#FA6f91")}
        }

    }
`;
