import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./Navbar";
import Footer from "./Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div style={{ fontSize: "100px", color: "red" }}>applute</div>
      <Navbar />
      <Navbar />
      <Navbar />
      <Footer />
    </>
  );
}

export default App;
