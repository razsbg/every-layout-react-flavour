import styled from "styled-components";

export function Logo({ width = 100 }) {
  const LogoWrapper = styled.div`
    width: ${width}px;
    height: auto;
  `;

  return (
    <LogoWrapper>
      <img src="/jack-in-the-egg-rooster1910.svg" alt="Logo" />
    </LogoWrapper>
  );
}
