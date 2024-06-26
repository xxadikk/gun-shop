import React from "react";
import { BrowserRouter } from "react-router-dom";
import Routing from "./routing";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Menu from "./components/Menu/Menu";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Menu />
      <Routing />
      <Footer />
    </BrowserRouter>
  );
};

export default App;
