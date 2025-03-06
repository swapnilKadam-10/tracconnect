import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export const ClientInvoiceList = ({clients}) => {
  var i = 1;

  const navigate = useNavigate();
  
  return (
    <>
      <div className="mx-2 mb-5 w-[1000px] min-h-screen-xl ">
        <div className="flex flex-col md:flex-row justify-between p-3 items-center ">
          <p className="text-2xl sm:text-4xl text-gray-700 dark:text-slate-100">
            Client List :{" "}
          </p>
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
                              onClick={() => navigate(`/dashboard/invoice/${client._id}`)}
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
