import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./componets/Home/Home";
import Login from "./componets/shared/Login";
import Register from "./componets/shared/Register";
import Header from "./componets/Home/Header";
import NotFound from "./componets/NotFound/NotFound";
import About from "./componets/About/About";
import Products from "./componets/Products/Products/Products";
import ProductDetails from "./componets/Products/ProductDetails/ProductDetails";

function App() {

  /* 
  
  https://i.ibb.co/s11YhCH/1.webp
https://i.ibb.co/1M8FmDk/2.webp
https://i.ibb.co/BP11V5Q/3.webp
https://i.ibb.co/dQ3gzQM/4.webp
https://i.ibb.co/MNd9RYc/5.webp
https://i.ibb.co/3WtXMGL/7.jpg
https://i.ibb.co/82tY2wN/8.webp
https://i.ibb.co/HDZCfWL/9.jpg
https://i.ibb.co/K0tV8fY/10.webp
  */
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/product" element={<Products/>}></Route>
        <Route path="/productDetails/:id" element={<ProductDetails/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="login" element={<Login />}></Route>
        <Route path="register" element={<Register />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </div>
  );
}

export default App;
