import React, { useState } from "react";
import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [open, setOpen] = useState(true);
  const Location = useLocation()
  console.log(Location); 
  console.log(window.innerWidth); 

  useEffect(()=> {
 if(window.innerWidth <= 767 ){
   setOpen(!open)
 }
//  window  resize
  },[Location])

  return (
    <header>
      <nav className="bg-cyan-400">
        <nav className="p-5 bg-white shadow md:flex md:items-center md:justify-between">
          <div className="flex justify-between items-center">
            <span className="text-2xl font-[Poppins] cursor-pointer">
              {/* <img
                className="h-10 inline"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrVEr9QK9GgMwFA4lfMFf3qJyY8jNf2MCDhw&usqp=CAU"
                alt=""
              /> */}
              logo
            </span>
            <span
              onClick={() => setOpen(!open)}
              className="text-3xl cursor-pointer mx-2 md:hidden block"
            >
              {open ? (
                  <ion-icon name="close"></ion-icon>
                ) : (
             
                <ion-icon name="menu" onClick={() => setOpen(false)}></ion-icon>
              )}
            </span>
          </div>
          <ul
            className={`md:flex md:justify-center ${
              !open ? "hidden absolute" : ""
            } `}
          >
            <li className="mx-4 my-5 md:my-0">
              <Link
                to="/home"
                className="text-xl hover:text-cyan-400 duration-500"
              >
                HOme
              </Link>
            </li>
            <li className="mx-4 my-5 md:my-0">
              <Link
                to="/product"
                className="text-xl hover:text-cyan-400 duration-500"
              >
               Products
              </Link>
            </li>
            <li className="mx-4 my-5 md:my-0">
              <Link
                to="/about"
                className="text-xl hover:text-cyan-400 duration-500"
              >
                About
              </Link>
            </li>
            <li className="mx-4 my-5 md:my-0">
              <a href="#" className="text-xl hover:text-cyan-400 duration-500">
                Service
              </a>
            </li>
            <li className="mx-4 my-5 md:my-0">
              <a href="#" className="text-xl hover:text-cyan-400 duration-500">
                Blogs
              </a>
            </li>
         

            <li className="mx-4 my-5 md:my-0">
              <a href="#" className="text-xl hover:text-cyan-400 duration-500">
                product
              </a>
            </li>
            <button className="bg-cyan-400 font[Proppins] text-white px-3 py-2 duration-500 hover:text-cyan-600 mx-3">
              Get started
            </button>
          </ul>
        </nav>
      </nav>
    </header>
  );
};

export default Header;

/* 

        <ul className={`md:flex md:items-center z[-1] z-auto md:static absolute bg-white w-full left-0 md:w-auto md:py-4 md:pl-0 pl-7 md:opacity-100 opacity-0 top[400px] transition-all ease-in duration-500 `}>
*/
