import React, { useEffect, useState } from "react";

const useProducts = (singleId) => {
  const [products, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);

  // console.log(singleId);
  
  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then(res => res.json())
      .then(data => {setProduct(data)
        setLoading(true)
    });
  }, []);

   

  return [products , loading];
};

export default useProducts;
