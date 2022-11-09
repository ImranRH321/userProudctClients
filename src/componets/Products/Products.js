import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MyContext } from "../../App";
import useProducts from "../../useProducts/useProducts";
import "./Products.css";

const Products = () => {
  const [products] = useProducts();
  const [cart, setCart] = useContext(MyContext);

  const hanldeCart = singleProduct => {
    const newCart = [...cart, singleProduct];
    setCart(newCart);
    //
    localStorage.setItem("cart", JSON.stringify(cart));
  };

  
  return (
    <div>
      <h1>proudct page {products.length}</h1>
      <div class="relative grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 gap-5 border">
        {products.map(singleProduct => (
          <div className="card md:mx:w-96  shadow-xl">
            <div className="imgDb">
              <figure>
                <img src={singleProduct.img} alt="Shoes" />
              </figure>
            </div>
            <div className="card-body">
              <p className="card-title">
                <small className="text-primary">{singleProduct.name}</small>
              </p>
              <h2 className="card-title">Price {singleProduct.price}</h2>
              <h2 className="card-title">Price {singleProduct.seller}</h2>
              <p className="card-title">ratting {singleProduct.ratting}</p>
              <p className="card-title">ratting {singleProduct.stock}</p>

              <div className="underTheCard flex justify-between">
                <div className=" btn btn-warning  text-dark font-bold btn-sm w-6/12">
                  <button onClick={() => hanldeCart(singleProduct)}>
                    Cart
                  </button>
                </div>
                <br />
                <div className=" btn btn-primary mx-2 text-white font-bold btn-sm w-6/12">
                  <Link to={`/productId/${singleProduct._id}`} className="">
                    details
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
