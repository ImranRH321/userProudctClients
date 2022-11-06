import React from 'react';

const AddCartProduct = ({pd}) => {
    return (
        <div className="card md:mx:w-96  shadow-xl">
        <div className="imgDb">
          <figure>
            <img src={pd.img} alt="Shoes" />
          </figure>
        </div>
        <div className="card-body">
          <p className="card-title">
            <small className="text-primary">{pd.name}</small>
          </p>
          <h2 className="card-title">Price {pd.price}</h2>
          <div className="flex justify-center">
             <button className="text-5xl">-</button> 
             <input type="text"/>
             <button className="text-5xl">+</button>
          </div>
        </div>
      </div>
    );
};

export default AddCartProduct;