import React, { useState } from "react";
import { useProduct } from "../context/ProductContext";

const Add = () => {
  const { addProduct } = useProduct();
  const [title, setTitle] = useState("");
  const [color, setColor] = useState("");

  const handlePage = () => {
    let newProduct = {
      title: title,
      color: color,
    };
    addProduct(newProduct);
  };
  return (
    <div className="container">
      <div className="inputs">
        <input
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          placeholder="text"
        />
        <input
          onChange={(e) => setColor(e.target.value)}
          type="text"
          placeholder="color"
        />
        <button style={{ border: "2px solid black" }} onClick={handlePage}>
          create
        </button>
      </div>
    </div>
  );
};

export default Add;
