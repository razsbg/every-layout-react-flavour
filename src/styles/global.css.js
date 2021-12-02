import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  :root {

    --clr-bg: 12deg 100% 82%;
    --clr-body-text: 252deg 51% 24%;

    --ff: sans-serif;

    --ratio: 1.5;
    --s-5: calc(var(--s-4) / var(--ratio));
    --s-4: calc(var(--s-3) / var(--ratio));
    --s-3: calc(var(--s-2) / var(--ratio));
    --s-2: calc(var(--s-1) / var(--ratio));
    --s-1: calc(var(--s0) / var(--ratio));
    --s0: 1rem;
    --s1: calc(var(--s0) * var(--ratio));
    --s2: calc(var(--s1) * var(--ratio));
    --s3: calc(var(--s2) * var(--ratio));
    --s4: calc(var(--s3) * var(--ratio));
    --s5: calc(var(--s4) * var(--ratio));
  }

  html {
    font-family: var(--ff);
    color: hsl(var(--clr-body-text));
    background-color: hsl(var(--clr-bg));
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
