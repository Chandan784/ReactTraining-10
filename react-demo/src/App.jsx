import Navbar from "./Navbar";
import Home from "./Home";
import { useState, useRef } from "react";
import Product from "./components/Product";

function App() {
  let [img, setImg] = useState("");

  let imgRef = useRef();

  function handelImageClick() {
    setImg(imgRef.current.value);
  }

  return (
    <>
      <div className=" text-center">
        <input
          className="  border-amber-300 border-2"
          type="text"
          ref={imgRef}
          placeholder=" enter image link"
        />
        <button
          onClick={handelImageClick}
          className=" bg-green-700 text-white rounded-2xl px-4 py-2"
        >
          Add image
        </button>
      </div>

      <div>
        <Product myImage={img} />
      </div>
    </>
  );
}

export default App;
