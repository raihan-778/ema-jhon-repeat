import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Products from "../Products/Products";
import "./Shop.css";
const Shop = () => {
  const [products, setProducts] = useState([]);
  const[cart,setCart]=useState([])
  useEffect(() => {
    fetch(`products.json`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);


  const handleAddToCart=(product)=>{
    const newCart = [...cart, product]
    console.log(newCart)
    setCart(newCart)
    
    
  }
  return (
    <div className="shop-container">
      <div className="cart-container">
        {products.map((product) => (
          <Products handleAddToCart={handleAddToCart} product={product} key={product.id}></Products>
        ))}
      </div>
      <Cart cart={cart}  products={products}></Cart>
      
    </div>
  );
};

export default Shop;
