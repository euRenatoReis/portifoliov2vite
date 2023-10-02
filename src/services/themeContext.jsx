import React, { createContext, useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";

export const themes = {

    light: {
        color: 'rgb(1, 44, 6)',
        colorButton: 'rgb(163, 216, 83)',
        background: 'rgb(24, 97, 19)',
        backgroundHeader: 'rgb(196, 221, 194)',
        border: 'solid 2px #56ab54',
        boxShadow: '0px 0px 30px 7px rgba(0,0,0,0.75)',
        backgroundTelas: 'rgb(200, 245, 196)',
        hovers: 'white'
    },
    dark: {
        color: 'rgb(230, 255, 193)',
        colorButton: 'white',
        background: 'rgba(153, 214, 149, 1)',
        backgroundHeader: 'rgb(0, 77, 0)',
        border: 'solid 2px rgb(124, 201, 118)',
        boxShadow: '0px 0px 28px 8px rgb(124, 201, 118)',
        backgroundTelas: 'rgb(0, 34, 0)',
        hovers: 'black'
    }
}


export const ThemeContext = createContext({
    theme: 'light',
    updateTheme: () => { }
});

export const ThemeContextProvider = (props) => {

    const [theme, setTheme] = useState(themes.light)

    useEffect(() => {
        localStorage.setItem("theme", theme);
    }, [theme])


    const updateTheme = (newTheme) => {

        setTheme(newTheme)
    }

    const currentTheme = themes[theme] || themes.light

    return (

        <ThemeContext.Provider value={{ theme, updateTheme }}>
            <ThemeProvider theme={currentTheme} key={theme}>
                {props.children}
            </ThemeProvider>
        </ThemeContext.Provider>
    )
}