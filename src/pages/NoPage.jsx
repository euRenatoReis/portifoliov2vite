import React,{useContext} from "react"
import { ThemeContext } from "../services/themeContext";
import styled from "styled-components";

const NoPage = () => {

    const { theme } = useContext(ThemeContext)

    return (
        <NoPageEstilizada theme={theme}>
               <h1>Pagina Não Encontrada</h1>

               <img></img>
        </NoPageEstilizada>
    )
}

const NoPageEstilizada = styled.section`

display: flex;
flex: direction: row;
gap: 40px;
height: 90%;
justify-content: center;
align-items: center;
background-color: ${props=> props.theme.backgroundTelas};
color: ${props=> props.theme.color};
padding: 20px;


`



export default NoPage