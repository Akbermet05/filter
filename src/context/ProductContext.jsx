import axios from "axios";
import React, { createContext, useContext, useReducer } from "react";

const productContext = createContext();
export const useProduct = () => useContext(productContext);
const initialState = {
  data: [],
  oneProduct: {},
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET":
      return { ...state, data: action.payload };
    case "GET_ONE":
      return { ...state, oneProduct: action.payload };
    default:
      return state;
  }
};
const ProductContext = ({ children }) => {
  const API = "https://api-crud.elcho.dev/api/v1/0f453-bdbed-e1eb4/API";
  const [state, dispatch] = useReducer(reducer, initialState);
  async function addProduct(newProduct) {
    await axios.post(API, newProduct);
  }
  async function readProduct() {
    let { data } = await axios.get(API);
    dispatch({
      type: "GET",
      payload: data.data,
    });
  }

  async function deleteProduct(id) {
    await axios.delete(`${API}/${id}`);
    readProduct();
  }

  async function getOneProduct(id) {
    let data = await axios.get(`${API}/${id}`);
    dispatch({
      type: "GET_ONE",
      payload: data.data,
    });
  }
  async function editProduct(id, editedPro) {
    delete editProduct._id;
    await axios.patch(`${API}/${id}`, editedPro);
    readProduct();
  }
  function filterProduct(value) {
    if (value === "red") {
      let result = state.data.filter((el) => el.color === "red");
      dispatch({
        type: "GET",
        payload: result,
      });
    }
  }
  const values = {
    addProduct,
    readProduct,
    deleteProduct,
    filterProduct,
    getOneProduct,
    editProduct,
    data: state.data,
    oneProduct: state.oneProduct,
  };
  return (
    <productContext.Provider value={values}>{children}</productContext.Provider>
  );
};

export default ProductContext;
