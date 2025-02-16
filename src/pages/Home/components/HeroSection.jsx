import { Link } from "react-router-dom";
import Background from "../../../assets/background1.jpg";

export const HeroSection = () => {
  return (
    <section className=" m-auto justify-center">
      <div className=" bg-cover bg-center min-h-[400px] max-w-[1280px] rounded-xl  m-auto relative" style={{backgroundImage : `url(${Background})`}}>
       <div className=" p-5 text-slate-900 text-xl  max-w-96 my-10 ml-10 absolute  ">
        <h1 className="text-4xl font-bold text-green-700">TracConnect</h1>
        <p className="font-semibold">Seamless Tractor Work Tracking for Modern Farmers</p>
        <button className="px-5 py-2 text-slate-100 mt-4 bg-teal-600 rounded-xl hover:bg-teal-400"><Link to="/login">Lets started</Link></button>
       </div>
      </div>
    </section>
  )
}
