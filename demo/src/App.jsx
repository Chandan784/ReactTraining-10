import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("hii");
    return () => {
      console.log("hlw");
    };
  }, []);

  return (
    <>
      {count}
      <div style={{ fontSize: "100px", color: "red" }}>applute</div>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        change
      </button>

      <Navbar />
      <Navbar />
      <Navbar />
    </>
  );
}

export default App;
