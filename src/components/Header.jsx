import styled from "styled-components";

import { Nav } from "components/Nav";
import { Logo } from "components/Logo";
import { Cluster } from "components/Cluster";

const StyledCluster = styled(Cluster)`
  padding: 1rem 1.5rem;
`;

export function Header() {
  return (
    <StyledCluster forwardedAs="header" justify="space-between" align="center">
      <Logo width={50} />
      <Nav />
    </StyledCluster>
  );
}
