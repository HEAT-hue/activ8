import PringlesWave from "../assets/PringlesWave.svg"

const HearFromYou = () => {
  return (
    <section className="bg-[#F9FAFB] py-[30%] px-4 sm:px-6 sm:py-[14%] lg:py-[13%] lg:px-8 relative z-10"
    >
      {/* Background Wave Image */}
      <div className="z-0 absolute inset-0 mt-24 md:mt-14 lg:mt-0">
        <img
          src={PringlesWave}
          alt="Background"
          className="w-full "
        />
      </div>
      <div className="w-full relative z-10 sm:w-[70%] md:w-[80%] lg:w-[60%]  mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl leading-[2.2rem] lg:text-5xl xl:text-[3.5rem] 2xl:text-6xl">
          We Would Love To Hear From You
        </h2>
        <p className="mt-4 w-[98%] sm:w-full text-sm leading-5 text-gray-600 max-w-2xl mx-auto">
          Having any issues regarding any of our services, or you just want to give feedback or a complaint? Fill the form below and someone will be in touch as soon as possible.
        </p>
      </div>
    </section>
  );
};

export default HearFromYou;
