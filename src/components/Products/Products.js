import React from "react";
import "./Products.css";
const Products = ({ product }) => {
  console.log(product);
  return (
    <div>
      <img src={product.img} alt="" />
      <h2>{product.name}</h2>
    </div>
  );
};

export default Products;
