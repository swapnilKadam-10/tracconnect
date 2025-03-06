import { useState } from "react";
import { toast } from "react-toastify";


export const AddWorkDetails = ({setShowAdd, workRecords}) => {

  const ClientID = sessionStorage.getItem("ClientID");
  const [tAmount, setAmount] = useState(0);
  const handleAdd = async (e) => {
    e.preventDefault();
    const rate = e.target.rate.value; 
    const area = e.target.area.value > 0 ? e.target.area.value : 1; 
    const advance = e.target.advance.value;
    const total = rate * area;
    setAmount(total);

    const workDetails = {
      date : e.target.date.value,
      workType : e.target.work.value,
      farmArea : area,
      workRate : rate,
      totalAmount : total,
      advancePayment : advance,
      finalPayableAmount : total - advance,
      associatedClient : ClientID
    }

    console.log(workDetails);

    try {
          const url = "http://localhost:8080/work/clientprofile";
          const response = await fetch(url, {
            method: "POST",
            headers: {
              "Content-Type": "application/json", // Specifies JSON format
            },
            body: JSON.stringify(workDetails), // Converts the loginInfo object to a JSON string
          });
    
          const data = await response.json();
          if (response.status === 201) {
            toast.success("Successfully Added!!");
          } else {
            toast.error(data);
          }
        } catch (e) {
          console.error("Error :", e.message);
          throw e;
        }

       setTimeout(() => {
        e.target.date.value = "";
        e.target.work.value = "";
        e.target.area.value = "";
        e.target.advance.value = "";
        e.target.amount.value = "";
        e.target.rate.value = "";
       }, 2000);
  };

  return (
    <div className={` border bg-white max-w-[600px] p-3 m-auto  shadow-lg rounded-xl mb-5`}>
            <div className="flex justify-between">
            <p className=" sm:text-2xl text-center mb-5">
              Enter Details of Work To Add
            </p>
            <span onClick={() => setShowAdd(false)} className="bg-red-600 text-white h-6  w-6 text-center outline-none rounded-md cursor-pointer">
            X
            </span>
            </div>
            <form onSubmit={handleAdd} className="flex flex-col">
              <div className="grid grid-rows-2 sm:grid-cols-2">
                <label htmlFor="date">Date:</label>
                
                <input type="date" name="date" id="date"  required className="mb-5 h-10 bg-slate-100 outline-blue-300 rounded-md px-2"/>
                <label htmlFor="work">Select Work Type:</label>

                <select
                  name="work"
                  id="work"
                  required
                  className="h-10  px-3 rounded-md mb-5 bg-slate-100 outline-blue-300"
                >
                  <option value="Other">None</option>
                  <option value="Plowing">Plowing</option>
                  <option value="Harrowing">Harrowing</option>
                  <option value="Sowing">Sowing</option>
                  <option value="Transportation">Transportation</option>
                </select>

                <label htmlFor="area">Select Area (acre)</label>
                <select
                  name="area"
                  id="area"
                  className="h-10 mb-5 rounded-md px-2 bg-slate-100 outline-blue-300"
                >
                  <option value="">Select Area</option>
                  <option value="0.25">0.25</option>
                  <option value="0.5">0.5</option>
                  <option value="0.75">0.75</option>
                  <option value="1">1</option>
                  <option value="1.5">1.5</option>
                  <option value="2">2</option>
                  <option value="2.5">2.5</option>
                  <option value="3">3</option>
                </select>

                <label htmlFor="amount">Rate:</label>
                <input
                  type="text"
                  name="rate"
                  id="rate"
                  required
                  className="border bg-slate-100 outline-blue-300 h-10 rounded-md  mb-5 px-2"
                />
                <label htmlFor="amount">Total Amount:</label>
                <input
                  type="text"
                  name="amount"
                  id="amount"
                  className="border bg-slate-100  h-10 rounded-md cursor-not-allowed outline-none mb-5 px-2"
                  value={`${tAmount}`}
                  readOnly
                />

                <label htmlFor="advance">Advance(if any) :</label>
                <input
                  type="text"
                  name="advance"
                  id="advance"
                  className="border bg-slate-100 outline-blue-300 h-10 rounded-md mb-5"
                />

                {/* <label htmlFor="note">Note :</label>
                <textarea
                  name="note"
                  id="note"
                  className="border bg-slate-100 outline-blue-300 rounded-md resize-none"
                /> */}
              </div>
              <button className="my-5 py-1 px-5 bg-green-600 w-24 m-auto text-white rounded-md">
                Submit
              </button>
            </form>
          </div>
  )
}
