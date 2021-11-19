import styled from "styled-components";

import { Nav } from "components/Nav";
import { Logo } from "components/Logo";
import { Cluster } from "components/Cluster";

export function Header() {
  const StyledCluster = styled(Cluster)`
    padding: 1rem 1.5rem;
  `;

  return (
    <StyledCluster forwardedAs="header" justify="space-between" align="center">
      <Logo width={50} />
      <Nav />
    </StyledCluster>
  );
}
