import React from "react";
import ProductList from "../components/ProductList";
import CategoryMenu from "../components/CategoryMenu";
import Cart from "../components/Cart";
import Logo from "../assets/color/logo.jpg"

const Home = () => {
  return (
    <div className="container">
      My goal is to create beautiful cookies, cakes, and breads for any occasion you have. 
      <img src={Logo} style={{opacity: 0.25}} alt="test"/>
      <Cart />
    </div>
  );
};

export default Home;