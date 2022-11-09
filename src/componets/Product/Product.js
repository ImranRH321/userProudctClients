import React from "react";
import { Link } from "react-router-dom";

const Product = ({ singleProduct, hanldeCart }) => {
  const { name, img, id, price, stock } = singleProduct;

  return (
    <div>
      <h1>proudct page {singleProduct.length}</h1>

      <div className="card md:mx:w-96  shadow-xl">
        <div className="imgDb">
          <figure>
            <img className="" src={img} alt="Shoes" />
          </figure>
        </div>
        <div className="text-left my-4">
          <p className="">
            <small className="text-primary">
              {singleProduct.name.slice(0, 10)}
            </small>
          </p>
          <p className="">
            Price <span>{price}</span>
          </p>
          <p className="">
            ratting <span>{stock}</span>
          </p>

          <div className="underTheCard flex justify-between">
            <div className=" btn btn-warning  text-dark font-bold btn-sm w-6/12">
              <button onClick={() => hanldeCart(singleProduct)}>Cart</button>
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
    </div>
  );
};

export default Product;
