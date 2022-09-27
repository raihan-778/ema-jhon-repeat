import React from 'react';
import "./Cart.css";

const Cart = ({products,cart}) => {
    return (
        <div className='shopping-cart'>
            <h1>Order Summery</h1>
            <h3>Products in Cart: {cart.length}</h3>
            <h4>Total price : ${}</h4>
            <p>Shipping: ${}</p>
            <p>Tax :{}</p>
            <h2>Grand Total: ${}</h2>  
        </div>
    );
};

export default Cart;