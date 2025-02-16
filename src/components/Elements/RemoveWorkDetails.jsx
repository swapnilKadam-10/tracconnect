

export const RemoveWorkDetails = ({setShowRemove}) => {

  const handleSubmit = (e) => {
    e.preventDefault();
  }
  return (
    <>
     <div className=" bg-white max-w-[450px] flex flex-col border p-3 m-auto mb-5 rounded-md shadow-md my-5"> 
       <div className="flex justify-between">
       <h1 className="sm:text-2xl">Enter The Work Details:</h1>
       <span className="bg-red-600 text-white h-6  w-6 text-center outline-none rounded-md cursor-pointer" onClick={() => setShowRemove(false)}>X</span>
       </div>
       
       <form className="flex flex-col  p-3 rounded-md " onSubmit={handleSubmit}>
         <label htmlFor="date" className=" py-2">Date : </label>
         <input type="date" className="mb-5 h-10 bg-slate-100 outline-blue-300 rounded-md px-2 sm:w-96"/>
         <label htmlFor="Work Name:" className=" py-2">Work Name:</label>
         <input type="text" className="h-10 border px-2 rounded-md w-44 sm:w-96 bg-slate-100 outline-blue-300 "/>

         <button className="py-2 px-3 bg-red-600 w-20 m-auto mt-5 rounded-md text-white ">Delete</button>

       </form>
     </div>
    </>
  )
}
