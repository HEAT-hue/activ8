import PringlesWave from "../assets/PringlesWave.svg"

const PlansThatFit = () => {
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
      <div className="relative z-10 w-full sm:w-[70%] md:w-[80%] lg:w-[60%]  mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl leading-[2.2rem] lg:text-5xl xl:text-5xl">
          Plans That Fit Your Scale
        </h2>
        <p className="mt-8 w-[98%] sm:w-full text-sm leading-5 text-gray-600 max-w-2xl mx-auto">
          “Choose your path to perks” subscribe  for either packages or pay for individual services listed at a discounted price.
        </p>
      </div>
    </section>
  );
};

export default PlansThatFit;
