import React, { useEffect, useState } from "react";
import { useProduct } from "../context/ProductContext";
import { useNavigate, useParams } from "react-router-dom";

const Edit = () => {
  const { getOneProduct, oneProduct, editProduct } = useProduct();
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [color, setColor] = useState("");
  const { id } = useParams();
  useEffect(() => {
    getOneProduct(id);
  }, []);
  useEffect(() => {
    if (oneProduct) {
      setTitle(oneProduct.title);
      setColor(oneProduct.color);
    }
  }, [oneProduct]);
  const handleSave = () => {
    let editedProduct = {
      title: title,
      color: color,
    };
    editProduct(id, editedProduct);
    navigate("/list");
  };
  return (
    <div className="container">
      <div className="inputs">
        <input
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          placeholder="text"
          value={title}
        />
        <input
          onChange={(e) => setColor(e.target.value)}
          type="text"
          placeholder="color"
          value={color}
        />
        <button onClick={handleSave}>save</button>
      </div>
    </div>
  );
};

export default Edit;
