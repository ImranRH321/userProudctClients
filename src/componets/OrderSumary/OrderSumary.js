import React from "react";

const OrderSumary = ({ cart }) => {
  let totalPrice = 0;
  let shipping = 0;

  for (const pd of cart) {
    totalPrice = totalPrice + pd.price;
    shipping = shipping + pd.shipping;
  }
 
  const tax = (totalPrice * 10 / 100)
//   console.log(tax,'tax');

  const payableTotal = totalPrice + shipping + tax;

  return (
   <div className="position-sticky top-10 bg-green-900 p-4">
     <div className="shadow-lg text-left w-[600px] mx-auto">
      <h1 className="font-bold p-2 text-orange-300">cart: {cart.length} </h1>
      <p className="font-bold p-2 text-orange-300">Total Price: {totalPrice}</p>
      <p className="font-bold p-2 text-orange-300">Shipping: {shipping}</p>
      <p className="font-bold p-2 text-orange-300">Tax: {tax}</p>
      <p className="font-bold p-2 text-orange-300">Payable Total: {payableTotal}</p>
    </div>
   </div>
  );
};

export default OrderSumary;
