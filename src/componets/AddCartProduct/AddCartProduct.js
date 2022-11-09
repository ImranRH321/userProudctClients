import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { MyContext } from "../../App";

const AddCartProduct = ({ pd }) => {
  const [cart, setCart] = useContext(MyContext);
  // const [number, setNumber] = useState(1);
  // const [addPrice, setAddPrice] = useState();

  // const handlePlus = () => {
  //   const newNumber = number + 1;
  //   setNumber(newNumber);
  //   setAddPrice(number * pd.price)
  // };
  // const handleMinus = () => {
  //   const newNumber = number - 1;
  //   setNumber(newNumber);
  //   setAddPrice(number - pd.price)
  // };

      
  if(cart){
    const newData = cart.filter(el => el._id == pd._id) 
    // console.log(newData, 'addtocart');
  }else{
    const newData = cart.filter(el => el._id !== pd._id) 
    // console.log(newData, 'addtocart');
  }

  return (
    <div className="flex shadow-xl">
      <div className="imgDb">
        <figure>
          <img className="w-[200px]" src={pd.img} alt="Shoes" />
        </figure>
      </div>
      <div className="text-left p-2">
        <p className="card-title">
          <small className="text-primary">{pd.name}</small>
        </p>
        <p className=" text-secondary">Price: <span>{pd.price}</span></p>
        <p className=" text-secondary">by: <span>{pd.seller}</span></p>
        <p className=" text-secondary">ratings: <span>{pd.ratings}</span></p>
      
        {/* <div className="flex justify-center">
          <button onClick={handleMinus} className="text-2xl">
            <FontAwesomeIcon icon={faMinus} />
          </button>
          <hr />
          <p className="mx-5">{number}</p>
          <button onClick={handlePlus} className="text-2xl">
            <FontAwesomeIcon icon={faPlus} />
          </button>
        </div> */}
        <div>
          <p className="text-purple-800">Quantity: {pd.quantity}</p>
          <p className="text-purple-800">stock: {pd.stock}</p>

        </div>
      </div>
    </div>
  );
};

export default AddCartProduct;
