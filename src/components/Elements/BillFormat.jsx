import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";

export const BillFormat = () => {
  const billRef = useRef();
  const handlePrint = useReactToPrint({ content: () => billRef.current });

  return (
    <div className="p-6 max-w-3xl mx-auto bg-white shadow-lg rounded-lg border">
      {/* Header Section */}
      <div ref={billRef} className="p-4 border-b mb-4">
        <h1 className="text-xl font-bold">Tractor Owner: John Doe</h1>
        <p className="text-sm">Phone: +91 9876543210</p>
        <div className="mt-4">
          <p className="font-semibold">Client: Jane Smith</p>
          <p className="text-sm">Phone: +91 9876543211</p>
        </div>
      </div>

      {/* Table Section */}
      <table className="w-full border-collapse border text-sm mb-4">
        <thead>
          <tr className="bg-gray-200">
            <th className="border px-2 py-1">Sr. No</th>
            <th className="border px-2 py-1">Date</th>
            <th className="border px-2 py-1">Work Type</th>
            <th className="border px-2 py-1">Farm Area</th>
            <th className="border px-2 py-1">Work Rate</th>
            <th className="border px-2 py-1">Total Amount</th>
            <th className="border px-2 py-1">Advance Payment</th>
            <th className="border px-2 py-1">Final Payable Amount</th>
            <th className="border px-2 py-1">Note</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border px-2 py-1 text-center">1</td>
            <td className="border px-2 py-1">2025-02-23</td>
            <td className="border px-2 py-1">Plowing</td>
            <td className="border px-2 py-1">5 acres</td>
            <td className="border px-2 py-1">₹1000/acre</td>
            <td className="border px-2 py-1">₹5000</td>
            <td className="border px-2 py-1">₹2000</td>
            <td className="border px-2 py-1">₹3000</td>
            <td className="border px-2 py-1">Paid in cash</td>
          </tr>
        </tbody>
      </table>

      {/* Summary Section */}
      <div className="grid grid-cols-3 gap-2 border-t pt-2">
        <div className="text-right font-bold">Total: ₹5000</div>
        <div className="text-right font-bold">Advance: ₹2000</div>
        <div className="text-right font-bold">Payable: ₹3000</div>
      </div>

      {/* Print Button */}
      <button
        onClick={handlePrint}
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded shadow hover:bg-blue-600"
      >
        Print Bill
      </button>
    </div>
  );
};


