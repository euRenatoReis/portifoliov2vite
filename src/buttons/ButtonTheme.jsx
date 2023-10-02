import React, { useContext } from "react"
import { ButtonTemaEstilo } from "./StyledButtons"
import { ThemeContext, themes } from "../services/themeContext"


const ButtonTheme = ()=>{

  const { theme, updateTheme } = useContext(ThemeContext)

    return(
        <ButtonTemaEstilo onClick={()=> updateTheme(theme === themes.light ? themes.dark : themes.light)} theme={theme}>
             Theme
        </ButtonTemaEstilo>
    )
}


export default ButtonTheme