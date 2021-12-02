import styled from "styled-components";

import { Grid } from "components/Grid";

const ScaleItemContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
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
            <p style={{ width: "100%", height: `var(${cssVarName})`, backgroundColor: "black" }} />
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
