import React from "react";

const Product = ({ product }) => {
  const { name, img, price, id } = product;

  return (
    <div className="card md:-w-96 bg-base-100 shadow-xl mt:5">
      <figure>
        <img src={img} alt="Shoes" />
      </figure>
      <div className="card-body">
       <div className="border-purple-600">
       <h2 className=""> {name.slice(0,30)}</h2>
        <p class="md:text-2xl my-3"> {price}Taka</p>
        <div className="card-actions justify-center">
          <button className="btn btn-primary w-full">Buy Now</button>
        </div>
       </div>
      </div>
    </div>
  );
};

export default Product;
