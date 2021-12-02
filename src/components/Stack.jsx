import * as React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  ${({ space }) => space && `--space: ${space};`}

  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  ${({ recursive }) => !recursive && ">"} * + * {
    margin-top: var(--space, 1rem);
  }

  ${({ splitAfter }) =>
    splitAfter &&
    `
    &:only-child {
      height: 100%;
    }

    & > :nth-child(${splitAfter}) {
      margin-bottom: auto;
    }
  `}
`;

export function Stack(props) {
  const { children } = props;

  return <StyledDiv {...props}>{children}</StyledDiv>;
}
