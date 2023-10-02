import { createGlobalStyle } from "styled-components";


export const GlobalStyle = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Skranji:wght@400;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Pacifico&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&family=Pacifico&display=swap');   


:root{
    --varcolorAnim : white;
}

.titulo-page{
    font-family: 'Dancing Script', cursive;
    font-family: 'Pacifico', cursive;
}  

a{
    text-decoration: none;
    font-family: 'Pacifico', cursive;
}

button{
    font-family: 'Skranji', cursive;
}

button:hover{
    color: rgb(230, 255, 193);
}

p{
    font-family: 'Pacifico', cursive;
}


`;