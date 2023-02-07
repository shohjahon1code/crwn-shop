import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../routes/Navbar";

const Header = () => {
  const [showNavbar, setShownavnbar] = useState(true);

  const toggleNavbarHandler = () => {
    setShownavnbar((prev) => !prev);
  };
  return (
    <div>
      <nav class="bg-white py-2 md:py-4 dark:bg-gray-800">
        <div class="container px-4 mx-auto md:flex md:items-center">
          <div class="flex justify-between items-center">
            <Link to={"/"} class="font-bold text-xl text-indigo-600">
              Crwn-shop
            </Link>
            <button
              class="border border-solid border-gray-600 px-3 py-1 rounded text-gray-600 opacity-50 hover:opacity-75 md:hidden"
              id="navbar-toggle"
            >
              <i onClick={toggleNavbarHandler} class="fas fa-bars"></i>
            </button>
          </div>

          {showNavbar && <Navbar />}
        </div>
      </nav>
    </div>
  );
};

export default Header;
