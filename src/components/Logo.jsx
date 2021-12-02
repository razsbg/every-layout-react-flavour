import styled from "styled-components";

const LogoWrapper = styled.div`
  ${({ width }) => width && `width: ${width}px`};
  height: auto;
`;

export function Logo({ width = 100 }) {
  return (
    <LogoWrapper width={width}>
      <img src="/jack-in-the-egg-rooster1910.svg" alt="Logo" />
    </LogoWrapper>
  );
}
