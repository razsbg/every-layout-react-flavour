import styled from "styled-components";

import { Stack } from "components/Stack";
import { Header } from "components/Header";
import { Switcher } from "components/Switcher";

const StyledCard = styled.div`
  border: 1px solid grey;
  padding: 0.5rem;
`;

function App() {
  return (
    <Stack space="3rem" className="App">
      <Header />
      <main style={{ paddingInline: "1.75rem" }}>
        <Stack>
          <h2>This is the content area</h2>
          <Switcher threshold="50rem" gap="var(--s-1)">
            <StyledCard>
              <h3>Card title</h3>
              <p>Card content</p>
            </StyledCard>
            <StyledCard>
              <h3>Card title</h3>
              <p>Card content</p>
            </StyledCard>
            <StyledCard>
              <h3>Card title</h3>
              <p>Card content</p>
            </StyledCard>
          </Switcher>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni,
            corporis similique eligendi distinctio voluptates deleniti voluptas
            ratione officiis, neque, nostrum ullam totam quas voluptatem? A, rem
            corporis! Atque, quas beatae.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque,
            accusantium tempore quisquam nostrum quaerat labore illum unde totam
            recusandae ut eius sunt eos eaque minima earum itaque? Veniam fugiat
            magnam vel qui illum amet tempora iste! Cum vero laudantium
            blanditiis repellendus magnam beatae praesentium dignissimos
            excepturi, molestias numquam cumque inventore dicta consequatur
            dolore pariatur? Molestiae qui commodi iusto ad tenetur blanditiis
            reprehenderit labore quo cupiditate repudiandae iste aliquid
            nostrum, ratione, sit quae similique ducimus porro.
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni,
            corporis similique eligendi distinctio voluptates deleniti voluptas
            ratione officiis, neque, nostrum ullam totam quas voluptatem? A, rem
            corporis! Atque, quas beatae.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque,
            accusantium tempore quisquam nostrum quaerat labore illum unde totam
            recusandae ut eius sunt eos eaque minima earum itaque? Veniam fugiat
            magnam vel qui illum amet tempora iste! Cum vero laudantium
            blanditiis repellendus magnam beatae praesentium dignissimos
            excepturi, molestias numquam cumque inventore dicta consequatur
            dolore pariatur? Molestiae qui commodi iusto ad tenetur blanditiis
            reprehenderit labore quo cupiditate repudiandae iste aliquid
            nostrum, ratione, sit quae similique ducimus porro.
          </p>
        </Stack>
      </main>
    </Stack>
  );
}

export default App;
