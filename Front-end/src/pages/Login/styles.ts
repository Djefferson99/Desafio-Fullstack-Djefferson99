import styled from "styled-components";

export const Conteiner = styled.main`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100vw;
    height: 100vh;
    gap:50px;

    @media(max-width:700px){       
        display: flex;
        flex-direction: column;      
    }

`
export const ConteinerDiv = styled.div`
    background-color: var(--color-blue-900);
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    height: 300px;
    justify-content: center;
        
    h3{
        font-size: 48px;
        margin-left: 30px;
        font-family: fantasy;
    }
    p{
        font-size: 20px;
        margin-left: 30px;
        margin-top: 15px;
        margin-right: 30px;
        font-family: Arial, Helvetica, sans-serif;  
    }     
`

export const Form = styled.div`
    display: flex;
    flex-direction: column;
    width: 500px;
    h2{
        font-family: fantasy;
        color: var(--color-gray-100);
        margin-bottom: 30px;
        font-size: 30px;
    }
    form{
        display: flex;
        flex-direction: column;
        margin-right: 30px;
        
        label{
            color: var(--color-gray-100);
            font-family: Arial, Helvetica, sans-serif;
            margin: 5px 0;
        }
        input{
            max-width: 30vw;
            height: 39px;

            background-color: var(--color-gray-100);
            border: none;
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
        width: 100vw;
        height: 100vh;
        margin: 0 auto;
        h2{
            margin: 0 10px;
        }
        form{
            margin: 0 10px;
            width: 100vw;
            height: 100vh;
        }
        input{
            min-width: 300px;
        }    
        button{
            min-width: 300px;
        }
    }

`
export const Err = styled.span`
    color: red;
    font-family: Arial, Helvetica, sans-serif;
`


