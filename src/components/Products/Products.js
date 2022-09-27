import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Products.css";
const Products = ({product,handleAddToCart}) => {
  const {name,category,price,id,ratings,seller,img}=product
  
  return (
    <div> 
      <div className="products-container">
        <img src={img} alt="" />
        <h4>category: {category}</h4>
        <h2>{name}</h2>
        <p>Price: ${price}</p>
        <p><small>Manufacturer: {seller}</small></p>
        <p><small>Ratings: {ratings}</small></p>
        <button onClick={()=>handleAddToCart(product)} className="cart-btn">
         <p>Add To Cart</p>
         <FontAwesomeIcon icon={faCartPlus}></FontAwesomeIcon>
        </button>
      </div>
      
  </div>
   
  );
};

export default Products;
