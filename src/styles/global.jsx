import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    color: #fff;
  }
  body {
    background: #2F363D;
    -webkit-font-smoothing: antialiased;

  }
  body, input, button{
    font: 16px Roboto, sans-serif;
  }
  #root {
    max-width: 960px;
    margin: 0 auto;
    padding: 40px 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  button {
    cursor: pointer;
  }
`;
