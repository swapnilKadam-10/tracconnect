import { ServiceCard } from "./ServiceCard"


export const ServiceSection = () => {

  const services = [
    {
        id: 1,
        poster : "src/assets/image1.png",
        servicename: "User Registration and Authentication",
        description: "Secure registration and login for tractor owners, clients, and administrators."
    },
    {
        id: 2,
        poster : "src/assets/image2.png",
        servicename: "Client Management",
        description: "Allows tractor owners to add and manage client details, including farm locations and additional notes."
    },
    {
        id: 3,
        poster : "src/assets/image3.png",
        servicename: "Work Record Tracking",
        description: "Tracks detailed records of farm work, including type of work, dates, descriptions, and costs."
    },
    {
        id: 4,
        poster : "src/assets/image4.png",
        servicename: "Report Generation",
        description: "Generates monthly and yearly reports summarizing tractor activities and farm work."
    },
    {
        id: 5,
        poster : "src/assets/image5.png",
        servicename: "Responsive UI/UX",
        description: "Provides a user-friendly interface that is responsive and easy to navigate."
    },
    
]

  return (
    <section id="services" className="text-center m-auto justify-center my-10">
      <div>
        <h1 className="text-4xl underline font-bold dark:text-slate-100">Our Services</h1>
      </div>

      <div className="my-5 grid  grid-rows-1 justify-evenly lg:grid-cols-3 md:grid-cols-2 sm:justify-evenly">
        { services.map((service) => (
          <ServiceCard service={service} key={service.id}/>
        ) )}
      </div>
    </section>
  )
}
