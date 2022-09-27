import React from 'react';
import "./Cart.css";

const Cart = ({cart}) => {


    
    let totalPrice = 0;
    let shippingCharge=0;
    let grandTotal=0
    let tax=0
    

    for(const product of cart){
        totalPrice=totalPrice+product.price;
        shippingCharge =shippingCharge+product.shipping;
         tax = totalPrice*0.2
         grandTotal=totalPrice+shippingCharge+tax   
    }
    
    return (
        <div className='shopping-cart'>
            <h1>Order Summery</h1>
            <h3>Products in Cart: {cart.length}</h3>
            <h4>Total price : ${totalPrice}</h4>
            <p>Shipping: ${shippingCharge}</p>
            <p>Tax :{tax.toFixed(2)}</p>
            <h2>Grand Total: ${grandTotal}</h2>  
        </div>
    );
};

export default Cart;