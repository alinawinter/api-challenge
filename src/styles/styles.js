import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
*,
*::before,
*::after {
  box-sizing: border-box;
}

body {
  background-color: darkblue;
  margin: 0 auto;
}
`;
