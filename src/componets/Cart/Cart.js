import React from "react";
import { useContext } from "react";
import { json } from "react-router-dom";
import { MyContext } from "../../App";
import AddCartProduct from "../AddCartProduct/AddCartProduct";
import OrderSumary from "../OrderSumary/OrderSumary";

const Cart = () => {
  const [cart, setCart] = useContext(MyContext);
  //   48-9 start Ema-john module

  return (
    <div className="grid md:grid-cols-2">
      <div className="cart_container border">
        {cart.map(pd => (
          <AddCartProduct pd={pd} key={pd._id}></AddCartProduct>
        ))}
      </div>
      <div className="order_summary border">
         <OrderSumary cart={cart}></OrderSumary>
      </div>
    </div>
  );
};

export default Cart;
