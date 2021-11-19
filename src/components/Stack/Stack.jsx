import * as React from "react";
import styled from "styled-components";

export function Stack({ children, space = "var(--space)", recursive = false, splitAfter = null }) {
  const StyledDiv = styled.div`
    & {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
    }

    & > * + * {
      margin-top: 1.5rem;
    }

    ${recursive ? "&" : "& >"} * + * {
      margin-top: ${space};
    }

    ${splitAfter &&
    `
    &:only-child {
      height: 100%;
    }

    & > :nth-child(${splitAfter}) {
      margin-bottom: auto;
    }
  `}
  `;

  return <StyledDiv>{children}</StyledDiv>;
}
