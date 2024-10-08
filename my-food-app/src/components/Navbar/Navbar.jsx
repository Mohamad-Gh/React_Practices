import React, { useState } from "react";
import Logo from "../../assets/food-logo.png";
import { Link } from "react-router-dom";
import DarkMode from "./DarkMode";

import { FaCartShopping } from "react-icons/fa6";
import { useGlobalContext } from "../../Context/Context";

function Navbar() {
  const { currentOrder } = useGlobalContext();
  return (
    <>
      <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 ">
        <div className="container py-3 sm:py-0 ">
          <div className="flex justify-between items-center">
            <div>
              <Link
                to={"/"}
                className="flex items-center gap-3 text-2xl sm:text-3xl font-bold"
              >
                <img src={Logo} alt="logo" className="w-10" />
                Food Hut
              </Link>
            </div>
            <div className="flex items-center gap-4">
              <div>
                <div>
                  <DarkMode />
                </div>
              </div>
              <ul className=" hidden sm:flex gap-4">
                <li>
                  <Link
                    to="/"
                    className="inline-block py-4 px-4 hover:text-primary"
                  >
                    Home
                  </Link>
                </li>{" "}
                <li>
                  <Link
                    to="/Foods"
                    className="inline-block py-4 px-4 hover:text-primary"
                  >
                    Menu
                  </Link>
                </li>
                <li>
                  <a
                    href="#"
                    className="inline-block py-4 px-4 hover:text-primary"
                  >
                    Contact
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="inline-block py-4 px-4 hover:text-primary"
                  >
                    About
                  </a>
                </li>
              </ul>
              <Link to={"/Order"}>
                <button className="flex items-center gap-1 bg-gradient-to-r from-primary to-secondary text-white px-4 py-1 rounded-full relative hover:scale-105 duration-300 ">
                  Cart
                  <FaCartShopping className="text-xl drop-shadow-sm cursor-pointer" />
                  {currentOrder.length > 0 ? (
                    <span className="flex justify-center items-center absolute bottom-4 left-20 bg-blue-400 rounded-full w-5 h-5">
                      {currentOrder.length}
                    </span>
                  ) : null}
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
