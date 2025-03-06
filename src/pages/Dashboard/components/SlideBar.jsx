import { Link, useNavigate } from "react-router-dom"
import { toast } from "react-toastify"

import Profile from "../../../assets/background2.jpg"


export const SlideBar = () => {
   const navigate = useNavigate()
  const handleLogout = () => {
    sessionStorage.clear()
    toast.success("User logged out successfully")
    navigate("/")

  }
  return (
    
      <div className='w-60 h-[600px] border-2  flex flex-col rounded-md '>
        <div className='p-3 m-auto '>
          <img src={Profile} alt="Profile Photo" className='h-32 w-32 mb-3 rounded-full'/>
          
          <p className='text-xl text-center'>Swapnil Kadam</p>
        </div>
        
        <div className='flex flex-col m-auto '>
          <ul>
           <div className='my-2 cursor-pointer'>
           <i className="bi bi-speedometer"></i>
            <Link to="/dashboard" className='mx-2'>Dashboard</Link>
           </div>

           <div className='my-2 cursor-pointer'>
           <i className="bi bi-person"></i>
            <Link to="/dashboard/profile" className='mx-2'>My Profile</Link>
           </div>
           <div className='my-2 cursor-pointer'>
           <i className="bi bi-person-lines-fill"></i>
            <Link to="/dashboard/client" className='mx-2'>Clients</Link>
           </div>
           <div className='my-2 cursor-pointer'>
           <i className="bi bi-pie-chart"></i>
            <Link to="/dashboard/printBill" className='mx-2'>Invoices</Link>
           </div>
          </ul>

        </div>

        <button onClick={handleLogout} className='m-auto py-2 px-5 bg-red-600 text-white rounded-xl cursor-pointer'>LogOut</button>
      </div>
    
  )
}
