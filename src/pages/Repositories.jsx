import React, { useEffect, useState, useContext } from "react"
import { GetRepositories, GetPrintRepo, getLanguages } from "../getData/getData";
import { ThemeContext } from "../services/themeContext";
import styled from "styled-components";
import { borderPasseio, surgimento } from "../animacoes/animacoes";

const Repositories = () => {

    const [repositorio, SetRepositorio] = useState([])
    const [languages, setLanguages] = useState([])
    const { theme } = useContext(ThemeContext)
    const [hovered, setHovered] = useState(false)

    const [print, SetPrint] = useState([])

    async function GetRepositoriesDatas() {

        try {

            const pegaRepos = await GetRepositories()

            const Promises = await Promise.all(pegaRepos)

            console.log('print promises:', Promises)
            SetRepositorio(Promises)

        } catch (error) {
            console.log(error, 'erro ao renderizar repositorios')
        }

    }

    async function GetPrintRepositorio() {

        try {

            repositorio.map(async (reps) => {

                const repoName = reps.name

                const busca = await GetPrintRepo(repoName)
                const PrintPromises = await Promise.all(busca)

                console.log('print promises:', repoName, 'antes puro:', PrintPromises)

                SetPrint(PrintPromises)
            })

        } catch (error) {
            console.log(error, 'erro ao pegar foto do projeto')
        }

    }

    async function getLanguagesPre() {

        try {

            const repoName = reps.name

            const linguagens = await getLanguages(repoName);

            const prometendoLinguagens = await Promise.all(linguagens)
            setLanguages(prometendoLinguagens)

        } catch (error) {
            console.log('erro ao captar as linguagens', error)
        }

    }

    function mostrarMais() { setHovered(true) }

    function mostrarMenos() { setHovered(false) }

    function funcaoExecutora() {
        mostrarMais()
        getLanguagesPre()
    }

    useEffect(() => {

        GetRepositoriesDatas()
        GetPrintRepositorio()

    }, [])



    return (

        <ProjetosEstilo theme={theme}>

            <RepositoriesEstilo theme={theme}>
                {
                    repositorio.map((reps, index) => {

                        return (
                            <li key={index} style={{ backgroundImage: `url(${print})` }} onMouseEnter={funcaoExecutora} onMouseLeave={mostrarMenos}>
                                <a href={reps.html_url}>
                                    <div>
                                        <h3>{reps.name}</h3>

                                        <p>{reps.language}</p>

                                    </div>

                                    {hovered && (
                                        <div className="more-information">
                                            <p>{reps.full_name}</p>
                                            <ul className="linguagens">
                                                {languages.map((linguage, index) => (
                                                    <li key={index}>
                                                        {linguage}
                                                    </li>
                                                ))}
                                            </ul>
                                            <p>estrelas:{reps.stargazers_count}</p>
                                        </div>
                                    )}

                                </a>
                            </li>
                        )
                    })
                }
            </RepositoriesEstilo>

        </ProjetosEstilo>
    )
}


const ProjetosEstilo = styled.section`

    
display: flex;
flex: direction: row;
gap: 60px;
height: 90%;
justify-content: space-between;
align-items: center;
padding: 20px;
background-color: ${props => props.theme.backgroundTelas};
color: ${props => props.theme.color};

`


const RepositoriesEstilo = styled.ul`

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  max-height: 100%;
  gap: 10px;
  background-color: ${props => props.theme.backgroundTelas};

  li{

     display: flex;
     flex-direction: column;
     width: 300px;
     height: 300px;
     border: ${props => props.theme.border};
     border-radius: 10px;
     background-color: ${props => props.theme.background};
     color: ${props => props.theme.colorButton};
     box-shadow: ${props => props.theme.boxShadow}
     gap: 20px;
     animation: ${surgimento} 2s running;
     text-decoration: none;
     padding: 10px;
     flex-wrap: wrap;

     div{

       display: flex;
       justify-content: center;
       align-items: center;
       border-radius: 10px;
       gap: 10px;
     }

     a:link{
        color:${props => props.theme.colorButton};
     }
     a:visited{
        color:${props => props.theme.colorButton};
     }

     .more-information{
        display: flex;
        flex-direction: column;
        gap: 10px;
        justify-content: center;
     }
  }

`


export default Repositories