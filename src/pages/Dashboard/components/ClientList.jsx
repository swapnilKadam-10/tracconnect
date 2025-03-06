import { useState, useEffect } from "react";

import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const ClientList = ({clients}) => {
  let i = 1;
  const [showAdd, setShowAdd] = useState(false);
  const [showRemove, setShowRemove] = useState(false);

  const navigate = useNavigate();
  const token = JSON.parse(sessionStorage.getItem("jwtToken"));
  
  // const [clients, setClients] = useState([]);


  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);



  // useEffect(() => {
  //   const fetchClients = async () => {
  //     if (!token) {
  //       setError("User not authenticated");
  //       setLoading(false);
  //       return;
  //     }

  //     try {
  //       const url = "http://localhost:8080/api/clients";
  //       const response = await fetch(url, {
  //         headers: {
  //           Authorization: `Bearer ${token}`,
  //           "Content-Type": "application/json",
  //         },
  //       });

  //       if (!response.ok) {
  //         const errorData = await response.json();
  //         throw new Error(errorData.message || "Failed to fetch clients");
  //       }

  //       const data = await response.json();
  //       // console.log(data);
  //       setClients(data);
  //       setLoading(false);
  //     } catch (err) {
  //       console.error(err.message);
  //       setError(err.message);
  //       setLoading(false);
  //     }
  //   };

  //   fetchClients();
  // }, [clients]);

  const handleAdd = async (e) => {
    e.preventDefault();
    const newClient = {
      name: e.target.name.value,
      phoneNo: e.target.pno.value,
    };

    try {
      const url = "http://localhost:8080/api/clients";
      const response = await fetch(url, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json", // Specifies JSON format
        },
        body: JSON.stringify(newClient), // Converts the loginInfo object to a JSON string
      });

      const data = await response.json();
      console.log(data);

      if (response.status === 201) {
        toast.success("Successfully added!!");
        e.target.name.value = "";
        e.target.pno.value = "";
      } else {
        toast.error(data);
        e.target.name.value = "";
        e.target.pno.value = "";
      }
    } catch (e) {
      console.error("Error adding in:", e.message);
      throw error;
    }
  };

  const handleDelete = async (e) => {
    e.preventDefault();

    const client = {
      phoneNo : e.target.phoneNo.value
    }
    
    try {
      const url = "http://localhost:8080/api/clients";
    const response = await fetch( url, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json", // Specifies JSON format
      },
      body: JSON.stringify(client),
    })
    const data = await response.json();
      console.log(data);

    if(response.status === 200) {
      toast.success("Deleted successfully!!!");
    } else {
      toast.error("Error while deleting...");
    }
    } catch(err) {
      console.error("Error adding in:", err.message);
      throw error;
    }
  };

  return (
    <>
      <div className="mx-2 mb-5 w-[1000px] min-h-screen-xl ">
        <div className="flex flex-col md:flex-row justify-between p-3 items-center ">
          <p className="text-2xl sm:text-4xl text-gray-700 dark:text-slate-100">
            Client List :{" "}
          </p>

          <div>
            <button
              onClick={() => {
                setShowAdd(!showAdd);
                setShowRemove(false);
              }}
              className="py-1 px-5 mx-2 my-3 bg-blue-600 text-slate-100 rounded-md"
            >
              Add<i className="bi bi-plus ml-2"></i>
            </button>

            <button
              onClick={() => {
                setShowRemove(!showRemove);
                setShowAdd(false);
              }}
              className="py-1 px-5 mx-2 bg-red-600 text-slate-100 rounded-md"
            >
              Remove <i className="bi bi-trash"></i>
            </button>
          </div>
        </div>

        <div
          className={` m-auto border max-w-sm mb-20 rounded-xl shadow-xl ${
            showAdd ? "" : "hidden"
          } `}
        >
          <form onSubmit={handleAdd} className="flex flex-col m-auto p-3">
            <fieldset className="flex flex-col p-3 ">
              <label htmlFor="name" className="text-lg dark:text-slate-100">
                Full Name :{" "}
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className="bg-slate-100 border mb-6 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  outline-blue-300"
                autoComplete="off"
                required
              />

              <label htmlFor="pno" className="text-lg dark:text-slate-100">
                Phone Number :
              </label>
              <input
                type="text"
                name="num"
                id="pno"
                className="bg-slate-100 border mb-6 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 outline-blue-300"
                autoComplete="off"
                required
                maxLength="10"
                minLength="10"
              />

              <button className="py-1 px-4 bg-green-600 text-white rounded-lg w-20 m-auto">
                Submit
              </button>
            </fieldset>
          </form>
        </div>

        <div
          className={` m-auto border max-w-sm mb-20 rounded-xl shadow-xl ${
            showRemove ? "" : "hidden"
          } `}
        >
          <form onSubmit={handleDelete} className=" flex flex-col m-auto p-3">
            <fieldset className="flex  items-center p-3 ">
              <input
                type="text"
                name="phoneNo"
                id="phoneNo"
                className=" bg-slate-100 border mb-6 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 outline-blue-300"
                autoComplete="off"
                placeholder="Enter phoneNo to Remove"
                required
              />
            </fieldset>
            <button className="py-1 px-4 bg-red-600 text-white rounded-lg w-24 m-auto">
              Remove
            </button>
          </form>
        </div>

        <div className="m-5">
          <table className="min-w-full bg-white border border-gray-200 m-auto">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b border-gray-200 bg-gray-50 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Sr. NO
                </th>
                <th className="py-2 px-4 border-b border-gray-200 bg-gray-50 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Name
                </th>
                <th className="py-2 px-4 border-b border-gray-200 bg-gray-50 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Phone No
                </th>
                <th className="py-2 px-4 border-b border-gray-200 bg-gray-50 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider max-sm:hidden"></th>
              </tr>
            </thead>
            <tbody>
              {clients.map((client) => (
                <tr key={client._id}>
                  <td className="py-2 px-4 border-b border-gray-200">{i++}</td>
                  <td className="py-2 px-4 border-b border-gray-200 cursor-pointer hover:underline ">
                    <Link to = {`/dashboard/clientprofile/${client._id}`} >{client.name}</Link>
                  </td>
                  <td className="py-2 px-4 border-b border-gray-200">
                    {client.phoneNo}
                  </td>
                  <td className="py-2 px-4 border-b border-gray-200 max-sm:hidden">
                    {" "}
                    <span
                      onClick={() => navigate(`/dashboard/clientprofile/${client._id}`)}
                      className="text-slate-100 bg-green-500 py-1 px-5 rounded-xl cursor-pointer"
                    >
                      view
                    </span>
                  </td>
                </tr>
                
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
