import styled from "styled-components";

const StyledDiv = styled.div`
  ${({ space }) => space && `--space: ${space};`}

  display: flex;
  flex-wrap: wrap;
  gap: var(--space, 1rem);
  ${({ align }) => align && `align-items: ${align};`}
  ${({ justify }) => justify && `justify-content: ${justify};`}
`;

export function Cluster(props) {
  const { children, as = "div" } = props;

  return (
    <StyledDiv as={as} {...props}>
      {children}
    </StyledDiv>
  );
}
