import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';
import device from '../constants/breakpoints';

const GlobalStyle = createGlobalStyle`
// Import normalize.css
${normalize}

  * {
    box-sizing: border-box;
  }

  body {
    background: ${({ theme }) => theme.colors.body.background};
    color: ${({ theme }) => theme.colors.text.secondary};
    font-family: 'DM Sans', sans-serif;
    font-weight: 500;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow-x: hidden;
    margin: 0px;
    padding: 0px;
    width: 100%;
    
    @media only screen and ${device.sm} {
      font-size: 1.5rem;
    }
  }
  h1 {
    font-size: 33px;
    font-weight: 400;

    @media only screen and ${device.sm} {
      font-size: 2.5rem;
  }


  }
  a {
    color: ${({ theme }) => theme.colors.link.text};
    cursor: pointer;
  }
  button {
    display: inline-block;
    border: 0;
    padding: 0.5rem 2rem;
    border-radius: 20px;
    cursor: pointer;
    font-family: ${({ theme }) => theme.font};
  }
`;

export default GlobalStyle;
