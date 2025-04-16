import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useState } from "react";

function App(e) {
  let [number, setNumber] = useState(0);
  function increment() {
    setNumber(number + 1);
  }
  console.log(number);

  function decrement() {
    setNumber(number - 1);
  }

  return (
    <>
      <div className="" style={{ fontSize: "100px" }}>
        {number}
      </div>
      <button onClick={increment}>add</button>
      <button onClick={decrement}>sub</button>
    </>
  );
}

export default App;
