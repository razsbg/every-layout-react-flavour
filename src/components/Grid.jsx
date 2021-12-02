import styled from "styled-components";

const StyledDiv = styled.div`
  display: grid;
  ${({ gap }) => gap && `--gap: ${gap};`}
  gap: var(--gap, var(--s1));

  ${({ minItemWidth }) =>
    minItemWidth &&
    `
      @supports (width: min(250px, 100%)) {
        grid-template-columns: repeat(auto-fit, minmax(min(${minItemWidth}, 100%), 1fr));
      }`}
`;

export function Grid(props) {
  const { children, minItemWidth = "250px" } = props;

  return (
    <StyledDiv minItemWidth={minItemWidth} {...props}>
      {children}
    </StyledDiv>
  );
}
