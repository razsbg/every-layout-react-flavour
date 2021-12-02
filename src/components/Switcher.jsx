import styled from "styled-components";

const StyledDiv = styled.div`
  ${({ threshold }) => threshold && `--threshold: ${threshold};`}
  ${({ gap }) => gap && `--gap: ${gap};`}

    display: flex;
  flex-wrap: wrap;
  gap: var(--gap, var(--s1));

  & > * {
    flex-grow: 1;
    flex-basis: calc((var(--threshold, 40rem) - 100%) * 999);
  }

  ${({ limit }) =>
    limit &&
    `& > :nth-last-child(n + ${limit}),
  & > :nth-last-child(n + ${limit}) ~ * {
    flex-basis: 100%;
  }`}
`;

export function Switcher(props) {
  const { children } = props;

  return <StyledDiv {...props}>{children}</StyledDiv>;
}
