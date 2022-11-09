
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './componets/Home/Home';
import Login from './componets/shared/Login';
import Register from './componets/shared/Register';
import Header from './componets/Home/Header'
import Products from './componets/Products/Products';
import ProductDetails from './componets/ProductDetails/ProductDetails';
import React, { useState } from 'react';
import Cart from './componets/Cart/Cart';
import Footer from './componets/shared/Footer';

export const MyContext  = React.createContext()



function App() {
  
  const [cart, setCart] = useState([])

  return (
    <div className="App">
      <MyContext.Provider value={[cart, setCart]}>
      <Header/>
       <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='login' element={<Login/>}></Route>
        <Route path='register' element={<Register/>}></Route>
        <Route path='product' element={<Products/>}></Route>
        <Route path='cart' element={<Cart/>}></Route>
        <Route path='productId/:singleId' element={<ProductDetails/>}></Route>
       </Routes>
       <Footer></Footer>
       </MyContext.Provider>
    </div>
  );
}

export default App;
