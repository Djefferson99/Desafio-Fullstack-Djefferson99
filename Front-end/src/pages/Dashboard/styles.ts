import styled from "styled-components";

export const Conteiner = styled.div`
    background-color: var(--color-gray-100);
    height: 100%;
    min-height: 1;
    padding-top: 60px;
    padding-left: 60px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    h3{
      color: var(--color-gray-900) ;
      font-family: fantasy;
      font-size: 25px;
      margin-top: 25px;
    }
    ul{
        list-style: none;
        padding-bottom: 30px;
        li{
            margin-top: 20px;
            p{
                font-family: fantasy;
                color: var(--color-blue-800);
                font-size: 25px;
                span{
                    color: black;
                    font-family: Arial, Helvetica, sans-serif;
                    font-weight: bold;
                }
            }
        }
    }
    form{
        display: flex;
        flex-direction: column;
        margin-right: 30px;
        
        label{
            color: var(--color-gray-900);
            font-family: Arial, Helvetica, sans-serif;
            margin: 5px 0;
        }
        input{
            max-width: 30vw;
            height: 39px;

            background-color: var(--color-gray-100);
            border-color: var(--color-gray-900);
            color: var(--color-gray-900);
            font-size: 14px;
            border-radius: 4px;
        }
        button{
            width: 30vw;
            height: 39px;
            margin-top: 20px;
            background-color: var(--color-blue-900);
            &:hover {
                background-color: var(--color-blue-700);
            }

            border: none;
            color: var(--color-gray-100);
            font-size: 14px;
            border-radius: 4px;
            font-family: Arial, Helvetica, sans-serif;
        }
    }
    @media(max-width:700px){       
        flex-direction: column;
    
    }
    
` 

export const Header = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    max-width: 90%;
    align-items: center;
    button{
        height: 30px;
        width: 60px;
        background-color: var(--color-blue-800);
        color: var(--color-gray-100);
        font-family: Arial, Helvetica, sans-serif;
        font-size:15px ;
        &:hover {
                    background-color: var(--color-blue-700);
                }
    }
`
export const Delete = styled.button`
        height: 30px;
        width: 60px;
        background-color: var(--color-blue-800);
        color: var(--color-gray-100);
        font-family: Arial, Helvetica, sans-serif;
        font-size:15px ;
        margin-top: 10px;
        &:hover {
                    background-color:red;
                }
`


export const Title = styled.h1`
    padding-bottom: 30px;
    margin-top:30px ;
    margin-left: 30px;
    font-family: fantasy;
` 