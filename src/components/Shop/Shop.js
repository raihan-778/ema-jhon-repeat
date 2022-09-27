import React, { useEffect, useState } from "react";
import { addToDb, getStoredShoppingCart } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import Products from "../Products/Products";
import "./Shop.css";
const Shop = () => {
  const [products, setProducts] = useState([]);
  const[cart,setCart]=useState([])

  //hooks for getting data from fake db
  useEffect(() => {
    fetch(`products.json`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  //hooks for getting data from local storage
  useEffect(()=>{
    const storedCart = getStoredShoppingCart()
    console.log(storedCart)
    const savedCart=[]
    for(const id in storedCart){
        const addedProduct= products.find(product=>product.id===id)
        console.log(addedProduct)
        if(addedProduct){
          const quantity = storedCart[id]  
          console.log(addedProduct)
          addedProduct.quantity =quantity
          savedCart.push(addedProduct)
          
        }
     
      }
      setCart(savedCart)
  },[products])

  const handleAddToCart=(product)=>{
    addToDb(product.id)
    const newCart = [...cart, product]
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
