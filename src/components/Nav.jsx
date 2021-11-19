import styled from "styled-components";

import { Cluster } from "components/Cluster";

export function Nav() {
  const StyledCluster = styled(Cluster)`
    padding: 0;
    margin: 0;
    list-style: none;
    font-size: 1.5rem;
  `;

  return (
    <nav>
      <StyledCluster forwardedAs="ul" align="center" space="2rem">
        <li>
          <a href="#">Link 1</a>
        </li>
        <li>
          <a href="#">Link 2</a>
        </li>
        <li>
          <a href="#">Link 3</a>
        </li>
        <li>
          <a href="#">Link 4</a>
        </li>
      </StyledCluster>
    </nav>
  );
}
