import { keyframes } from "styled-components";



export const esferaGithubAnimada = keyframes`

0% { transform: translateY(-100px) }
10%{ transform: translateY(0px) }
20%{ transform: translateY(-80px) }
30%{ transform: translateY(0px) }
40%{ transform: translateY(-60px) }
50%{ transform: translateY(0px) }
60%{ transform: translateY(-40px) }
70%{ transform: translateY(0px) }
80%{ transform: translateY(-20px) }
90%{ transform: translateY(0px) }

`
export const esferaLinkedinAnimada = keyframes`

  0% {
    transform: translateY(0px);
    height: 80px;
    width: 80px;
    border-bottom-left-radius: 40px;
    border-bottom-right-radius: 40px;
  }
  10%{

    transform: translateY(0px);
    height: 60px;
    width: 100px;
    border-bottom-left-radius: 0px;
    border-bottom-right-radius: 0px;
  }
  11%{
    border-bottom-left-radius: 40px;
    border-bottom-right-radius: 40px;
  }
  20%{
    transform: translateY(-90px);
    height: 70px;
    width: 90px;
    border-bottom-left-radius: 40px;
    border-bottom-right-radius: 40px;
  }
  30%{
    transform: translateY(-180px);
    height: 80px;
    width: 80px;
    border-bottom-left-radius: 40px;
    border-bottom-right-radius: 40px;
  }
  39%{
    border-bottom-left-radius: 40px;
    border-bottom-right-radius: 40px;
  }
  40%{
    transform: translateY(0px);
    height: 60px;
    width: 100px;
    border-bottom-left-radius: 0px;
    border-bottom-right-radius: 0px;
  }
  50%{

    transform: translateY(0px);
    height: 80px;
    width: 80px;
    border-bottom-left-radius: 40px;
    border-bottom-right-radius: 40px;
  }
  60% {
    transform: translateY(0px);
    height: 60px;
    width: 100px;
    border-bottom-left-radius: 0px;
    border-bottom-right-radius: 0px;
  }
  61%{
    border-bottom-left-radius: 40px;
    border-bottom-right-radius: 40px;
  }
  70% {
    transform: translateY(-90px);
    height: 70px;
    width: 90px;
    border-bottom-left-radius: 40px;
    border-bottom-right-radius: 40px;
  }
  80%{

    transform: translateY(-180px);
    height: 80px;
    width: 80px;
    border-bottom-left-radius: 40px;
    border-bottom-right-radius: 40px;
  }
  90%{
    transform: translateY(0px);
    height: 60px;
    width: 100px;
    border-bottom-left-radius: 0px;
    border-bottom-right-radius: 0px;
  }
  99%{
    border-bottom-left-radius: 40px;
    border-bottom-right-radius: 40px;
  }
  100%{
    transform: translateY(0px);
    height: 80px;
    width: 80px;
    border-bottom-left-radius: 40px;
    border-bottom-right-radius: 40px;
  }

`

export const esferaWattsAppAnimada = keyframes`

0%{ top: 0; }
100% {top: 50%}

`

export const esferaEmailAnimada = keyframes`

0% { transform: translateX(0) translateY(0); }
25% { transform: translateX(100px) translateY(0); }
50% { transform: translateX(100px) translateY(100px); }
75% { transform: translateX(0) translateY(100px); }
100% { transform: translateX(0) translateY(0); }

`

export const linksNaoGiram = keyframes`

 0%{
    transform: rotate(0deg);
 }
 25%{
    transform: rotate(-90deg);
 }
 50%{
    transform: rotate(-180deg);
 }
 75%{
    transform: rotate(-270deg);
 }
 100%{
    transform: rotate(-360deg);
 }

`