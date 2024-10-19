import iphone from "../assets/iphone.svg";
import iphoneDesktop from "../assets/iphoneDesktop.svg";
import Appstore from "../assets/Appstore.svg";
import Googleplay from "../assets/Googleplay.svg";

const Ready2Activ8 = () => {
  return (
    <div className="flex items-center justify-center bg-[#F9F9F9] relative Ready2Activ8 pt-12">
      <div className="relative flex flex-col md:flex-row items-center md:justify-between space-x-0 md:space-x-10 p-6 md:px-20 px-6 md:px-30 max-w-[1500px] mx-auto overflow-hidden">

        <div className="text-center md:text-left md:w-[60%] relative z-10">
          <h1 className="text-2xl small-display-Ready2activ8 sm:text-3xl lg:text-[2.5rem] xl:text-5xl text-left text-[#906C3C] font-HelveticaNeue-Bold mb-5 leading-[2.5rem] sm:leading-[2.6rem] md:leading-[3rem] lg:leading-[3.2rem] xl:leading-[4rem]">
            Ready to Activ8 Your Life? <br />
            Download the app now!
          </h1>
          <p className="text-xs sm:text-sm md:text-sm lg:text-[13px] xl:text-sm 2xl:text-[18px] text-left leading-[1.5rem] sm:leading-[2rem] md:leading-[1.5rem] lg:leading-[1.5rem] xl:leading-[2rem] text-[#775122] mb-16 md:mb-10 font-OpenSans-Regular">
            With just a few taps, you'll unlock a treasure trove of perks that'll have you wondering how you ever lived without them. From dining discounts to fitness freebies, cultural experiences to retail therapy - the possibilities are endless!
          </p>
          <div className="flex justify-center md:justify-start space-x-5 mb-0 md:mb-5 lg:mb-0">
            <a href="#">
              <img
                src={Appstore}
                alt="Download on the App Store"
                className="w-auto h-[60px]"
                loading="lazy" // Lazy load for performance optimization
              />
            </a>
            <a href="#">
              <img
                src={Googleplay}
                alt="Get it on Google Play"
                className="w-auto h-[60px]"
                loading="lazy" // Lazy load for performance optimization
              />
            </a>
          </div>
        </div>

        {/* Responsive Image Container */}
        <div className="flex justify-center md:justify-end mt-8 md:mt-0 w-full md:w-[30%] mx-auto md:mx-0">
          <img
            src={iphone}
            alt="iphone"
            className="sm:hidden w-[70%] sm:w-[50%] md:w-auto lg:w-auto mb-[-20%] md:mb-[-35%] lg:mb-[-30%] relative z-0 iphone" // Tucking the image
            sizes="(max-width: 768px) 70vw, (max-width: 1024px) 50vw, 30vw"
            loading="lazy" // Lazy load for performance optimization
          />

          <img
            src={iphoneDesktop}
            alt="iphone"
            className="hidden sm:inline-block w-[70%] sm:w-[50%] md:w-auto lg:w-auto mb-[-20%] md:mb-[-35%] lg:mb-[-70%] relative z-0 iphone" // Tucking the image
            sizes="(max-width: 768px) 70vw, (max-width: 1024px) 50vw, 30vw"
            loading="lazy" // Lazy load for performance optimization
          />
        </div>
      </div>
    </div>
  );
};

export default Ready2Activ8;
