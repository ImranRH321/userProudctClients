import React from "react";
import { useContext } from "react";
import { MyContext } from "../../App";
import AddCartProduct from "../AddCartProduct/AddCartProduct";

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
        <h2>Cart {cart.length}</h2>
        <div className="card w-96 bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Card title!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
