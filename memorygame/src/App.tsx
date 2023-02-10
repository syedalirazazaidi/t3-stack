import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [check, setCheck] = useState(false);
  const [quiz, setQuiz] = useState<number>();
  const randomNumber = () => {
    const answer = Math.ceil(Math.random() * 2);
    setQuiz(answer);
    setCheck(true);
  };
  return (
    <div className="App">
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "200px 200px",
          gridRow: " auto auto",
          gridColumnGap: "20px",
          gridRowGap: "20px",
        }}
      >
        <div className="box" onClick={randomNumber}>
          {check === true ? quiz : ""}
        </div>
        <div className="box" onClick={randomNumber}>
          {check === true ? quiz : ""}
        </div>
        <div className="box" onClick={randomNumber}>
          {check === true ? quiz : ""}
        </div>
        <div className="box" onClick={randomNumber}>
          {check === true ? quiz : ""}
        </div>
      </div>
    </div>
  );
}

export default App;
