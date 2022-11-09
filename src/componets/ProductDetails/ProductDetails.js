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
        <div className="card mx:w-96  shadow-xl d-">
          <figure>
            <img src={oneProduct?.img} alt="Shoes" />
          </figure>
          <div className="card-body ">
            <h2 className="card-title">{oneProduct?.name}</h2>
            <p>
              seller: <span>{oneProduct?.seller}</span>{" "}
            </p>
            <p>
              seller: <span>{oneProduct?.category}</span>{" "}
            </p>
            <p>
              Price: <span>{oneProduct?.price}</span>{" "}
            </p>
            <p>
              ratings: <span>{oneProduct?.ratings}</span>{" "}
            </p>
            
            <p>
              stock: <span>{oneProduct?.stock}</span>{" "}
            </p>
            <div className="underTheCard flex justify-between">
              <div className=" btn btn-warning  bg-purple-400 font-bold btn-sm w-6/12">
                <button className="">Cart</button>
              </div>
              <br />
              <div className=" btn bg-secondary mx-2 text-white font-bold btn-sm w-6/12">
                {/* <Link to={`/productId/${singleProduct._id}`} className="">
                  details
                </Link> */}      details
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
