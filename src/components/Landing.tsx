import { useState } from "react";
import IphoneNDashboard from "../assets/IphoneNDashboard.png";
import IphoneNDashboardSM from "../assets/IphoneNDashboardSM.png";
import DrkPringlesWave from "../assets/DrkPringlesWave.svg"
import ForwardArrow from "../assets/ForwardArrow.svg";

export default function Landing() {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <section className="relative flex-1 bg-SecondaryColor-100 overflow-hidden h-screen min-h-[900px]"
    >
      {/* Background Wave Image */}
      <div className="absolute inset-0 mt-14 md:mt-0">
        <img
          src={DrkPringlesWave}
          alt="Background"
          className="w-full "
        />
      </div>
      {/* Rotated Background Images
      <div
        className="absolute left-0 transform -translate-y-1/2"
        style={{
          transform: "rotate(-52.46deg) scale(2) translateY(100px)",
          transformOrigin: "center",
        }}
      >
        <img
          src={WavyBackground}
          alt="Wavy Background Left"
          className="unoptimized"
        />
      </div>
      <div
        className="absolute right-0 transform -translate-y-1/2 translate-x-1/2"
        style={{
          transform:
            "rotate(-82deg) scale(1.8) translateY(5px) translateX(-100px)",
          transformOrigin: "center",
        }}
      >
        <img
          src={WavyBackground}
          alt="Wavy Background Right"
          className="unoptimized"
        />
      </div> */}

      {/* Text Content */}
      <div className="absolute inset-x-0 top-[12%] flex flex-col items-center z-10">
        <h1 className="text-black font-Helvectica text-center font-bold text-[1.75rem] mx-auto sm:text-5xl md:text-6xl leading-snug  sm:leading-[4.4rem] md:leading-[4.4rem] lg:leading-[4.4rem]">
          <span className="text-PrimaryColor-500">Elevate</span> your everyday,
          <br />
          with <span className="text-PrimaryColor-500">Activ8!</span>
        </h1>
        <span className="w-full px-5 sm:px-4 sm:w-[38%] text-center mt-7 text-[0.85rem] sm:text-sm sm:mt-5 text-BLACK-500 leading-5">
          <p>
            Unlock a world of exclusive benefits and access premium perks at your
            fingertips that would enhance your daily experiences.
          </p>
        </span>


        {/* Responsive Button */}
        <div className="flex items-center justify-center mt-10 sm:hidden">
          <button className="flex items-center justify-center w-[12rem] text-xs text-PrimaryColor-50 h-16 rounded-md bg-PrimaryColor-500">
            Get started for free
            <img src={ForwardArrow} alt="Forward Arrow" className="w-4 h-4 ml-2" />
          </button>
        </div>
      </div>

      {/* Image Section */}
      <div className="absolute bottom-[16%] sm:bottom-[14%] md:bottom-[15%] lg:bottom-[10%] left-1/2 transform -translate-x-1/2 w-full h-auto z-0">
        {/* Large screen image */}
        <div className="hidden sm:block relative w-full h-auto">
          <img
            src={IphoneNDashboard}
            alt="Image of iPhone and dashboard"
            className={`relative sm:w-[600px] md:w-[700px] lg:w-[800px] xl:w-[950px] 2xl:w-[1000px] mx-auto transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
            onLoad={() => setIsLoaded(true)}
          />
          {!isLoaded && <div className="absolute inset-0 bg-white blur-xl"></div>}
        </div>

        {/* Small screen image */}
        <div className="relative block sm:hidden w-full h-auto">
          <img
            src={IphoneNDashboardSM}
            alt="Image of iPhone and dashboard"
            className={`relative w-full max-w-[500px] mx-auto px-5 transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
            onLoad={() => setIsLoaded(true)}
          />
          {!isLoaded && <div className="absolute inset-0 bg-white blur-md"></div>}
        </div>
      </div>


      {/* White Strip */}
      <div className="w-full bg-white min-h-[20vh] h-[150px] lg:min-h-[14vh] landscape-height-fix px-5 sm:px-[5%] absolute bottom-0 left-0 flex items-center justify-center z-10">
        <p className="w-full text-center text-lg sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl landscape-font-fix font-bold text-black px-4 md:px-10 my-4 sm:px-2">
          Unlocking exclusive benefits with our premier partners, where top-tier
          collaboration enhances your subscription experience.
        </p>
      </div>
    </section>
  );
}
