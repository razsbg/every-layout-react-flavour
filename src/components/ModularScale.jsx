import styled from "styled-components";

const FlexContainer = styled.div`
  display: flex;
  gap: 1rem;
  align-items: flex-end;
  justify-content: center;
`;

const ScaleItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const scaleNumbers = [5, 4, 3, 2, 1, 0, 1, 2, 3, 4, 5];

export function ModularScale() {
  return (
    <FlexContainer>
      {scaleNumbers.map((number, index) => {
        const cssVarName = getCSSVarName(number, index);

        return (
          <ScaleItemContainer>
            <p style={{ width: "3rem", height: `var(${cssVarName})`, backgroundColor: "black" }} />
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
    </FlexContainer>
  );
}
