import { createGlobalStyle } from "styled-components"
import { colors } from "./colors";

export const GlobalStyle = createGlobalStyle`
  body, html {
    background-color: ${colors.background};
    color: ${colors.heading};
    font-family: Poppins, sans-serif;
    height: 100vh;
    width: 100%;
  }
  body, html, * {
    font-family: 'Syne', sans-serif;
    padding: 0;
    margin: 0;
  }
  button {
    cursor: pointer;
    border: none;
  }
  #root {
    display: flex;
    width: 100%;
    height: 100vh;
  }
`