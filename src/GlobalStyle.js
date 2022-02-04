import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --maxWidth: 1280px;
    --white: #fff;
    --lightGrey: #eee;
    --midGrey: #353535;
    --darkGrey: #1c1c1c;
    --fontSuperBig: 3rem;
    --fontBig: 1.5rem;
    --fontMed: 1.2rem;
    --fontSmall: 0.9rem;
    --pink: rgba(243.87529134750366, 201.64479821920395, 250.75000405311584, 1);
  	--green: #CAFBD7;
    --buttonWidth: 380px;
    --buttonHeight: 70px;
    --buttonWidthMobile: 85%;
  }

  * {
    box-sizing: border-box;
    font-family: Comfortaa, sans-serif;
    z-index: 3;
  }

`;
