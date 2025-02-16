

export const ServiceCard = ({service}) => {
  const {poster, servicename, description} = service;
  return (
    <>
      <div className="min-h-96 w-60 sm:w-80  rounded-xl my-10 border shadow-lg">
          <img src={poster} alt="services"  className="min-h-56 rounded-t-xl "/>
          <h1 className="font-bold text-2xl py-3 px-2">{servicename}</h1>
          <p className="px-2 mt-2 text-md dark:text-white">{description}</p>
        </div>
    </>
  )
}
