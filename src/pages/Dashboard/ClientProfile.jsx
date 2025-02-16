import { useState } from "react";
import { useParams } from "react-router-dom";
import { AddWorkDetails, RemoveWorkDetails } from "../../components";
import { workRecords } from "../../../data/data"

export const ClientProfile = ({clients}) => {
  const [showAdd, setShowAdd] = useState(false);
  const [showRemove, setShowRemove] = useState(false);
  let i = 1;

  const { id } = useParams();
  console.log(id);

   // adding client id to session storage
  sessionStorage.setItem("ClientID", JSON.stringify(id));


  console.log(clients);
  
  const client = clients.find((c) => c._id === id ) || {};
  

  return (
    <>
      <div className="min-h-screen w-[1000px] mb-10 p-5 mx-5 ">
        <div className="flex flex-col md:flex-row justify-between items-center rounded-xl border shadow-lg p-5">
          <div className="grid grid-rows-2 sm:grid-cols-2 text-gray-700">
            <p className="text-xl font-semibold">Name : </p>
            <p className="text-lg font-small">{client.name}</p>
            <p className="text-xl font-semibold">Phone No :</p>
            <p className="text-lg font-small">{client.phoneNo}</p>
            {/* <p className="text-xl font-semibold">Address : </p>
            <address className="text-lg font-small">A/P-Kambleshwar Tal-Baramati</address> */}
          </div>

          {/* <div className="my-3">
            <button className="py-1 px-5 text-white bg-blue-500 rounded-md">
              Edit
            </button>
          </div> */}
        </div>

        <div className="container mx-auto text-gray-700">
          <div className="flex justify-between items-center">
            <p className="text-lg font-semibold">Work List</p>
            <div className="flex flex-col sm:flex-row">
              <button
                onClick={() => {
                  setShowAdd(!showAdd);
                  setShowRemove(false);
                }}
                className="py-1 px-5 mx-3  my-3 bg-blue-600 text-white rounded"
              >
                Add
              </button>
              <button
                onClick={() => {
                  setShowRemove(!showRemove);
                  setShowAdd(false);
                }}
                className="py-1 px-5 mx-3 my-3 bg-red-600 text-white rounded"
              >
                Remove
              </button>
              <button onClick={print} className="py-1 px-5 mx-3 my-3 bg-green-600 text-white rounded">
                Print
              </button>
            </div>
          </div>

          {showAdd ? <AddWorkDetails setShowAdd={setShowAdd} workRecords={workRecords}/> :""}
          { showRemove ? <RemoveWorkDetails setShowRemove={setShowRemove} /> : ""}

          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200 table-responsive">
              <thead className="bg-gray-200">
                <tr>
                  <th className="py-2 px-4 border-b uppercase">Sr No</th>
                  <th className="py-2 px-4 border-b uppercase">Date</th>
                  <th className="py-2 px-4 border-b uppercase">Work Type</th>
                  <th className="py-2 px-4 border-b uppercase">Area</th>
                  <th className="py-2 px-4 border-b uppercase">Total Amount</th>
                  <th className="py-2 px-4 border-b uppercase">Advance</th>
                  <th className="py-2 px-4 border-b uppercase">Note</th>
                </tr>
              </thead>
              <tbody>

                { workRecords.map((record) => (
                   <tr key={record.id} className="bg-white border-b text-center">
                   <td className="py-2 px-4 border-b" data-label="Sr No">
                     {i++}
                   </td>
                   <td className="py-2 px-4 border-b" data-label="Date">
                     {record.date}
                   </td>
                   <td className="py-2 px-4 border-b" data-label="Work Type">
                     {record.workType}
                   </td>
                   <td className="py-2 px-4 border-b" data-label="Area">
                     {record.area}
                   </td>
                   <td className="py-2 px-4 border-b" data-label="Total Amount">
                     ${record.totalAmount}
                   </td>
                   <td className="py-2 px-4 border-b" data-label="Advance">
                     ${record.advanceTaken}
                   </td>
                   <td className="py-2 px-4 border-b" data-label="Note">
                     {record.note}
                   </td>
                 </tr>
                ))}
                
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};
