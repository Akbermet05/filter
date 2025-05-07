import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div id="header">
      <div className="container">
        <div className="header">
          <Link to="/add">Add</Link>
          <Link to="/list">List</Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
