import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MyContext } from "../../App";
import useProducts from "../../useProducts/useProducts";
import addDb from "../FakeDb/FakeDb";
import Product from "../Product/Product";
import "./Products.css";

const Products = () => {
  const [products] = useProducts();
  const [cart, setCart] = useContext(MyContext);


  const hanldeCart = singleProduct => {
    const newCart = [...cart, singleProduct];

    let newCart22 = [];
        const exists = cart.find(product => product.id === singleProduct.id);
        if(!exists){
            singleProduct.quantity = 1;
            newCart22 = [...cart, singleProduct];
        }
        else{
            const rest = cart.filter(product => product.id !== singleProduct.id);
            exists.quantity = exists.quantity + 1;
            newCart22 = [...rest, exists];
        }

    setCart(newCart22);
    addDb(singleProduct._id) 
  };

  console.log(cart, "product ");

  return (
    <div>
      <h1>proudct page {products.length}</h1>
      <div class="relative grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 gap-5 border">
        {products.map(singleProduct => (
          <Product
            singleProduct={singleProduct}
            key={singleProduct._id}
            hanldeCart={hanldeCart}
          ></Product>
        ))}
      </div>
    </div>
  );
};

export default Products;
