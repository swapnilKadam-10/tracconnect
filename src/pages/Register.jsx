import { useState } from "react";
import { useTitle } from "../hooks/useTitle";
import { useNavigate } from "react-router-dom";

import { toast } from "react-toastify";
export const Register = () => {
  const [signupInfo, setSignupInfo] = useState({
    name: "",
    email: "",
    phoneNo: "",
    password: "",
  });
  useTitle("Register");

  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    const info = {
      name: e.target.name.value,
      email: e.target.email.value,
      phoneNo: e.target.phoneNo.value,
      password: e.target.password.value,
    };

    setSignupInfo(info);

    try {
      const url = "http://localhost:8080/auth/signup";
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json", // Specifies JSON format
        },
        body: JSON.stringify(signupInfo), // Converts the loginInfo object to a JSON string
      });

      const data = await response.json();
      if (response.status === 201) {
        toast.success("Successfully registered!!");
        navigate("/login");
      } else {
        toast.error(data);
      }
    } catch (e) {
      console.error("Error logging in:", error.message);
      throw error;
    }
  };

  return (
    <main>
      <h1 className="text-3xl underline underline-offset-8 text-center my-10 dark:text-slate-100">
        Register
      </h1>
      <div className=" m-auto border max-w-xl mb-20 rounded-xl shadow-xl">
        <form onSubmit={handleRegister} className="flex flex-col m-auto p-3">
          {/* <h4 className="text-xl font-semibold dark:text-slate-100 text-center underline underline-offset-4">
            Personal Information:
          </h4> */}
          <fieldset className="flex flex-col p-3 ">
            <label htmlFor="name" className="text-lg dark:text-slate-100">
              Full Name :{" "}
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="bg-gray-50 border mb-6 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-slate-100 dark:focus:ring-blue-500 dark:focus:border-blue-500"
              autoComplete="off"
              required
            />

            <label htmlFor="email" className="text-lg dark:text-slate-100">
              Email :
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="bg-gray-50 border mb-6 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-slate-100 dark:focus:ring-blue-500 dark:focus:border-blue-500"
              autoComplete="off"
              required
            />

            <label htmlFor="pno" className="text-lg dark:text-slate-100">
              Phone Number :
            </label>
            <input
              type="text"
              name="num"
              id="phoneNo"
              className="bg-gray-50 border mb-6 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-slate-100 dark:focus:ring-blue-500 dark:focus:border-blue-500"
              autoComplete="off"
              required
              maxLength="10"
              minLength="10"
            />

            <label htmlFor="password" className="text-lg dark:text-slate-100">
              Password :
            </label>
            <input
              type="password"
              name="password"
              id="password"
              className="bg-gray-50 border mb-6 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-slate-100 dark:focus:ring-blue-500 dark:focus:border-blue-500"
              autoComplete="off"
              required
              minLength="8"
            />
          </fieldset>
          {/* <h1 className="text-xl font-semibold dark:text-slate-100 text-center underline underline-offset-4 mb-4">Address :</h1>
          <fieldset className="grid grid-cols-1 gap-3 sm:grid-cols-2 p-3">
            <label htmlFor="dist" className="text-lg dark:text-slate-100">
              District :
              <input
                type="text"
                name="dist"
                id="dist"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-slate-100 dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </label>
            <label htmlFor="tal" className="text-lg dark:text-slate-100">
              {" "}
              Taluka :
              <input type="text" name="tal" id="tal" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-slate-100 dark:focus:ring-blue-500 dark:focus:border-blue-500"  />
            </label>
            <label htmlFor="vilage" className="text-lg dark:text-slate-100">
              {" "}
              Vilage :
              <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-slate-100 dark:focus:ring-blue-500 dark:focus:border-blue-500"  />
            </label>

            <label htmlFor="pin" className="text-lg dark:text-slate-100">
              PinCode:
              <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-slate-100 dark:focus:ring-blue-500 dark:focus:border-blue-500" maxLength="6" minLength="6"/>
            </label>
          </fieldset>    */}

          <button className="py-2 my-3 px-5 text-slate-100 bg-blue-700 w-32 m-auto rounded-2xl">
            Register
          </button>
        </form>
      </div>
    </main>
  );
};
