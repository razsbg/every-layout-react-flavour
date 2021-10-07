import { Stack } from "./components/Stack/Stack";

import "./reset.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <main>
        <Stack recursive splitAfter={3}>
          <p>Let's implement a stack 📚</p>
          <p>Let's implement a stack 📚</p>
          <p>Let's implement a stack 📚</p>
          <div>
            <p>Let's implement a stack 📚</p>
            <p>Let's implement a stack 📚</p>
            <p>Let's implement a stack 📚</p>
          </div>
          <p>Let's implement a stack 📚</p>
        </Stack>
      </main>
    </div>
  );
}

export default App;
