import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    background: #EEF2F6;
    margin: 0;
    font-family: Arial, Helvetica, sans-serif;
    padding: 0;
    height: 100%;
  }

  ul, li, link, li {
    list-style: none;
    padding-left: 0;
  }
  
  a {
    color: black;
    text-decoration: none;
  }
`;

export default GlobalStyle;
