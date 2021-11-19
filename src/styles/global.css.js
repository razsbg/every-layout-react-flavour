import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  :root {
    --clr-bg: hsl(0, 11%, 85%);
    --clr-body-text: hsl(177, 31%, 43%);

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
