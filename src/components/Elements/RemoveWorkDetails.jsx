export const RemoveWorkDetails = ({ setShowRemove }) => {
  const ClientID = sessionStorage.getItem("ClientID");

  const handleRemove = async (e) => {
    e.preventDefault();
    const date = e.target.date.value;
    const workType = e.target.work.value;
    const associatedClient = ClientID;

    try {
      const url = "http://localhost:8080/work/clientprofile";
      const response = await fetch(url, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json", // Specifies JSON format
        },
        body: JSON.stringify({ date, workType, associatedClient }), // Converts the loginInfo object to a JSON string
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
    }, 2000);
  };
  return (
    <>
      <div className=" bg-white max-w-[450px] flex flex-col border p-3 m-auto mb-5 rounded-md shadow-md my-5">
        <div className="flex justify-between">
          <h1 className="sm:text-2xl">Enter The Work Details:</h1>
          <span
            className="bg-red-600 text-white h-6  w-6 text-center outline-none rounded-md cursor-pointer"
            onClick={() => setShowRemove(false)}
          >
            X
          </span>
        </div>

        <form
          className="flex flex-col  p-3 rounded-md "
          onSubmit={handleRemove}
        >
          <label htmlFor="date" className=" py-2">
            Date :{" "}
          </label>
          <input
            type="date"
            className="mb-5 h-10 bg-slate-100 outline-blue-300 rounded-md px-2 sm:w-96"
          />
          <label htmlFor="work">Select Work Type:</label>
          {/* <input type="text" className="h-10 border px-2 rounded-md w-44 sm:w-96 bg-slate-100 outline-blue-300 "/> */}
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

          <button className="py-2 px-3 bg-red-600 w-20 m-auto mt-5 rounded-md text-white ">
            Delete
          </button>
        </form>
      </div>
    </>
  );
};
