import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { SignupContext } from "../context/signup-context";

const Navbar = () => {
  const navigate = useNavigate();
  const { loggedIn, setLoggedIn } = useContext(SignupContext);

  const logoutHandler = () => {
    navigate("/login");
    setLoggedIn(false);
    localStorage.removeItem("token");
  };

  return (
    <div
      class="hidden md:flex flex-col md:flex-row md:ml-auto mt-3 md:mt-0"
      id="navbar-collapse"
    >
      <Link
        to={"/"}
        class="p-2 lg:px-4 md:mx-2 text-white rounded bg-indigo-600"
      >
        Home
      </Link>
      <Link
        to={"/about"}
        class="p-2 lg:px-4 md:mx-2 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300"
      >
        About
      </Link>
      <Link
        to={"/products"}
        class="p-2 lg:px-4 md:mx-2 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300"
      >
        Products
      </Link>
      <Link
        to={"/pricing"}
        class="p-2 lg:px-4 md:mx-2 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300"
      >
        Your Cart
      </Link>
      <Link
        to={"/contact"}
        class="p-2 lg:px-4 md:mx-2 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300"
      >
        Contact
      </Link>
      {loggedIn ? (
        <Link
          to={"account"}
          class="p-2 lg:px-4 md:mx-2 text-indigo-600 text-center border border-transparent rounded hover:bg-indigo-100 hover:text-indigo-700 transition-colors duration-300"
        >
          Account
        </Link>
      ) : (
        <Link
          to={"login"}
          class="p-2 lg:px-4 md:mx-2 text-indigo-600 text-center border border-transparent rounded hover:bg-indigo-100 hover:text-indigo-700 transition-colors duration-300"
        >
          Login
        </Link>
      )}
      {loggedIn && (
        <Link
          onClick={logoutHandler}
          to={"/login"}
          class="p-2 lg:px-4 md:mx-2 text-indigo-600 text-center border border-solid border-indigo-600 rounded hover:bg-indigo-600 hover:text-white transition-colors duration-300 mt-1 md:mt-0 md:ml-1"
        >
          Logout
        </Link>
      )}
      {!loggedIn && (
        <Link
          to={"signup"}
          class="p-2 lg:px-4 md:mx-2 text-indigo-600 text-center border border-solid border-indigo-600 rounded hover:bg-indigo-600 hover:text-white transition-colors duration-300 mt-1 md:mt-0 md:ml-1"
        >
          Signup
        </Link>
      )}
    </div>
  );
};

export default Navbar;
