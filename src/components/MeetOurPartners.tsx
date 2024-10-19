import PringlesWave from "../assets/PringlesWave.svg"

const MeetOurPartners = () => {
  return (
    <section className="bg-[#F9FAFB] relative py-[30%] px-4 sm:px-6 sm:py-[14%] lg:py-[13%] lg:px-8 z-10"
    >
      {/* Background Wave Image */}
      <div className="z-0 absolute inset-0 mt-24 md:mt-14 lg:mt-0">
        <img
          src={PringlesWave}
          alt="Background"
          className="w-full "
        />
      </div>
      <div className="w-full sm:w-[70%] md:w-[80%] lg:w-[57%]  mx-auto text-center relative z-10">
        <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl leading-[2.2rem] lg:text-5xl xl:text-5xl">
          Meet Our Partners: Powering Your Activ8 Experience.
        </h2>
        <p className="mt-8 w-[98%] sm:w-full text-sm leading-5 text-gray-600 max-w-2xl mx-auto">
          At Activ8, we’ve partnered with industry leaders to bring you the best in entertainment, wellness, travel, and more. Our carefully selected partners are here to enhance your lifestyle, offering exclusive benefits that make every day better.
        </p>
      </div>
    </section>
  );
};

export default MeetOurPartners;
