import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  :root {
    --clr-bg: hsl(348, 100%, 7%);
    --clr-body-text: hsl(352, 43%, 93%);

    --ff: sans-serif;

    --space: 1.5rem;
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
`;
