import React, { useContext } from "react";
import { ThemeContext } from "../services/themeContext";
import styled from "styled-components";
import { indoDireita, surgimento } from "../animacoes/animacoes";

const Home = () => {

    const { theme } = useContext(ThemeContext)

    return (

        <HomeEstilo theme={theme}>
            <div className="presentation">
                <p>Ola! meu Nome Renato Vieira</p>
                <h1>Desenvolvedor Front-End Junior</h1>
                <p>Estou Em busca de uma vaga Front end, mas no futuro serei um desenvolvedor FullStack.</p>
            </div>
            <PictureHome>
            </PictureHome>
            
        </HomeEstilo >
    )

}

const HomeEstilo = styled.section`

display: flex;
flex: direction: row;
gap: 60px;
height: 90%;
padding-left: 150px;
padding-right: 150px;
justify-content: space-between;
align-items: center;
background-color: ${props => props.theme.backgroundTelas};
color: ${props => props.theme.color};

.presentation{

   display:flex;
   flex-direction: column;
   padding: 20px;
   height: 80%;
   animation: ${indoDireita} 1s running;
}

`

const PictureHome = styled.img`

   display:flex;
   width: 450px;
   height: 250px;
   background-color: ${props => props.theme.backgroundTelas};
   background-image: url(../public/imagens/quarto-render.png);
   background-size: contain;
   animation: ${surgimento} 1s running;
   border: 0px;
   margin: 0px;

`


export default Home