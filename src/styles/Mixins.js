import { theme } from "./Theme"

export function Button() {
  return `
    width: auto;
    padding: 10px 20px 7px;
    text-align: center;
    color: ${theme.black};
    margin-top: 30px;
  `
}

export function buttonHover() {
  return `
    position: relative;
    display: inline-block;
    margin-top: 0;
    background-size: 100%;
    z-index: 100;
  `
}

export function buttonHoverBefore() {
  return `
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    opacity: 0;
    z-index: -100;
    transition: opacity 0.3s ease-out;
  `
}

export function blueGradient() {
  return `
    background: rgb(115, 110, 229);
    background: transparent linear-gradient(90deg, ${theme.lightTeal} 0%, ${theme.darkPurple} 100%) 0% 0% no-repeat padding-box;
  `
}

export function blueGradientReverse() {
  return `
    background: rgb(115, 110, 229);
    background: transparent linear-gradient(90deg, ${theme.darkPurple} 0%, ${theme.lightTeal} 100%) 0% 0% no-repeat padding-box;
  `
}

export function pinkGradient() {
  return `
    background: rgb(115,110,229);
    background: transparent linear-gradient(90deg, ${theme.darkPurple} 0%, ${theme.pink} 100%) 0% 0% no-repeat padding-box;
  `
}

export function pinkGradientReverse() {
  return `
    background: rgb(115,110,229);
    background: transparent linear-gradient(90deg, ${theme.pink} 0%, ${theme.darkPurple} 100%) 0% 0% no-repeat padding-box;
  `
}

export function Benton() {
  return `
    font-family: benton-sans-compressed, sans-serif;
    font-style: normal;
    font-weight: 700;
  `
}

export function Nimbus() {
  return `
    font-family: nimbus-sans-extended, sans-serif;
    font-style: normal;
    font-weight: 400;
  `
}

export function NimbusBold() {
  return `
    font-family: nimbus-sans-extended, sans-serif;
    font-style: normal;
    font-weight: 700;
  `
}

export function Work() {
  return `
    font-family: work-sans, sans-serif;
    font-style: normal;
    font-weight: 400;
  `
}

export function Spinner() {
  return `
    .sk-fading-circle {
      margin: auto;
      width: 40px;
      height: 40px;
      position: relative;
    }

    .sk-fading-circle .sk-circle {
      width: 100%;
      height: 100%;
      position: absolute;
      left: 0;
      top: 0;
    }

    .sk-fading-circle .sk-circle:before {
      content: '';
      display: block;
      margin: 0 auto;
      width: 15%;
      height: 15%;
      background-color: ${theme.white};
      border-radius: 100%;
      -webkit-animation: sk-circleFadeDelay 1.2s infinite ease-in-out both;
              animation: sk-circleFadeDelay 1.2s infinite ease-in-out both;
    }
    .sk-fading-circle .sk-circle2 {
      -webkit-transform: rotate(30deg);
          -ms-transform: rotate(30deg);
              transform: rotate(30deg);
    }
    .sk-fading-circle .sk-circle3 {
      -webkit-transform: rotate(60deg);
          -ms-transform: rotate(60deg);
              transform: rotate(60deg);
    }
    .sk-fading-circle .sk-circle4 {
      -webkit-transform: rotate(90deg);
          -ms-transform: rotate(90deg);
              transform: rotate(90deg);
    }
    .sk-fading-circle .sk-circle5 {
      -webkit-transform: rotate(120deg);
          -ms-transform: rotate(120deg);
              transform: rotate(120deg);
    }
    .sk-fading-circle .sk-circle6 {
      -webkit-transform: rotate(150deg);
          -ms-transform: rotate(150deg);
              transform: rotate(150deg);
    }
    .sk-fading-circle .sk-circle7 {
      -webkit-transform: rotate(180deg);
          -ms-transform: rotate(180deg);
              transform: rotate(180deg);
    }
    .sk-fading-circle .sk-circle8 {
      -webkit-transform: rotate(210deg);
          -ms-transform: rotate(210deg);
              transform: rotate(210deg);
    }
    .sk-fading-circle .sk-circle9 {
      -webkit-transform: rotate(240deg);
          -ms-transform: rotate(240deg);
              transform: rotate(240deg);
    }
    .sk-fading-circle .sk-circle10 {
      -webkit-transform: rotate(270deg);
          -ms-transform: rotate(270deg);
              transform: rotate(270deg);
    }
    .sk-fading-circle .sk-circle11 {
      -webkit-transform: rotate(300deg);
          -ms-transform: rotate(300deg);
              transform: rotate(300deg);
    }
    .sk-fading-circle .sk-circle12 {
      -webkit-transform: rotate(330deg);
          -ms-transform: rotate(330deg);
              transform: rotate(330deg);
    }
    .sk-fading-circle .sk-circle2:before {
      -webkit-animation-delay: -1.1s;
              animation-delay: -1.1s;
    }
    .sk-fading-circle .sk-circle3:before {
      -webkit-animation-delay: -1s;
              animation-delay: -1s;
    }
    .sk-fading-circle .sk-circle4:before {
      -webkit-animation-delay: -0.9s;
              animation-delay: -0.9s;
    }
    .sk-fading-circle .sk-circle5:before {
      -webkit-animation-delay: -0.8s;
              animation-delay: -0.8s;
    }
    .sk-fading-circle .sk-circle6:before {
      -webkit-animation-delay: -0.7s;
              animation-delay: -0.7s;
    }
    .sk-fading-circle .sk-circle7:before {
      -webkit-animation-delay: -0.6s;
              animation-delay: -0.6s;
    }
    .sk-fading-circle .sk-circle8:before {
      -webkit-animation-delay: -0.5s;
              animation-delay: -0.5s;
    }
    .sk-fading-circle .sk-circle9:before {
      -webkit-animation-delay: -0.4s;
              animation-delay: -0.4s;
    }
    .sk-fading-circle .sk-circle10:before {
      -webkit-animation-delay: -0.3s;
              animation-delay: -0.3s;
    }
    .sk-fading-circle .sk-circle11:before {
      -webkit-animation-delay: -0.2s;
              animation-delay: -0.2s;
    }
    .sk-fading-circle .sk-circle12:before {
      -webkit-animation-delay: -0.1s;
              animation-delay: -0.1s;
    }

    @-webkit-keyframes sk-circleFadeDelay {
      0%, 39%, 100% { opacity: 0; }
      40% { opacity: 1; }
    }

    @keyframes sk-circleFadeDelay {
      0%, 39%, 100% { opacity: 0; }
      40% { opacity: 1; }
    }
    `
}
