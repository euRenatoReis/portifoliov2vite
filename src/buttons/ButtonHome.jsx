import { Link } from "react-router-dom"
import React, { useContext } from "react";
import { ButtonHomeEstilo } from "./StyledButtons";
import { ThemeContext } from "../services/themeContext";


const ButtonHome = () => {

    const { theme } = useContext(ThemeContext)

    return (
        <Link to="/">
            <ButtonHomeEstilo theme={theme}>
                Home
            </ButtonHomeEstilo>
        </Link>
    )
}

export default ButtonHome