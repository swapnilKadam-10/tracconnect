import { useState } from "react";

export const Profile = () => {
  const [show, setShow] = useState(false);
  const [edit, setEdit] = useState(false);

  return (
    <>
      <div className="w-[1000px] min-h-screen mx-2">
        <div className="flex  justify-between mx-20 mb-5 items-center">
          <p className="text-2xl py-5 text-gray-700 dark:text-slate-100 ">
            Profile Card
          </p>
          <button
            onClick={() => setShow(!show)}
            className="h-10 px-5 ml-5 bg-blue-600 text-slate-100 rounded-md"
          >
            {show ? "Save" : "Edit"}
          </button>
        </div>
        <div className=" m-auto border max-w-xl mb-20 rounded-xl shadow-xl">
          <h4 className="text-xl sm:text-2xl pt-2 font-semibold dark:text-slate-100 text-center underline underline-offset-4">
            Personal Information:
          </h4>
          <form className="grid grid-cols-1 m-auto p-3  md:grid-cols-2">
            <span className="text-lg dark:text-slate-100">Name :</span>
            <input
              type="text"
              name="name"
              id="name"
              className="bg-gray-50 border mb-6 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2"
              readOnly={show ? false : true}
              disabled={show ? false : true}
              value={"swapnil kadam"}
            />

            <span className="text-lg dark:text-slate-100">Email :</span>
            <input
              type="email"
              name="email"
              id="email"
              className="bg-gray-50 border mb-6 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2"
              readOnly={show ? false : true}
              disabled={show ? false : true}
              value="swapnil@example.com"
            />

            <span id="pno" className="text-lg dark:text-slate-100">
              Phone Number :
            </span>
            <input
              type="text"
              name="num"
              id="pno"
              className="bg-gray-50 border mb-6 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 "
              readOnly={show ? false : true}
              disabled={show ? false : true}
              value={9920001885}
            />

            <span id="vilage" className="text-lg dark:text-slate-100">
              Vilage :
              <input
                type="text"
                className="max-w-60 md:max-w-40 mb-6  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 "
                readOnly={show ? false : true}
                disabled={show ? false : true}
                value="Kamblwshwar"
              />
            </span>

            <span className="text-lg dark:text-slate-100">
              Taluka :
              <input
                type="text"
                name="tal"
                id="tal"
                className="max-w-60 md:max-w-40 mb-6 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 "
                readOnly={show ? false : true}
                disabled={show ? false : true}
                value="Baramati"
              />
            </span>

            <span id="dist" className="text-lg dark:text-slate-100">
              District :
              <input
                type="text"
                name="dist"
                id="dist"
                className=" max-w-60 md:max-w-40 mb-6 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 "
                readOnly={show ? false : true}
                disabled={show ? false : true}
                value="Pune"
              />
            </span>

            <span id="pin" className="text-lg dark:text-slate-100">
              PinCode:
              <input
                type="text"
                className="max-w-60 md:max-w-40 mb-6 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 "
                readOnly={show ? false : true}
                disabled={show ? false : true}
                value={413102}
              />
            </span>
          </form>
        </div>
      </div>
    </>
  );
};
