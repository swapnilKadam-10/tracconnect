import { Link, useNavigate } from "react-router-dom";
import { useTitle } from "../hooks/useTitle";
import { useState } from "react";

import { toast } from "react-toastify";

export const Login = () => {
  const [loginInfo, setLoginInfo] = useState({
    phoneNo: "",
    password: "",
  });

  const navigate = useNavigate();

  useTitle("Login");

  const handleLogin = async (e) => {
    e.preventDefault();

    const info = {
      phoneNo: e.target.phoneNo.value,
      password: e.target.password.value,
    };

    setLoginInfo(info);

    try {
      const url = "http://localhost:8080/auth/login";
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json", // Specifies JSON format
        },
        body: JSON.stringify(loginInfo), // Converts the loginInfo object to a JSON string
      });

      const data = await response.json(); // Parse the JSON response

      if (data.jwtToken) {
        sessionStorage.setItem("jwtToken", JSON.stringify(data.jwtToken));
      }
      if (response.status === 200) {
        console.log("Login successful :", data);
        toast.success("Login successful");
        e.target.phoneNo.value = "";
        e.target.password.value = "";
        navigate("/dashboard");
      } else if (response.status === 403) {
        console.log("Login failed :", data);
        toast.error("Login failed");
        e.target.phoneNo.value = "";
        e.target.password.value = "";
      }
      return data;
    } catch (error) {
      console.error("Error logging in:", error.message);
      throw error;
    }
  };
  return (
    <main>
      <h1 className="text-3xl text-gray-800 font-bold text-center py-10 underline underline-offset-8  dark:text-slate-100">
        Login
      </h1>

      <div className="flex flex-col max-w-96 min-h-80 m-auto border rounded-md shadow-xl">
        <form onSubmit={handleLogin} className="flex flex-col p-5">
          <label
            className="text-lg  dark:text-slate-100"
            htmlFor="Email or Phone number:"
          >
            Mobile No:
          </label>
          <input
            type="text"
            name="phoneNo"
            id="phoneNo"
            autoComplete="off"
            required
            minLength="10"
            maxLength="10"
            className="bg-gray-50 border mb-6 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />

          <label htmlFor="password" className="text-lg dark:text-white">
            Password :
          </label>
          <input
            type="password"
            name="password"
            id="password"
            className="bg-gray-50 border mb-4 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-slate-100  dark:focus:ring-blue-500 dark:focus:border-blue-500"
            autoComplete="off"
            required
          />

          <button className="py-2 px-5 bg-blue-600  text-white mt-5 rounded-xl m-auto hover:bg-blue-500">
            Log In
          </button>
        </form>
        <div className="flex flex-col text-center justify-center sm:flex-row ">
          <p className="dark:text-slate-100">Don`t have account ? </p>
          <span className="text-blue-500 hover:underline">
            {" "}
            <Link to="/register"> create new account</Link>
          </span>
        </div>
      </div>
    </main>
  );
};
