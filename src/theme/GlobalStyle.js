import { createGlobalStyle } from 'styled-components';


export const GlobalStyle = createGlobalStyle`
  @import url(href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@200&display=swap");
  
  *, *::before, *::after {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
   
  }
  
 
  
  body {
    padding: 0 100px 0 100px;
    margin: 0;
    font-family: 'Nunito Sans', sans-serif;
    background: #f8f1f1;
   
  }
`;

export default GlobalStyle;
