import { TestomonialCard } from "./TestomonialCard";

export const Testomonials = () => {

  const feedback = [
    {
        id: 101,
        name: "Jose Miller",
        role: "Farmer",
        testimonial: "The Tractor Work Management System has revolutionized the way I keep track of the work done on my farm. The user interface is intuitive, and I can easily view all the details of the services provided. It’s a must-have for any farmer!"
    },
    {
        id: 102,
        name: "Heather Garrison",
        role: "Tractor Owner",
        testimonial: "As a tractor owner, this system has made managing my clients and their farm work so much easier. The ability to track work records and generate reports has saved me a lot of time and effort. Highly recommended!"
    },
    {
        id: 103,
        name: "Patricia Hernandez",
        role: "Tractor Owner",
        testimonial: "This application has greatly improved my efficiency in managing multiple clients and their specific needs. The integration of frontend components with the backend APIs is seamless, making the whole process smooth and hassle-free."
    },
    {
        id: 104,
        name: "Margaret Mann",
        role: "Farmer",
        testimonial: "I appreciate how easy it is to check the status of the work being done on my farm. The detailed records and clear reports provided by the Tractor Work Management System have made farm management much more transparent and manageable."
    }
]

  return (
    <section className=" min-h-96 max-w-[1280px] mx-3 shadow-xl dark:text-slate-100">
      <h1 className="text-center font-bold text-4xl underline py-5">Testomonials</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 p-5 ">
        {feedback.map( (feedback) => (
          <TestomonialCard record={feedback} key={feedback.id}/>
        ))}
      </div>
    </section>
  );
};
