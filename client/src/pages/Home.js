import React from "react";
import Cart from "../components/Cart";
import SimpleImageSlider from "react-simple-image-slider";

const images = [
  { url: "images/logo.jpg"},
  { url: "images/Uconn.jpg" },
  { url: "images/baby.jpg"},
  { url: "images/beach.jpg" },
  { url: "images/beachhats.jpg" },
  { url: "images/Birthday1.jpg"},
  { url: "images/Christmas.jpg" },
  { url: "images/ChristmasCake.jpg" },
  { url: "images/ChristmasCookies.jpg"},
  { url: "images/cincodemayo.jpg" },
  { url: "images/CinnamonBread.jpg" },
  { url: "images/DuckEggBread.jpg"},
  { url: "images/OwlCake.jpg" },
  { url: "images/OwlCookies.jpg" },
  { url: "images/PeanutButter.jpg" },
  { url: "images/SnowCake.jpg"},
  { url: "images/SpaCake.jpg" }
];

const Home = () => {
  return (
    <div className="containerItems">
     <h1>Duck Egg Bakery</h1> 
      <div className="blockquote">My goal is to create beautiful cookies, cakes, and breads for any occasion you have.
      <div>
     <b class="term" >  Contact Information: Margaret Calkins
      Email: mcalkins7613@gmail.com     
      </b>
      </div>
      </div> 
     <div class="centerslider">
      <SimpleImageSlider
        width={750}
        height={750}
        images={images}
        slideDuration={0.5}
        autoPlay={true}
      />
      <Cart />
      </div>
    </div>
  );
};




export default Home;
