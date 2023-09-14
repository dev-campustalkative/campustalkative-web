'use client';

const EventsCard = () => {
  return (
    <div
      style={{
        backgroundImage: "url('/assets/images/--ct-products-1.png')",
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }}
      className="h-[330px] rounded-[32px] overflow-hidden flex items-end group transition duration-300"
    >
      <div className="bg-ct-secondary-1000 p-6 w-full flex justify-between items-center transition duration-300">
        <div className="px-4 py-2 transition duration-300 flex-1">
          <div className="transition duration-300 ">
            <h3 className="text-lg font-sora font-bold text-ct-secondary-100 ">
              Thoughts on entering into tech
            </h3>
            <p className="text-ct-primary-500 font-sora py-8 group-hover:block hidden transition duration-300 text-justify">
              The first day of the event will focus on the role of technology in
              empowering young people in Nigeria. The speakers will talk about
              how technology can be used to create new opportunities for young
              people, including through entrepreneurship, education, and
              training. They will also discuss how technology can be used to
              address some of the challenges facing young people in Nigeria,
              such as unemployment and lack of access to education.
            </p>
          </div>
          <p className="text-base font-sora text-ct-secondary-100 ">
            23rd May, 2023
          </p>
        </div>
        <button className=" px-4 py-3 rounded-md bg-white text-base font-semibold ">
          Get ticket
        </button>
      </div>
    </div>
  );
};

export default EventsCard;
