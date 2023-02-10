import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [list, setList] = useState([]);
  const [word, setWord] = useState("");
  //api.datamuse.com/words?ml=bad
  // https: useEffect;
  return (
    <div className="App">
      <h1>Vite + React</h1>
      <input
        value={word}
        onChange={(e) => setWord(e.target.value)}
        type="text"
        placeholder="enter the word"
        style={{
          padding: "10px 20px ",
          backgroundColor: "#ffff8",
          color: "red",
        }}
      />
      <p>Meaning:{word}</p>
    </div>
  );
}

export default App;
