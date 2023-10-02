import { Link } from "react-router-dom"
import React, { useContext } from "react"
import { ButtonContactEstilo } from "./StyledButtons"
import { ThemeContext } from "../services/themeContext";



const ButtonContact = () => {

    const { theme } = useContext(ThemeContext)

    return (

        <Link to="/contact-path">
            <ButtonContactEstilo theme={theme}>
                Contato
            </ButtonContactEstilo>
        </Link>
    )
}

export default ButtonContact