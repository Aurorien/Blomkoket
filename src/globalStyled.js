import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #fbf9d0;
    background-image: url("../src/assets/img/meadow.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    font-family: Roboto, serif;
    font-weight: 200;
    overflow-x: hidden;
    margin: 0;
    padding: 0;
    div {
      padding: 0;
    }
  }
`;

export default GlobalStyle;
