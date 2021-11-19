import { Stack } from "./components/Stack";

function App() {
  return (
    <div className="App">
      <header>
        <div className="logo" style={{ width: "100px" }}>
          <img src="/jack-in-the-egg-rooster1910.svg" alt="Logo" />
        </div>
        <nav>
          <ul>
            <li>Link 1</li>
            <li>Link 2</li>
            <li>Link 3</li>
            <li>Link 4</li>
          </ul>
        </nav>
      </header>
      <main>
        <header>
          <Stack>
            <h2>This is the content area</h2>
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
        </header>
      </main>
    </div>
  );
}

export default App;
