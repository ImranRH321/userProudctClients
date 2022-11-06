import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useProducts from "../../useProducts/useProducts";

const ProductDetails = () => {
  const { singleId } = useParams({});

  const [oneProduct, setOneProduct] = useState();

  useEffect(() => {
    const url = `http://localhost:5000/products/${singleId}`;
    fetch(url)
      .then(res => res.json())
      .then(data => setOneProduct(data));
  }, []);

  console.log(oneProduct);

  return (
    <div>
      <h1>{singleId}</h1>
      <h2>Details page product</h2>
      <div class="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 gap-5 border">
        <div className="card mx:w-96  shadow-xl">
          <figure>
            <img src={oneProduct?.img} alt="Shoes" />
          </figure>
          <div className="card-body ">
            <h2 className="card-title">{oneProduct?.name}</h2>
            <p>Price: {oneProduct?.price}</p>
            <p>Quantity: {oneProduct?.quantity}</p>
            <p>ratings: {oneProduct?.ratings}</p>
            <p>seller: {oneProduct?.seller}</p>
            <p>stock: {oneProduct?.stock}</p>

            <div className="card-actions justify-end">
              <button className="btn btn-primary">Listen</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
