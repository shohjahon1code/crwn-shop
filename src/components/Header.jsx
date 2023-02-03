import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../routes/Navbar";

const Header = () => {
  return (
    <div>
      <nav class="bg-white py-2 md:py-4 dark:bg-gray-800">
        <div class="container px-4 mx-auto md:flex md:items-center">
          <div class="flex justify-between items-center">
            <Link to={'/'} class="font-bold text-xl text-indigo-600">
              Crwn-shop
            </Link>
            <button
              class="border border-solid border-gray-600 px-3 py-1 rounded text-gray-600 opacity-50 hover:opacity-75 md:hidden"
              id="navbar-toggle"
            >
              <i class="fas fa-bars"></i>
            </button>
          </div>

          <Navbar />
        </div>
      </nav>
    </div>
  );
};

export default Header;
