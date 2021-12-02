import styled from "styled-components";

import { Grid } from "components/Grid";

const ScaleItemContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const ScaleItemBar = styled.p`
  width: 100%;
  ${({ cssVarName }) => `height: var(${cssVarName});`}

  outline-offset: 1px;
  background-color: black;
  outline: 1px solid hsl(255 0% 0% / 0.75);
`;

const scaleNumbers = [5, 4, 3, 2, 1, 0, 1, 2, 3, 4, 5];

const StyledGrid = styled(Grid)`
  align-items: end;
`;

export function ModularScale() {
  return (
    <StyledGrid minItemWidth="3rem" gap="var(--s-1)">
      {scaleNumbers.map((number, index) => {
        const cssVarName = getCSSVarName(number, index);

        return (
          <ScaleItemContainer key={index}>
            <ScaleItemBar cssVarName={cssVarName} />
            <p style={{ fontWeight: "bold" }}>{cssVarName}</p>
          </ScaleItemContainer>
        );

        function getCSSVarName(number, index) {
          let name = `--s${number}`;

          if (index < 5) {
            name = `--s-${number}`;
          }

          return name;
        }
      })}
    </StyledGrid>
  );
}
