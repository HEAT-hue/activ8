import PringlesWave from "../assets/PringlesWave.svg"
import ForwardArrow from "../assets/ForwardArrow.svg";


const Empowering = () => {
  return (
    <section className="bg-[#F9FAFB] py-[30%] px-4 sm:px-6 sm:py-[14%] lg:pt-[13%] xl:pt-[10%] lg:pb-8 lg:py-0 lg:px-8 relative z-10"
    >
      {/* Background Wave Image */}
      <div className="absolute inset-0 mt-24 md:mt-14 lg:mt-0 z-0">
        <img
          src={PringlesWave}
          alt="Background"
          className="w-full "
        />
      </div>
      <div className="w-full max-w-[2560px]  mx-auto text-center relative z-10">
        <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl leading-[2.5rem] sm:leading-[3rem] lg:leading-[4rem] xl:leading-[4rem] lg:text-5xl xl:text-5xl">
          Empowering your Everyday - <br /> Experience More,<br /> Spend Less with Activ8.
        </h2>
        <p className="mt-8 w-[98%] xl:w-[35%] sm:w-full text-[0.92rem] leading-[1.8rem] text-gray-600 max-w-2xl mx-auto">
          Learn more about us, simplify your daily routines, and elevate your experiences all at your fingertips.
        </p>
        <div className="flex items-center justify-center mt-10">
          <button className="sm:text-[1rem] text-xs flex items-center justify-center px-5 text-PrimaryColor-50 py-4 rounded-md bg-PrimaryColor-500">
            Get started
            <img
              src={ForwardArrow}
              alt="Forward Arrow"
              className="w-4 h-4 ml-2"
            />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Empowering;
