import { css } from 'styled-components';

export default css`
  html {
    height: 100%;
  }

  body {
    font-family: Lato, sans-serif;
    line-height: 1.3;
    background: #e46000;
    margin: 0;
    color: #ffe6e6;
    font-weight: 900;
    display: flex;
    min-height: 100%;
  }

  #__next {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
  }
`;
