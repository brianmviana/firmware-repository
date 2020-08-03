import styled from 'styled-components';

export const Container = styled.div`
    background : #FFFFFF;
    padding : 0 30px;
`;

export const Content = styled.div`
    height : 64px;
    max-width : 980px;
    margin : 0 auto;
    display : flex;
    justify-content : space-between;
    align-items : center;

    nav{
        display : flex;
        align-items : center;

        /* img{
            margin-right : 20px;
            padding-right : 20px;
            border-right : 1px solid #EEEEEE;
        } */

        a{
            font-weight : bold;
            color : #214291;
            margin : 0 10px;
            padding : 0 10px;
            border-left : 1px solid #EEEEEE;
            border-right : 1px solid #EEEEEE;

            &:hover{
                color : #DE522D;
                padding-bottom : 5px;
                border-bottom : 1px solid #EEEEEE;
            }

        }
    }

    aside{
        display : flex;
        align-items : center;
    }

`;

export const Profile = styled.div`
    display : flex;
    margin : 0 10px;
    padding : 0 10px;
    border-left : 1px solid #EEEEEE;
    border-right : 1px solid #EEEEEE;

    div{
        text-align : right;
        margin-right : 10px;

        strong{
            display : block;
            color : #333333;
        }

        a{
            display : block;
            margin-top : 2px;
            font-size : 12px;
            color : #999999;

            &:hover{
                color : #DE522D;
            }
        }

    }

    /* img{
        width : 32px;
        height : 32px;
        border-radius : 50%;
    } */
`;
