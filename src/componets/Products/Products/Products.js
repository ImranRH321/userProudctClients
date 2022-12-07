import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Product from "../Product/Product";

const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/product")
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  return (
    <div>
      <div className="grid grid-cols-1 sm:gap-4 sm:grid-cols-2 md:grid-cols-3  gap-5">
        {products.map(product => (
          <Product kew={product._id} product={product}></Product>
        ))}
      </div>
    </div>
  );
};

export default Products;
