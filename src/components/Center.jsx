import styled from "styled-components";

const StyledDiv = styled.div`
  ${({ centerText }) => centerText && "text-align: center;"}
  ${({ gutter }) => `padding-inline: ${gutter || "var(--s1, 1rem)"};`}
  ${({ contentWidth }) => `max-width: ${contentWidth || "var(--measure, 60ch)"};`}
  ${({ intrinsic }) =>
    intrinsic &&
    `
    display: flex;
    align-items: center;
    flex-direction: column;
  `}

  margin-inline: auto;
  box-sizing: content-box;
`;

export function Center(props) {
  const { children, as = "div" } = props;

  return (
    <StyledDiv as={as} {...props}>
      {children}
    </StyledDiv>
  );
}
