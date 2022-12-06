import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./componets/Home/Home";
import Login from "./componets/shared/Login";
import Register from "./componets/shared/Register";
import Header from "./componets/Home/Header";
import NotFound from "./componets/NotFound/NotFound";
import About from "./componets/About/About";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="login" element={<Login />}></Route>
        <Route path="register" element={<Register />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </div>
  );
}

export default App;
