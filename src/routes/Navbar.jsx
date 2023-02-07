import React, { useContext, useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { SignupContext } from "../context/signup-context";

const Navbar = () => {
  const navigate = useNavigate();
  const { loggedIn, setLoggedIn } = useContext(SignupContext);
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (token) {
      setLoggedIn(true);
    }
  }, [token]);

  const logoutHandler = () => {
    navigate("/login");
    setLoggedIn(false);
    localStorage.removeItem("token");
  };

  const classNameLink =
    "p-2 lg:px-4 md:mx-2 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300";

  const activeClassName = `p-2 lg:px-4 md:mx-2 text-white rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300 bg-indigo-600`;

  return (
    <div
      className=" z-10 h-14 md:h-auto w-full md:w-auto md:flex flex-col justify-end md:flex-row md:ml-auto mt-20 md:mt-0"
    >
      <NavLink
        to={"/"}
        className={({ isActive }) =>
          isActive ? activeClassName : classNameLink
        }
      >
        Home
      </NavLink>
      <NavLink
        to={"/about"}
        className={({ isActive }) =>
          isActive ? activeClassName : classNameLink
        }
      >
        About
      </NavLink>
      <NavLink
        to={"/fav"}
        className={({ isActive }) =>
          isActive ? activeClassName : classNameLink
        }
      >
        Favouretes
      </NavLink>
      <NavLink
        to={"/cart"}
        className={({ isActive }) =>
          isActive ? activeClassName : classNameLink
        }
      >
        Your Cart
      </NavLink>
      <NavLink
        to={"/contact"}
        className={({ isActive }) =>
          isActive ? activeClassName : classNameLink
        }
      >
        Contact
      </NavLink>
      {loggedIn ? (
        <NavLink
          to={"account"}
          className={({ isActive }) =>
            isActive ? activeClassName : classNameLink
          }
        >
          Account
        </NavLink>
      ) : (
        <Link
          to={"login"}
          className="p-2 lg:px-4 md:mx-2 text-indigo-600 text-center border border-transparent rounded hover:bg-indigo-100 hover:text-indigo-700 transition-colors duration-300"
        >
          Login
        </Link>
      )}
      {loggedIn && (
        <Link
          onClick={logoutHandler}
          to={"/login"}
          className="p-1 lg:px-4 md:mx-2 text-indigo-600 text-center border border-solid border-indigo-600 rounded hover:bg-indigo-600 hover:text-white transition-colors duration-300 mt-1 md:mt-0 md:ml-1"
        >
          Logout
        </Link>
      )}
      {!loggedIn && (
        <Link
          to={"signup"}
          className="p-2 lg:px-4 md:mx-2 text-indigo-600 text-center border border-solid border-indigo-600 rounded hover:bg-indigo-600 hover:text-white transition-colors duration-300 mt-1 md:mt-0 md:ml-1"
        >
          Signup
        </Link>
      )}
    </div>
  );
};

export default Navbar;
