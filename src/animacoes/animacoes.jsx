import { keyframes } from "styled-components";

export const surgimento = keyframes`

0%{
  opacity: 0%;
}
100%{
  opacity: 100%;
}

`

export const indoDireita = keyframes`

0%{
   transform: translateX(-300px);
}
100%{
   transform: translateX(0px);
}

`

export const borderPasseio = keyframes`



0%{ border-top: solid 1px var(--varcolorAnim); border-right: solid 1px ${props => props.theme.border} ; border-bottom: solid 1px ${props => props.theme.border} ; border-left: solid 1px ${props => props.theme.border} ;}
12%{ border-right: solid 1px var(--varcolorAnim); border-top: solid 1px ${props => props.theme.border} ;  border-bottom: solid 1px ${props => props.theme.border} ; border-left: solid 1px ${props => props.theme.border} ;}
37%{ border-bottom: solid 1px var(--varcolorAnim); border-top: solid 1px ${props => props.theme.border} ; border-left: solid 1px ${props => props.theme.border} ;  border-right: solid 1px ${props => props.theme.border} ;}
50%{ border-left: solid 1px var(--varcolorAnim); border-top: solid 1px ${props => props.theme.border} ; border-bottom: solid 1px ${props => props.theme.border} ;  border-right: solid 1px ${props => props.theme.border} ;} 
62%{ border-top: solid 1px var(--varcolorAnim); border-right: solid 1px ${props => props.theme.border} ; border-bottom: solid 1px ${props => props.theme.border} ; border-left: solid 1px ${props => props.theme.border} ;} 
75%{ border-right: solid 1px var(--varcolorAnim); border-top: solid 1px ${props => props.theme.border} ;  border-bottom: solid 1px ${props => props.theme.border} ; border-left: solid 1px ${props => props.theme.border} ;}
87%{ border-bottom: solid 1px var(--varcolorAnim); border-top: solid 1px ${props => props.theme.border} ; border-left: solid 1px ${props => props.theme.border} ;  border-right: solid 1px ${props => props.theme.border} ;}
100%{ border-left: solid 1px var(--varcolorAnim); border-top: solid 1px ${props => props.theme.border} ; border-bottom: solid 1px ${props => props.theme.border} ;  border-right: solid 1px ${props => props.theme.border} ;}

`