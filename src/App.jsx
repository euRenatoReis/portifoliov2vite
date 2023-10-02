import React from "react";
import styled from "styled-components";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Repositories from "./pages/Repositories";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";
import Layout from "./pages/Layout";
import { ThemeContextProvider } from "./services/themeContext";
import { GlobalStyle } from "./fonts/fonts";
import { ResetCss } from "./services/Reset";

function App() {

    return (
        <AppEstilizado className="App">
            <ResetCss />
            <ThemeContextProvider>
                <GlobalStyle />
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Layout />}>
                            <Route index element={<Home />} />
                            <Route path="projects-path" element={<Repositories />} />
                            <Route path="contact-path" element={<Contact />} />
                            <Route path="*" element={<NoPage />} />
                        </Route>
                    </Routes>
                </BrowserRouter>
            </ThemeContextProvider>
        </AppEstilizado>
    )
}


const AppEstilizado = styled.div`

     display: flex;
     height: 100vh;
     width: 100vw;
     background-color: bluesky;
`


export default App
