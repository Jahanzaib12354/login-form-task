

import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

import Register from "./pages/Register";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Product1 from "./pages/Product1";
import Product2 from "./pages/Product2";
import Product3 from "./pages/Product3";

const AppWrapper: React.FC = () => {
  const location = useLocation();
  const noNavFooterPaths = ["/", "/login"];
  const showNavFooter = !noNavFooterPaths.includes(location.pathname);

  return (
    <>
      {showNavFooter && <Navbar />}

      <div style={{ paddingBottom: showNavFooter ? "60px" : "0" }}>
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/product1" element={<Product1 />} />
          <Route path="/product2" element={<Product2 />} />
          <Route path="/product3" element={<Product3 />} />
        </Routes>
      </div>

      {showNavFooter && <Footer />}
    </>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <AppWrapper />
    </Router>
  );
};

export default App;