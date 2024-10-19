import PringlesWave from "../assets/PringlesWave.svg"

const FAQsLanding = () => {
  return (
    <section className="bg-[#F9FAFB] py-[30%] px-4 sm:px-6 sm:py-[14%] lg:py-[13%] lg:px-8 relative z-10"
    >
      {/* Background Wave Image */}
      <div className="absolute inset-0 mt-24 md:mt-14 lg:mt-0 z-0">
        <img
          src={PringlesWave}
          alt="Background"
          className="w-full "
        />
      </div>
      <div className="relative z-10 w-full sm:w-[70%] md:w-[80%] lg:w-[60%]  mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl leading-[2.2rem] lg:text-5xl xl:text-[3.5rem] 2xl:text-6xl">
          FAQ
        </h2>
        <p className="mt-4 w-[88%] sm:w-[76%] md:w-[70%]  xl:w-[56%] text-sm leading-5 text-gray-600 max-w-2xl mx-auto">
          Everything you need to know about the product, security and advances features and many more.
        </p>
      </div>
    </section>
  );
};

export default FAQsLanding;
