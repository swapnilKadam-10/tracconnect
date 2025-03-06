import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { DropdownLogIn } from "../others/DropdownLogIn";
import { DropdownLogOut } from "../others/DropdownLogOut";

import Logo from "../../assets/background1.jpg";

export const Header = () => {
  const [show, setShow] = useState(false);
  const token = sessionStorage.getItem("jwtToken");

  const navigate = useNavigate();

  const handleLogout = () => {
    sessionStorage.clear();
    toast.success("User logged out successfully");
  };

  return (
    <header>
      <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link
            to="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img src={Logo} className="h-8 rounded-sm" alt="tracConnect Logo" />
            <span className="self-center text-xl sm:text-2xl font-semibold whitespace-nowrap dark:text-white">
              TracConnect
            </span>
          </Link>
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            {token ? (
              <button
                onClick={() => {
                  handleLogout();
                  navigate("/");
                }}
                type="button"
                className={`text-white bg-red-600 hover:bg-red-700 focus:ring-2 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center   max-md:hidden `}
              >
                Logout
              </button>
            ) : (
              <button
                onClick={() => navigate("/login")}
                type="button"
                className={`text-white bg-blue-700 hover:bg-blue-800 focus:ring-2 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center   max-md:hidden `}
              >
                Login
              </button>
            )}

            <button
              onClick={() => setShow(!show)}
              data-collapse-toggle="navbar-sticky"
              type="button"
              className={`  inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 `}
              aria-controls="navbar-sticky"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>

          {token ? (
            <DropdownLogIn show={show} setShow={setShow} />
          ) : (
            <DropdownLogOut show={show} setShow={setShow} />
          )}
        </div>
      </nav>
    </header>
  );
};
