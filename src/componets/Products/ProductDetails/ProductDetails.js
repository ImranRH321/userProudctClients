import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Modal from "../../Modal/Modal";

const ProductDetails = () => {
  const { id } = useParams();

  const [loadProduct, setLoadProduct] = useState({});
  const { name, price, img, tags, categories, description } = loadProduct;


  useEffect(() => {
    fetch(`http://localhost:5000/product/${id}`)
      .then(res => res.json())
      .then(data => setLoadProduct(data));
  }, []);

  return (
    <div className="text-start">
      <div className=" grid md:grid-cols-2 sm:grid-cols-2 xs:grid-cols-1">
        <div>
          <img className="w-[350px] mx-auto" src={img} alt="Album" />
        </div>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <h3>{price}</h3>
          <p>{tags}</p>
          <p>{categories}</p>
          <p>{description}</p>
          <div className="card-actions justify-start">
            <button className="btn btn-dark px-10">Order</button>
            <label htmlFor="my-modal" className="btn">
              OpenModal
            </label>
          </div>
        </div>
      </div>
      {
        loadProduct && <Modal loadProduct={loadProduct}></Modal>
      }
    </div>
  );
};

export default ProductDetails;
