import React, { useContext } from "react"
import { esferaGithubAnimada, esferaEmailAnimada, esferaLinkedinAnimada, esferaWattsAppAnimada, linksNaoGiram } from './StyledPages'
import { ThemeContext } from "../services/themeContext";
import styled from "styled-components";
import { FaWhatsapp, FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const Contact = () => {



     const { theme } = useContext(ThemeContext)

     return (
          <ContatoEstilo theme={theme}>

               <div className="github-bubble">
                    <a href="https://github.com/euRenatoReis?tab=repositories">
                         <FaGithub style={{ color: "rgb(255, 255, 255)", width: '60px', height: '60px' }} />
                    </a>
               </div>

               <div className="linkedin-bubble">
                    <a href="https://www.linkedin.com/in/renato-vieira-dos-reis-836577188/">
                         <FaLinkedin style={{ color: "rgb(255, 255, 255)", width: '60px', height: '60px' }} />
                    </a>
               </div>

               <div className="wattsapp-bubble">
                    <a href="https://api.whatsapp.com/send?phone=5527988242885">
                         <FaWhatsapp style={{ color: "rgb(255, 255, 255)", width: '60px', height: '60px' }} />
                    </a>
               </div>

               <div className="email-bubble" >
                    <a href="https://criarmeulink.com.br/u/1685217464">
                         <FaEnvelope style={{ color: "rgb(255, 255, 255)", width: '60px', height: '60px' }} />
                    </a>
               </div>
     
          </ContatoEstilo>
     )
}


const ContatoEstilo = styled.section`
    
display: flex;
flex: direction: row;
height: 90%;
align-items: center;
background-color: ${props => props.theme.backgroundTelas};
color: ${props => props.theme.color};
gap: 80px;

.github-bubble, .linkedin-bubble, .wattsapp-bubble, .email-bubble{

      display: flex;
      width: 80px;
      height: 80px;
      border-radius: 40px;
      align-items: center;
      justify-content: center;
      background-color: ${props => props.theme.background};
      color: ${props => props.theme.color};
      border: ${props => props.theme.border};
      box-shadow: ${props => props.theme.boxShadow};
      transition: 1s ease-in-out;
      justify-self: center;
      margin-rigth: 20px;
      position: absolute;
}

.linkedin-bubble{
   
   animation: ${esferaLinkedinAnimada} 2s ease-in 1s alternate;
   left: 200px;
}

.wattsapp-bubble{

   animation: ${esferaWattsAppAnimada} 2s ease-in 1s alternate;
   left: 400px;
}

.email-bubble{
  
   animation: ${esferaEmailAnimada} 2s ease-in 1s alternate;
   left: 600px;
}

.github-bubble{

   animation: ${esferaGithubAnimada} 2s ease-in 2s alternate;
   left: 800px;
}

.linkedin-bubble a{
   
     animation: ${linksNaoGiram} 2s ease-in 1s  alternate;
     color: ${props => props.theme.colorButton}
     text-decoration: none;
}
  
.wattsapp-bubble a{
  
     animation: ${linksNaoGiram} 2s ease-in 1s  alternate;
     color: ${props => props.theme.colorButton}
     text-decoration: none;
}
  
.email-bubble a{
    
     animation: ${linksNaoGiram} 2s ease-in 1s  alternate;
     color: ${props => props.theme.colorButton}
     text-decoration: none;
}
  
.github-bubble a{
  
     color: ${props => props.theme.colorButton}
     text-decoration: none;
}


`




export default Contact