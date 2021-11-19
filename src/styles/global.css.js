import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  :root {
    --clr-bg: hsl(12, 100%, 82%);
    --clr-body-text: hsl(252, 51%, 24%);

    --ff: sans-serif;
  }

  html {
    background-color: var(--clr-bg);
    color: var(--clr-body-text);
    font-family: var(--ff);
  }

  html,
  body,
  #root,
  .App {
    height: 100%;
  }

  img {
    max-width: 100%;
    height: auto;
  }
`;
