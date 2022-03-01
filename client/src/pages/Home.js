import React from "react";
import ProductList from "../components/ProductList";
import CategoryMenu from "../components/CategoryMenu";
import Cart from "../components/Cart";
import Logo from "../assets/color/logo.jpg"
import SimpleImageSlider from "react-simple-image-slider";

const images = [
  { url: "images/baby.jpg"},
  { url: "images/beach.jpg" },
  { url: "images/beachhats.jpg" }
];

const Home = () => {
  return (
    <div className="container my-1">
      My goal is to create beautiful cookies, cakes, and breads for any occasion you have. 
      <SimpleImageSlider
        width={896}
        height={504}
        images={images}
        showBullets={true}
        showNavs={true}
      />
      <img src={Logo} alt="test"/>
      <Cart />
    </div>
  );
};




export default Home;
