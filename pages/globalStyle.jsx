import { createGlobalStyle } from 'styled-components';
import { backgroundColor } from '../static/styleConstants';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${backgroundColor};
    margin: 0;
  }
`;

export default GlobalStyle;
