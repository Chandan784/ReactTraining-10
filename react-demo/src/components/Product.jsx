import React from "react";

function Product({ myImage }) {
  return (
    <div>
      <img src={myImage} alt="" />
    </div>
  );
}

export default Product;
