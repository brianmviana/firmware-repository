import styled from 'styled-components';
import {darken} from "polished";

export const Container = styled.div`
    max-width : 600px;
    margin : 50px auto;
    display : flex;
    flex-direction : column;

    header{
        display : block;
        align-self : center;
        align-items : center;
        width: 100%;

        form {
            display : flex;
            flex-direction : row;
            justify-content : space-between;
            align-items : stretch;
            max-width : 980px;
            margin : 0 auto;

            input {
                background : rgba(0, 0, 0, 0.1);
                border : 0;
                border-radius : 4px;
                height : 44px;
                padding : 0 15px;
                color : #FFFFFF;
                margin : 0 0 10px;

                &::placeholder {
                    color : rgba(255, 255, 255, 0.5);
                }
            }
            select{
                padding : 0 10px;
                height : 44px;
                background : rgba(255, 255, 255, 0.5);
                font-weight : bold;
                color : #FFFFFF;
                border : 0;
                border-radius : 4px;
                font-size : 16px;
                transition : background 0.2s;

                option{

                }
            }

            button{
                margin : 5px 0 0;
                padding : 0 10px;
                height : 44px;
                background : #DE522D;
                font-weight : bold;
                color : #FFFFFF;
                border : 0;
                border-radius : 4px;
                font-size : 16px;
                transition : background 0.2s;

                &:hover {
                    background : ${darken(0.03, "#DE522D")}
                }
            }

        }


        strong{
            color : #FFFFFF;
            font-size : 24px;
            margin :0 15px;
        }
    }

    ul{
        display :flex;
        flex-direction : column;
        /* display :grid;
        grid-template-columns : repeat(3, 1fr);
        grid-gap : 15px; */
        margin-top : 30px;

    }


`;

export const Firmwares = styled.li`
    width : 100%;
    margin : 10px auto;
    padding : 20px;
    border-radius : 4px;
    background : #FFFFFF;

    strong{
        display : block;
        color : #7159c1;
        font-size : 20px;
        font-weight : normal;
    }

    span{
        display : block;
        color : #666666;
        margin : 5px auto;

        span{
            font-weight : bold;
        }
    }
`;
