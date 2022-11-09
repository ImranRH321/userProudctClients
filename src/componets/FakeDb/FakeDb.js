const addDb = id => {
  let cartProduct = {};

  const quantity = cartProduct[id];

  if (quantity) {
    const newQuantity = quantity + 1;
    cartProduct[id] = newQuantity;
  } else {
    cartProduct[id] = 1;
  }

  localStorage.setItem("cartProduct", JSON.stringify(cartProduct));
};

module.exports = addDb;

//
