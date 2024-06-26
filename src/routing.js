import React from "react";
import {Route, Routes} from "react-router-dom";
import HomePage from "./page/HomePage";
import ProductsPage from "./page/ProductsPage";

const Routing = () => {
  const PUBLIC_PAGES = [
    {
      link: "/",
      page: <HomePage />,
      id: 1,
    },
    {
      link: "/products",
      page: <ProductsPage />,
      id: 2,
    },
  ];

  return (
    <Routes>
      {PUBLIC_PAGES.map((page) => (
        <Route path={page.link} element={page.page} id={page.id} />
      ))}
    </Routes>
  );
};

export default Routing;
