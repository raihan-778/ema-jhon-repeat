import React, { useEffect, useState } from "react";
import Products from "../Products/Products";
import "./Shop.css";
const Shop = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch(`products.json`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div className="shop-container">
      <div className="cart-container">
        {products.map((product) => (
          <Products product={product} key={product.id}></Products>
        ))}
      </div>
    </div>
  );
};

export default Shop;