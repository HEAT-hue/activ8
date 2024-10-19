import ArabicWoman from "../assets/ArabicWoman.jpg";
import TripleWaveL from "../assets/TripleWaveL.svg";
import TripleWaveR from "../assets/TripleWaveR.svg";
import ClickMouse from "../assets/ClickMouse.svg";

const HowItWorks = () => {
  return (
    <section className="bg-SecondaryColor-100 py-16 px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24 relative pb-[10%] overflow-hidden">
      {/* Container with max-width */}
      <div className="container mx-auto max-w-[1600px]">
        <div className="w-full flex flex-col items-center justify-center text-center">
          <div className="bg-[#0C0E0F] w-max text-white  inline-block border border-black rounded-md shadow-sm ">
            <h6 className="text-center text-sm sm:text-base font-semibold p-2 uppercase tracking-wider">How it works</h6>
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#9F6C2D] font-bold my-4 sm:my-8">It is as Easy as 1 - 2 - 3</h1>
          <p className="text-center text-sm w-[80%] mx-auto sm:w-full sm:text-md text-[#05140A] leading-[1.8rem] mb-[3rem] sm:mb-[4.5rem]">
            Activ8 is designed to be a breeze to use, from sign-up to <br /> enjoying your fabulous new perks.<br />
            Here's how it all goes down
          </p>
        </div>

        {/* Flex container with image at the end on smaller screens */}
        <div className="flex flex-col-reverse lg:flex-row lg:space-x-16 items-center">
          {/* Image and background container */}
          <div className="w-full md:w-[80%] lg:w-[38%] xl:w-[38%] flex-shrink-0 md:mr-16 mb-10 mt-20 lg:mt-0 md:mb-0 px-[12%] sm:px-[12%] md:px-[12%] lg:px-12">
            <div className="relative">
              {/* Square behind the image */}
              <div className="absolute top-1/2 left-1/2 w-[125%] h-[70%] sm:h-[80%] bg-SecondaryColor-300 rounded-lg transform -translate-x-1/2 -translate-y-1/2 z-0"></div>
              <img
                src={ArabicWoman}
                alt="Woman shopping"
                className="rounded-lg object-cover w-full relative z-10"
              />
            </div>
          </div>

          {/* Steps */}
          <div className="flex flex-col space-y-6 md:space-y-10 w-full lg:w-1/2 xl:w-[80%]">
            <div className="flex items-center mx-6 justify-center relative bg-white p-6 rounded-lg shadow- min-h-[180px]">
              <div className="absolute font-roman -left-6 top-10 bg-roman-gradient text-white rounded-md w-10 h-10 flex items-center justify-center font-semibold">
                {/* Roman numeral I svg */}
                <svg width="26" height="25" viewBox="0 0 26 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13.7538 7.45972C13.4034 7.86825 13.2028 8.39416 13.2028 8.94842V16.6416C13.2028 17.1959 13.4034 17.7218 13.7538 18.1303H12.2163C12.5667 17.7218 12.7673 17.1959 12.7673 16.6416V8.94842C12.7673 8.39416 12.5667 7.86825 12.2163 7.45972H13.7538Z" stroke="white" stroke-width="1.52539" />
                </svg>
              </div>
              <div className="space-y-[5%] ml-3">
                <h3 className="text-md sm:text-xl font-semibold text-[#0C0E0F]">Download and Personalize</h3>
                <p className="text-gray-600 mt-2 text-sm md:text-sm lg:text-sm xl:text-md">
                  First, download the Activ8 application on Google Play or Apple Store and create your account. Tell us a little about yourself so we can start matching you with the good stuff.
                </p>
              </div>
            </div>

            <div className="flex items-center mx-6 justify-center relative bg-white p-6 rounded-lg shadow- min-h-[180px]">
              <div className="absolute font-roman -left-6 top-10 bg-roman-gradient text-white rounded-md w-10 h-10 flex items-center justify-center font-semibold">
                {/* Roman numeral II svg */}
                <svg width="26" height="25" viewBox="0 0 26 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.705 7.44971C10.3546 7.85824 10.154 8.38415 10.154 8.93841V16.6316C10.154 17.1859 10.3546 17.7118 10.705 18.1203H9.16748C9.51786 17.7118 9.71847 17.1859 9.71847 16.6316V8.93841C9.71847 8.38415 9.51786 7.85824 9.16748 7.44971H10.705Z" stroke="white" stroke-width="1.52539" />
                  <path d="M16.8026 7.44971C16.4522 7.85824 16.2516 8.38415 16.2516 8.93841V16.6316C16.2516 17.1859 16.4522 17.7118 16.8026 18.1203H15.2651C15.6155 17.7118 15.8161 17.1859 15.8161 16.6316V8.93841C15.8161 8.38415 15.6155 7.85824 15.2651 7.44971H16.8026Z" stroke="white" stroke-width="1.52539" />
                </svg>
              </div>
              <div className="space-y-[5%] ml-3">
                <h3 className="text-md sm:text-xl font-semibold text-[#0C0E0F]">Explore the possibilities</h3>
                <p className="text-gray-600 mt-2 text-sm md:text-sm lg:text-sm xl:text-md">
                  Time to go shopping… for benefits! Scroll through our amazing offerings and add the ones that pique your interest to your personal wishlist.
                </p>
              </div>
            </div>

            <div className="flex items-center mx-6 justify-center relative bg-white p-6 rounded-lg shadow- min-h-[180px]">
              <div className="absolute font-roman -left-6 top-10 bg-roman-gradient text-white rounded-md w-10 h-10 flex items-center justify-center font-semibold">
                {/* Roman numeral III svg */}
                <svg width="26" height="25" viewBox="0 0 26 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.65612 7.44971C7.30578 7.85824 7.10515 8.38415 7.10515 8.93841V16.6316C7.10515 17.1859 7.30578 17.7118 7.65612 18.1203H6.11865C6.46899 17.7118 6.66962 17.1859 6.66962 16.6316V8.93841C6.66962 8.38415 6.46899 7.85824 6.11865 7.44971H7.65612Z" stroke="white" stroke-width="1.52539" />
                  <path d="M13.7538 7.44971C13.4034 7.85824 13.2028 8.38415 13.2028 8.93841V16.6316C13.2028 17.1859 13.4034 17.7118 13.7538 18.1203H12.2163C12.5667 17.7118 12.7673 17.1859 12.7673 16.6316V8.93841C12.7673 8.38415 12.5667 7.85824 12.2163 7.44971H13.7538Z" stroke="white" stroke-width="1.52539" />
                  <path d="M19.8514 7.44971C19.5011 7.85824 19.3005 8.38415 19.3005 8.93841V16.6316C19.3005 17.1859 19.5011 17.7118 19.8514 18.1203H18.314C18.6643 17.7118 18.865 17.1859 18.865 16.6316V8.93841C18.865 8.38415 18.6643 7.85824 18.314 7.44971H19.8514Z" stroke="white" stroke-width="1.52539" />
                </svg>
              </div>
              <div className="space-y-[5%] ml-3">
                <h3 className="text-md sm:text-xl font-semibold text-[#0C0E0F]">Redeem and Enjoy</h3>
                <p className="text-gray-600 mt-2 text-sm md:text-sm lg:text-sm xl:text-md">
                  When you're ready to treat yourself, just tap the benefit you want to use. We'll handle the details so you can sit back and savor the savings.
                </p>
              </div>
            </div>

            <div className="flex items-center mx-6 justify-center relative bg-white p-6 rounded-lg shadow- min-h-[180px]">
              <div className="absolute font-roman -left-6 top-10 bg-roman-gradient text-white rounded-md w-10 h-10 flex items-center justify-center font-semibold">
                {/* Roman numeral IV svg */}
                <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.3296 7.75977H13.9181C13.5178 8.33246 13.3901 9.07477 13.6159 9.77377L16.1113 17.4963C16.2265 17.8528 16.4265 18.1727 16.6908 18.4304H15.1024C15.5027 17.8577 15.6303 17.1154 15.4045 16.4164L12.9091 8.69383C12.7939 8.33738 12.5939 8.01749 12.3296 7.75977Z" stroke="white" stroke-width="1.52539" />
                  <path d="M19.7397 7.75977C19.4753 8.01749 19.2753 8.33738 19.1602 8.69383L16.6648 16.4164C16.4389 17.1154 16.5666 17.8577 16.9669 18.4304H15.3784C15.6427 18.1727 15.8427 17.8528 15.9579 17.4963L18.4533 9.77377C18.6791 9.07477 18.5515 8.33246 18.1512 7.75977H19.7397Z" stroke="white" stroke-width="1.52539" />
                  <path d="M7.65612 7.75977C7.30578 8.1683 7.10515 8.69421 7.10515 9.24847V16.9417C7.10515 17.4959 7.30578 18.0219 7.65612 18.4304H6.11865C6.46899 18.0219 6.66962 17.4959 6.66962 16.9417V9.24847C6.66962 8.69421 6.46899 8.1683 6.11865 7.75977H7.65612Z" stroke="white" stroke-width="1.52539" />
                </svg>
              </div>
              <div className="space-y-[5%] ml-3">
                <h3 className="text-md sm:text-xl font-semibold text-[#80C0E0F]">Repeat the Fun</h3>
                <p className="text-gray-600 mt-2 text-sm md:text-sm lg:text-sm xl:text-md">
                  Don't stop there! Keep checking back for new deals and offers tailored just for you. The more you Activ8, the more your lifestyle elevates. 🚀
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Grey waves and mouse icon */}
        <img
          src={TripleWaveL}
          alt="Grey waves"
          width={100}
          height={50}
          className="absolute bottom-4 left-0 w-5 md:w-[12%] lg:w-[13%] xl:w-[10%]"
        />
        <img
          src={TripleWaveR}
          alt="Grey waves"
          width={100}
          height={50}
          className="absolute bottom-5 right-0 w-5 md:w-[12%] lg:w-[13%] xl:w-[14%] transform scale-x-[-1] scale-y-[-1]"
          style={{ transform: 'rotate(-20deg)' }}
        />
        <img
          src={ClickMouse}
          alt="mouse"
          width={100}
          height={50}
          className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 md:bottom-[3%] md:right-[5%] lg:bottom-[5%] lg:right-[5%] xl:bottom-[7%] xl:right-[7%] w-5 md:w-[3%] lg:w-[3%] xl:w-[3%]"
        />
      </div>
    </section>
  );
};

export default HowItWorks;
