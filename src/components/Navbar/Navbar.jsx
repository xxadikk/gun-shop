import React, {useEffect, useState} from "react";
import LogoProject from "../assets/Logo.png";
import "../Navbar/Navbar.css";
import {NavLink, useLocation} from "react-router-dom";

const Navbar = () => {
  const {pathname} = useLocation();
  const [isNavbarScrolled, setIsNavbarScrolled] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const isScrolled = window.pageYOffset > 100;
      setIsNavbarScrolled(isScrolled);
    });

    return () => window.removeEventListener("scroll");
  }, []);
  return (
    <div className='nav'>
      <div className={`navbarblock ${isNavbarScrolled ? "scroll" : ""}`}>
        <div className='container'>
          <nav className='navbar'>
            <div class='nav-logo'>
              <img src={LogoProject} alt='Logo' />
            </div>
            <ul className='nav-menu'>
              <li>
                <NavLink to='/' className={pathname == "/" ? "active" : ""}>
                  Каталог
                </NavLink>
              </li>
              <li>
                <NavLink
                  to='/products'
                  className={pathname == "products" ? "active" : ""}>
                  О продукте
                </NavLink>
              </li>
            </ul>
            <div className='nav-input'>
              <input type='text' name='' placeholder='Поиск' />
            </div>
            <div className='nav-btn'>
              <button className='btn'>Начать</button>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
