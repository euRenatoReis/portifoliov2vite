import styled from "styled-components";
import { borderPasseio } from "../animacoes/animacoes";

export const ButtonHomeEstilo = styled.button`
    
    display: flex;
    width: 90px;
    height: 50px;
    border-radius: 20px;
    align-items: center;
    justify-content: center;

    box-shadow: ${props => props.theme.boxShadow};
    background-color: ${props => props.theme.background};
    color: ${props => props.theme.colorButton};
    border: ${props => props.theme.border};
`

export const ButtonContactEstilo = styled.button`
    
    display: flex;
    width: 90px;
    height: 50px;
    border-radius: 20px;
    align-items: center;
    justify-content: center;

    box-shadow: ${props => props.theme.boxShadow};
    background-color: ${props => props.theme.background};
    color: ${props => props.theme.colorButton};
    border: ${props => props.theme.border};
`

export const ButtonRepositoriesEstilo = styled.button`
    

    display: flex;
    width: 90px;
    height: 50px;
    border-radius: 20px;
    align-items: center;
    justify-content: center;

    box-shadow: ${props => props.theme.boxShadow};
    background-color: ${props => props.theme.background};
    color: ${props => props.theme.colorButton};
    border: ${props => props.theme.border};
`

export const ButtonTemaEstilo = styled.button`
    
    display: flex;
    width: 50px;
    height: 50px;
    border-radius: 20px;
    align-items: center;
    justify-content: center;
    
    box-shadow: ${props => props.theme.boxShadow};
    background-color: ${props => props.theme.background};
    color: ${props => props.theme.colorButton};
    border: ${props => props.theme.border};
`