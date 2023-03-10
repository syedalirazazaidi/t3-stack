import { useState } from "react";

import "./App.css";
import Counter from "./components/Counter";
import Header from "./components/header";
import List from "./components/List";

function App() {
  const [count, setCount] = useState<number>(10);
  const addItem = () => {
    setCount((prev) => prev + 1);
  };
  return (
    <div>
      <h1>Hello</h1>
      <Header title={"Vite"} />
      <Counter count={count} setCount={setCount} addItem={addItem} />
      <List
        items={["ali", "raza"]}
        render={(item: string) => <span>{item}</span>}
      />
    </div>
  );
}

export default App;
