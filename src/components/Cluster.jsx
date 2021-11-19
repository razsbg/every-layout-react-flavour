import styled from "styled-components";

export function Cluster({ children, as = "div", className = "", justify = null, align = null, space = null }) {
  const StyledDiv = styled.div`
    ${space && `--space: ${space};`}

    display: flex;
    flex-wrap: wrap;
    gap: var(--space, 1rem);
    ${align && `align-items: ${align};`}
    ${justify && `justify-content: ${justify};`}
  `;

  return (
    <StyledDiv as={as} className={className}>
      {children}
    </StyledDiv>
  );
}
