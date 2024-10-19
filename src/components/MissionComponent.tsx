import HandsomeManWithPhone from "../assets/HandsomeManWithPhone.png";
import ForwardArrow from "../assets/ForwardArrow.svg";

const MissionComponent = () => {
  return (
    <section className="bg-[#F2D272] p-8 px-6 sm:px-6 md:px-10 lg:px-16 xl:px-28 py-16 lg:py-14 relative z-10 ">
      <div className="max-w-[1600px] mx-auto">
        {/* Header for small screens */}
        <div className="lg:hidden ">
          <h2 className="text-[1.15rem] sm:text-[1.35rem] md:text-[1.5rem] text-center font-bold">We're a mission driven company</h2>
          <p className="text-xs sm:text-[0.9rem] md:text-[1rem] text-center mt-4 mb-6 text-[#BD802B] leading-6">Powerful, self-serve product to help life<br />simpler and more affordable for you.<br />Trusted by over 4,000 .</p>
        </div>

        {/* Header for large screens */}
        <div className="lg:mb-8 lg:flex lg:justify-end lg:items-start pr-4">
          <h2 className="hidden font-Helvectica lg:block lg:text-3xl xl:text-4xl font-bold mb-8 text-right">
            We're a mission driven company
          </h2>
        </div>

        {/* Image and Text Content */}
        <div className="flex flex-col lg:flex-row items-center lg:space-x-8">
          {/* Image */}
          <div className="lg:w-1/2 flex justify-center lg:justify-start">
            <img
              src={HandsomeManWithPhone}
              alt="Smiling man looking at phone"
              width={540}
              height={540}
              className="mx-\auto lg:mr-auto rounded-md"
            />
          </div>

          {/* Mission and Vision Text */}
          <div className="lg:w-1/2 flex flex-col mtt-10 gap-6 lg:gap-8">
            <div className="p-4 mb-4">
              <div className='bg-[#F5F5F5] inline-block max-w-[160px] rounded-[5px] shadow-sm border mb-4 border-gray-200'>
                <h6 className="text-md md:text-lg text-left font-HelveticaNeue-Medium py- px-2">OUR MISSION</h6>
              </div>
              <p className="mt-2 text-sm sm:text-base text-left leading-6 font-OpenSans-Regular">
                To simplify and enhance lifestyle management through an innovative platform that connects users with essential services, exclusive benefits, and seamless transactions, empowering them to live more efficiently and enjoyably.
              </p>
            </div>

            <div className="p-4 ">
              <div className='bg-[#F5F5F5] inline-block max-w-[160px] rounded-[5px] shadow-sm border mb-4 border-gray-200'>
                <h6 className="text-md md:text-lg text-left font-HelveticaNeue-Medium py- px-2">OUR VISION</h6>
              </div>
              <p className="mt-2 text-sm sm:text-base leading-6 font-OpenSans-Regular text-left">
                To be the leading lifestyle management platform, revolutionizing the way people interact with their daily needs and opportunities, and setting the standard for convenience and excellence in personal and professional life management.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center flex justify-center mt-16">
          <button className="bg-[#956F3E] flex items-center text-sm sm:text-md justify-center text-white px-5 py-3 md:px-10 md:py-3  rounded-md">
            Get started for free
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

export default MissionComponent;
