import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export const Invoice = ({clients}) => {
  const [invoiceRecords, setInvoiceRecords] = useState([]);

  const { id } = useParams();
    console.log(id);
    
    const client = clients.find((c) => c._id === id ) || {};
    
    
      useEffect(() => {
        const fetchInvoiceDetails = async () => {
          try {
            const response = await fetch(`http://localhost:8080/api/invoice?id=${id}`, {
              method: "GET", // Use GET if API allows
              headers: {
                "Content-Type": "application/json",
              },
    
            });
            // console.log("HTTP Status:", response.status);
            const result = await response.json();
            console.log(result.data);
            
            
            if (result.success) {
              console.log("Work Details:", result.data);
              setInvoiceRecords(result.data);
            } else {
              console.log("Error:", result.message);
            }
          } catch (error) {
            console.error("Fetch Error:", error);
          }
        };
        
        // Call the function with a client ID
        if (id) fetchInvoiceDetails();
        
      }, [id]);
  return (
    <>
      <div className="mx-2 mb-5 w-[1000px] min-h-screen-xl flex flex-row flex-wrap">
        
          {invoiceRecords.map( (invoice) => (
            <div key={invoice._id} className="block max-w-sm p-6 h-60 m-3  bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <div className="grid grid-cols-2">
            <span className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
              Date :
            </span>
            <span className="mb-2 text-xl pl-3 tracking-tight text-gray-900 dark:text-white">
              {invoice.invoiceDate}
            </span>
            <span className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
              Work Type :
            </span>
            <span className="mb-2 text-xl pl-3 tracking-tight text-gray-900 dark:text-white">
              {invoice.workType}
            </span>
            <span className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
              Total Amount :
            </span>
            <span className="mb-2 text-xl pl-3 tracking-tight text-gray-900 dark:text-white">
              ₹{invoice.totalAmount}
            </span>
            <span className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
              Status : 
            </span>
            <span className="mb-2 text-xl pl-3 tracking-tight text-red-400 ">
              {invoice.status}
            </span>
          </div>
          </div>
          )
          
          )}
          
        </div>
    </>
  );
};
