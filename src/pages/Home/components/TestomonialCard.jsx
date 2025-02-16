

export const TestomonialCard = ({record}) => {
  const { name, role, testimonial } = record
  return (
    <>
     <div className="my-5 mx-5 border min-h-40 rounded-xl shadow-md">
          <p className="text-center p-5 sm:text-lg">
            {testimonial}
          </p>
          <span className="flex flex-col text-center py-3 ">
            <h6 className="font-semibold">- {name}</h6>
            <p className="text-sm font-light">{role}</p>
          </span>
        </div>
    </>
  )
}
