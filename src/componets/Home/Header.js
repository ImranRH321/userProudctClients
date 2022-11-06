import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { MyContext } from "../../App";

const Header = () => {
  const [cart] = useContext(MyContext)

  console.log(cart);

  return (
    <div className="navbar bg-base-100 px-5">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl">INfinix</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal p-0">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/login">login</Link>
          </li>
          <li>
            <Link to="/register">register</Link>
          </li>
          <li>
            <Link to="/product">product</Link>
          </li>
          <li>
            <Link to="/cart">cart{cart.length}</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
