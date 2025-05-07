import React, { useEffect } from "react";
import { useProduct } from "../context/ProductContext";
import { useNavigate } from "react-router-dom";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

const List = () => {
  const { readProduct, data, deleteProduct, filterProduct } = useProduct();
  const navigate = useNavigate();
  useEffect(() => {
    readProduct();
  }, []);

  return (
    <div className="container">
      <div className="box">
        <div className="category">
          <FormControl>
            <FormLabel id="demo-radio-buttons-group-label">Color</FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="female"
              name="radio-buttons-group"
              onChange={(e) => filterProduct(e.target.value)}
            >
              <FormControlLabel value="all" control={<Radio />} label="All" />

              <FormControlLabel
                value="green"
                control={<Radio />}
                label="Green"
              />
              <FormControlLabel value="red" control={<Radio />} label="Red" />
              <FormControlLabel
                value="yellow"
                control={<Radio />}
                label="Yellow"
              />
              <FormControlLabel
                value="black"
                control={<Radio />}
                label="Black"
              />
            </RadioGroup>
          </FormControl>
        </div>
        {data.map((el, index) => (
          <div key={index} className="list">
            <h1>{el.title}</h1>
            <p>{el.color}</p>
            <div className="btn">
              <button onClick={() => deleteProduct(el._id)}>delet</button>
              <button onClick={() => navigate(`/edit/${el._id}`)}>edit</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default List;
