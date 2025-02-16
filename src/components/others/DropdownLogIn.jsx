import { Link, useNavigate } from "react-router-dom";

export const DropdownLogIn = ({ show, setShow }) => {
  const navigate = useNavigate();
  const handleLogout = () => {
    sessionStorage.clear();
    navigate("/");
  };
  return (
    <div
      className={`items-center justify-between  w-full md:flex md:w-auto md:order-1 ${
        show ? "" : "hidden"
      }`}
      id="navbar-sticky"
    >
      <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white">
        <li>
          <Link
            to="/"
            onClick={() => setShow(false)}
            className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-200 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 "
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            onClick={() => setShow(false)}
            className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-200 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 "
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="/#services"
            onClick={() => {
              document
                .getElementById("services")
                .scrollIntoView({ behavior: "smooth" });
              setShow(false);
            }}
            className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-200 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 "
          >
            Services
          </Link>
        </li>
        {show && (
          <li>
            <span
              onClick={() => {
                handleLogout();
                setShow(false);
              }}
              className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-200 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 "
            >
              Logout
            </span>
          </li>
        )}

        <li>
          <Link
            to="/dashboard"
            onClick={() => setShow(false)}
            className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-200 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 "
          >
            Dashboard
          </Link>
          <ul className="dropdown visible sm:hidden ">
            <li>
              <Link
                to="/dashboard/profile"
                onClick={() => setShow(false)}
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-200 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 "
              >
                Profile
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard/client"
                onClick={() => setShow(false)}
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-200 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 "
              >
                Clients
              </Link>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
};
