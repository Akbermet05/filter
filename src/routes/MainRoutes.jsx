import React from "react";
import { Route, Routes } from "react-router-dom";
import Add from "../components/Add";
import List from "../components/List";
import Header from "../components/Header";
import Edit from "../components/Edit";

const MainRoutes = () => {
  let routes = [
    {
      link: "/add",
      element: <Add />,
    },
    {
      link: "/list",
      element: <List />,
    },
    {
      link: "/edit/:id",
      element: <Edit />,
    },
  ];
  return (
    <Routes>
      {routes.map((el, index) => (
        <Route path={el.link} key={index} element={el.element} />
      ))}
    </Routes>
  );
};

export default MainRoutes;
