import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
}

*:focus{
  outline: 0;
}

// font-size: 16px (Desktop)

html {
    @media (max-width: 1080px) {
      font-size: 93.75%; // 15px
    }

    @media (max-width: 720px) {
      font-size: 87.5%; // 14px
    }
  }

  // REM = 1rem = 16px

html, body, #root{
  height: 100%;
}

body{
  -webkit-font-smoothing: antialiased;
}

body, input, button {
  font-family: 'Poppins', sans-serif;
}

a {
  text-decoration: none;
}

ul {
  list-style: none;
}

button{
  cursor: pointer;
}
`;
