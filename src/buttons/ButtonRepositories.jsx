import { Link } from "react-router-dom"
import React, { useContext } from "react";
import { ButtonRepositoriesEstilo } from "./StyledButtons";
import { ThemeContext } from "../services/themeContext";


const ButtonRepositories = () => {

    const { theme } = useContext(ThemeContext)

    return (
        <Link to="/projects-path">
            <ButtonRepositoriesEstilo theme={theme}>
                Projetos
            </ButtonRepositoriesEstilo>
        </Link>
    )
}

export default ButtonRepositories