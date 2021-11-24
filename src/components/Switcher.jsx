import styled from "styled-components";

export function Switcher(props) {
  const { children, threshold, gap, limit } = props;

  const StyledDiv = styled.div`
    ${threshold && `--threshold: ${threshold};`}
    ${gap && `--gap: ${gap};`}

    display: flex;
    flex-wrap: wrap;
    gap: var(--gap, var(--s1));

    & > * {
      flex-grow: 1;
      flex-basis: calc((var(--threshold, 40rem) - 100%) * 999);
    }

    & > :nth-last-child(n + ${limit}),
    & > :nth-last-child(n + ${limit}) ~ * {
      flex-basis: 100%;
    }
  `;

  return <StyledDiv threshold={threshold}>{children}</StyledDiv>;
}
