import styled from "styled-components";

import { Grid } from "components/Grid";
import { Stack } from "components/Stack";
import { Header } from "components/Header";
import { Switcher } from "components/Switcher";
import { ModularScale } from "components/ModularScale";

const StyledCard = styled.div`
  color: white;
  padding: 0.75rem;
  outline: 1px solid white;
  outline-offset: -4px;
  background-color: rgb(42, 30, 92);

  > :where(h3:first-child) {
    color: hsl(185, 80%, 69%);
  }
`;

const Main = styled.main`
  padding-inline: var(--s2);
  padding-block-end: var(--s2);

  @media (min-width: 60em) {
    max-width: 70vw;
    margin-inline: auto;
  }
`;

function App() {
  return (
    <Stack space="var(--s2)" className="App">
      <Header />
      <Main>
        <Stack>
          <h2>Modular Scale</h2>
          <ModularScale />

          <h2>Switcher</h2>
          <Switcher>
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

          <h2>Stack</h2>
          <Stack space="var(--s2)">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni, corporis similique eligendi distinctio
              voluptates deleniti voluptas ratione officiis, neque, nostrum ullam totam quas voluptatem? A, rem
              corporis! Atque, quas beatae.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, accusantium tempore quisquam nostrum
              quaerat labore illum unde totam recusandae ut eius sunt eos eaque minima earum itaque? Veniam fugiat
              magnam vel qui illum amet tempora iste! Cum vero laudantium blanditiis repellendus magnam beatae
              praesentium dignissimos excepturi, molestias numquam cumque inventore dicta consequatur dolore pariatur?
              Molestiae qui commodi iusto ad tenetur blanditiis reprehenderit labore quo cupiditate repudiandae iste
              aliquid nostrum, ratione, sit quae similique ducimus porro.
            </p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni, corporis similique eligendi distinctio
              voluptates deleniti voluptas ratione officiis, neque, nostrum ullam totam quas voluptatem? A, rem
              corporis! Atque, quas beatae.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, accusantium tempore quisquam nostrum
              quaerat labore illum unde totam recusandae ut eius sunt eos eaque minima earum itaque? Veniam fugiat
              magnam vel qui illum amet tempora iste! Cum vero laudantium blanditiis repellendus magnam beatae
              praesentium dignissimos excepturi, molestias numquam cumque inventore dicta consequatur dolore pariatur?
              Molestiae qui commodi iusto ad tenetur blanditiis reprehenderit labore quo cupiditate repudiandae iste
              aliquid nostrum, ratione, sit quae similique ducimus porro.
            </p>
          </Stack>

          <h2>Grid</h2>
          <Grid>
            <StyledCard>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi doloremque adipisci maxime aspernatur,
                eveniet vel.
              </p>
            </StyledCard>
            <StyledCard>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi doloremque adipisci maxime aspernatur,
                eveniet vel.
              </p>
            </StyledCard>
            <StyledCard>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi doloremque adipisci maxime aspernatur,
                eveniet vel.
              </p>
            </StyledCard>
            <StyledCard>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi doloremque adipisci maxime aspernatur,
                eveniet vel.
              </p>
            </StyledCard>
            <StyledCard>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi doloremque adipisci maxime aspernatur,
                eveniet vel.
              </p>
            </StyledCard>
            <StyledCard>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi doloremque adipisci maxime aspernatur,
                eveniet vel.
              </p>
            </StyledCard>
            <StyledCard>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi doloremque adipisci maxime aspernatur,
                eveniet vel.
              </p>
            </StyledCard>
          </Grid>
        </Stack>
      </Main>
    </Stack>
  );
}

export default App;
