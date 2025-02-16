export const About = () => {
  return (
    <section
      id="about"
      className=" m-auto justify-center my-10 mt-28 min-h-screen"
    >
      <div className="flex flex-col md:flex-row  w-3/4 m-auto  mb-10 rounded-md">
        <div className="bg-yellow-300 p-5 md:p-20  justify-center ">
          <h1 className="text-3xl font-bold text-center text-white">
            About Us
          </h1>
        </div>

        <div className="bg-yellow-200 ">
          <p className=" text-xl first-letter:text-4xl p-10">
            Welcome to the Tractor Work Management System, your go-to solution
            for managing farm operations efficiently and effectively. Our
            platform is designed to streamline the coordination between tractor
            owners and farmers, ensuring seamless communication and
            record-keeping for all farm-related activities.
          </p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row  w-3/4 m-auto  mb-10">
        <div className="bg-green-600 p-5 md:p-16  justify-center">
          <h1 className="text-3xl font-bold text-center text-white">
            Our Mission
          </h1>
        </div>

        <div className=" bg-yellow-200">
          <p className=" text-xl first-letter:text-4xl p-10">
            We aim to simplify farm management by providing a user-friendly
            interface that allows tractor owners to track and manage their
            services, and enables farmers to stay informed about the work done
            on their farms. Our goal is to enhance productivity and transparency
            in farm operations.
          </p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row  w-3/4 m-auto  mb-10 ">
        <div className="bg-blue-900 p-5 md:p-20  justify-center">
          <h1 className="text-3xl font-bold text-center text-white">
            What We Offer
          </h1>
        </div>

        <div className="bg-blue-300 ">
          <ul className=" text-xl  p-10 list-disc">
            <li>
              <p className="font-bold ">Comprehensive Management:</p> From user
              registration and authentication to detailed work record tracking,
              our system covers all aspects of farm management.
            </li>
            <li>
              <p className="font-bold">Client Relations:</p> Tractor owners can
              easily manage client information, including farm locations and
              specific requirements, ensuring personalized and efficient service
              delivery.
            </li>
            <li>
              <p className="font-bold">Detailed Reporting:</p> Our platform
              generates monthly and yearly reports, providing valuable insights
              into farm operations and helping in decision-making.
            </li>
            <li>
              <p className="font-bold">User-Friendly Design:</p> With a focus on
              intuitive design, our system is easy to navigate, ensuring a
              smooth experience for all users.
            </li>
          </ul>
        </div>
      </div>

      <div className="flex flex-col md:flex-row  w-3/4 m-auto  mb-10">
        <div className="bg-blue-300 p-5 md:p-20  justify-center">
          <h1 className="text-3xl font-bold text-center text-white">
            Why Choose Us
          </h1>
        </div>

        <div className="bg-slate-400 ">
          <ul className=" text-xl p-10 list-disc">
            <li>
              <p className="font-bold">Efficiency:</p> Automate and simplify the
              management of farm operations, saving time and reducing errors.
            </li>
            <li>
              <p className="font-bold">Transparency:</p> Keep all parties
              informed with clear and detailed records of all activities
              performed.
            </li>
            <li>
              <p className="font-bold">Support:</p> We are committed to
              providing excellent customer service and support to help you get
              the most out of our platform.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
