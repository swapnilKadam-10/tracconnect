import React from "react";

export const Dashboard = () => {
  return (
    <div className=" w-fit m-auto min-h-screen ">
      <p className="text-3xl m-4 text-gray-700 sm:text-4xl dark:text-slate-100">
        Dashboard
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-2 m-3 mx-10 text-gray-700  ">
        <div className="h-32 w-52 p-2 mx-2 my-3 sm:h-40 sm:w-72 text-center border bg-yellow-100 border-l-8 border-l-red-500 rounded-xl shadow-lg">
          <p className="text-2xl font-semibold my-5">Total Clients</p>

          <span className="text-2xl mt-10 ">51</span>
        </div>
        <div className="h-32 w-52 mx-2 my-3  p-2 sm:h-40 sm:w-72 text-center border bg-green-200 border-l-8 border-l-blue-400 rounded-xl shadow-lg">
          <p className="text-xl font-solid font-semibold my-5">
            Total Hours Worked
          </p>
          <span className="text-3xl mt-10 ">51</span>
        </div>
        <div className="h-32 w-52 p-2 mx-2 my-3 sm:h-40 sm:w-72 text-center border bg-stone-200 border-l-8 border-l-green-400 rounded-xl shadow-lg">
          <p className="text-2xl font-semibold my-5">Total Revenue</p>
          <span className="text-3xl mt-10 ">$518400</span>
        </div>
      </div>

      <div className="min-h-40"></div>
    </div>
  );
};
