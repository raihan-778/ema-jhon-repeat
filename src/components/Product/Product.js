import React from "react";
import "./Product.css";
const Product = ({ product }) => {
  console.log(product);
  return (
    <div>
      <h2>{product.name}</h2>
    </div>
  );
};

export default Product;
