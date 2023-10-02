import React,{useContext} from "react";
import ButtonHome from '../buttons/ButtonHome';
import ButtonRepositories from '../buttons/ButtonRepositories';
import ButtonContact from '../buttons/ButtonContact';
import ButtonTheme from '../buttons/ButtonTheme';
import { Link, Outlet } from "react-router-dom";
import { ThemeContext } from "../services/themeContext";
import styled from "styled-components";

const Layout = () => {

    const { theme } = useContext(ThemeContext)

    return (
        <LayoutEstilo theme={theme}>
            <HeaderEstilo className="header" theme={theme}>
                <h1 className="titulo-page">Renato Vieira</h1>

                <div>
                    <ButtonHome><Link to="/"></Link></ButtonHome>
                    <ButtonRepositories><Link to="/projects-path"></Link></ButtonRepositories>
                    <ButtonContact><Link to="/contact-path"></Link></ButtonContact>
                    <ButtonTheme/>
                </div>
            </HeaderEstilo>
            <Outlet />
        </LayoutEstilo>
    )

}

const HeaderEstilo = styled.header`


    display:flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 20px;
    max-width: 100%;
    height: 10%;
    background-color: ${props=> props.theme.backgroundHeader};
    color: ${props=> props.theme.color};
    align-items: center;
    


    div{
 
       display:flex;
       flex-direction: row;
       gap: 40px;
       padding: 20px;
       justify-content: center;
       align-items: center;
 
    }


 `

const LayoutEstilo = styled.main`

 display:flex;
 flex-direction: column;
 background-color: ${props=> props.theme.backgroundTelas};
 color: ${props=> props.theme.color};
 width: 100%;
 height: 100vh;
`

export default Layout