import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
   html {
        overflow-x: hidden;
    }

    * {
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
`;

export default GlobalStyle;
