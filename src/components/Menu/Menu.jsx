import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "../Menu/Menu.css";
import { PUBLIC_PAGES } from "../helpers/const";

const Menu = () => {
  const location = useLocation();
  const [newPath, setNewPath] = useState("");
  const path = location.pathname;

  function updatePath() {
    PUBLIC_PAGES.map((item) => {
      if (item.link === path) {
        setNewPath(item.page);
      }
      if (item.page == "УЦ") {
        item.page = "Удостоверяющий центр";
        setNewPath(item.page);
      }
    });
  }
  useEffect(() => {
    updatePath(path);
  });
  return (
    <>
      {newPath !== "Главная" ? (
        <div className="menu">
          <div className="container">
            <div className="menu-block">
              <div>Главная</div>
              <ul>
                <li>{newPath}</li>
              </ul>
            </div>
            <div className="title-block">{newPath}</div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Menu;
