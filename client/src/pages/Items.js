import React from "react";
import ProductList from "../components/ProductList";
import CategoryMenu from "../components/CategoryMenu";
import Cart from "../components/Cart";


const Items = () => {
  return (
    <div className="containerItems">
      <CategoryMenu />
      <ProductList />
      <Cart />
   
    </div>
  );
};

export default Items;
