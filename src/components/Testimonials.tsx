
import { useState, useEffect } from "react";
import { motion } from "framer-motion"; // Import Framer Motion
import DoubleQuote from "../assets/DoubleQuote.png";
import GraceNkosi from "../assets/GraceNkosi.svg";
import AIfeoma from "../assets/AIfeoma.svg";
import Fbalogun from "../assets/Fbalogun.svg";
import Aakuoma from "../assets/Aakuoma.svg";
import Emichael from "../assets/Emichael.svg";
import Imusa from "../assets/Imusa.svg";
import StarsRating from "../assets/5starsRating.svg";


const Testimonials = () => {
  const testimonials = [
    {
      name: "Grace Nkosi",
      content:
        "\"Activ8 has significantly improved my quality of life by providing access to services I previously considered out of reach.\"",
      profileImage: GraceNkosi,
      ratingImage: StarsRating,
      DoubleQuote: DoubleQuote,
    },
    {
      name: "A. Ifeoma",
      content:
        "\"Activ8 is my go-to app. I especially love the discounts at iFitness and the free consultations with CloudClinic. It's a well-rounded app that meets various needs, from health to entertainment. A must-have for everyone!\"",
      profileImage: AIfeoma,
      ratingImage: StarsRating,
    },
    {
      name: "A. Akuoma",
      content:
        "\"I was surprised by how much Activ8 has to offer. The consultation services with Axa Mansard was really helpful. It's great to have an app that makes managing different aspects of my life so easy and affordable.\"",
      profileImage: Aakuoma,
      ratingImage: StarsRating,
    },
    {
      name: "E. Micheal",
      content:
        "\"Activ8 is a game-changer! I’ve been able to save so much on my daily expenses, from gym memberships to streaming services. The app is super easy to use, and I love the convenience of having everything in one place!\"",
      profileImage: Emichael,
      ratingImage: StarsRating,
    },
    {
      name: "F. Balogun",
      content:
        "\"Activ8 makes life easier and more affordable. As a busy professional, I appreciate how the app helps me manage my subscriptions and access benefits like consultations with Axa Mansard and streaming with Netflix. It’s well worth the subscription fee.\"",
      profileImage: Fbalogun,
      ratingImage: StarsRating,
    },
    {
      name: "I. Musa",
      content:
        "\"I’ve been using Activ8 for a few months now, and it’s been a fantastic experience. The app is well-designed, and the deals are real. I especially like the CloudClinic service for easy consultations, and the streaming options keep me entertained. Activ8 is definitely tailored for the Nigerian lifestyle.\"",
      profileImage: Imusa,
      ratingImage: StarsRating,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLgUp, setIsLgUp] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsLgUp(window.innerWidth >= 1024);
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleNext = () => {
    if (isLgUp && currentIndex < testimonials.length - 2) {
      setCurrentIndex(currentIndex + 1);
    } else if (!isLgUp && currentIndex < testimonials.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <div className="py-16 bg-no-repeat bg-cover px-4 lg:px-8 relative z-0 bg-[#ECE4D4]" >
      <div className="max-w-[1600px] mx-auto">
        <h2 className="text-4xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold text-center mb-4">Our Customers Review</h2>
        <p className="text-center text-[#050C0D] py-8 pt-5 text-sm lg:text-base mb-12">
          Activ8 is trusted by a large number of individuals. <br /> Here is what they have to say about us.
        </p>
        {/* SVG Background */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 translate-y-[-40%] w-full h-auto z-[-1]"> {/* z-[-1] keeps it behind */}
          {/* for lg display upwards */}
          <div className="hidden lg:block">
            <svg
              width="1000"
              height="610"
              viewBox="0 0 1249 610"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mx-auto"
            >
              <path
                d="M1101.07 300.036C819.081 422.681 976.665 483.065 583.536 534.073C190.408 585.081 66 429.291 66 300.036C66 170.782 297.709 66 583.536 66C869.363 66 1383.06 177.392 1101.07 300.036Z"
                fill="#0D0D0D"
                fill-opacity="0.15"
              />
              <path
                d="M587.782 566.799C785.735 541.115 852.428 512.359 904.874 469.462C914.796 461.346 924.195 452.737 933.26 444.432C935.281 442.581 937.285 440.745 939.275 438.933C950.459 428.748 962.161 418.397 976.561 407.394C1005.15 385.549 1045.79 360.066 1114.23 330.298C1151.01 314.305 1179.48 296.656 1196.82 275.958C1205.82 265.209 1212.62 252.679 1215.05 238.443C1217.53 223.917 1215.02 210.057 1209.25 197.73C1198.44 174.657 1176.37 157.142 1153.29 143.619C1129.24 129.52 1099.11 116.92 1065.72 105.736C932.813 61.217 729.292 33 583.536 33C437.042 33 302.82 59.7851 203.985 104.479C108.191 147.799 33 214.421 33 300.036C33 375.962 69.923 458.028 160.216 512.86C249.313 566.965 387.239 592.819 587.782 566.799Z"
                stroke="#0D0D0D"
                stroke-opacity="0.06"
                stroke-width="66"
              />
            </svg>
          </div>
          {/* for md display */}
          <div className="hidden md:block lg:hidden">
            <svg
              width="800"
              height="610"
              viewBox="0 0 1249 610"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mx-auto"
            >
              <path
                d="M1101.07 300.036C819.081 422.681 976.665 483.065 583.536 534.073C190.408 585.081 66 429.291 66 300.036C66 170.782 297.709 66 583.536 66C869.363 66 1383.06 177.392 1101.07 300.036Z"
                fill="#0D0D0D"
                fill-opacity="0.15"
              />
              <path
                d="M587.782 566.799C785.735 541.115 852.428 512.359 904.874 469.462C914.796 461.346 924.195 452.737 933.26 444.432C935.281 442.581 937.285 440.745 939.275 438.933C950.459 428.748 962.161 418.397 976.561 407.394C1005.15 385.549 1045.79 360.066 1114.23 330.298C1151.01 314.305 1179.48 296.656 1196.82 275.958C1205.82 265.209 1212.62 252.679 1215.05 238.443C1217.53 223.917 1215.02 210.057 1209.25 197.73C1198.44 174.657 1176.37 157.142 1153.29 143.619C1129.24 129.52 1099.11 116.92 1065.72 105.736C932.813 61.217 729.292 33 583.536 33C437.042 33 302.82 59.7851 203.985 104.479C108.191 147.799 33 214.421 33 300.036C33 375.962 69.923 458.028 160.216 512.86C249.313 566.965 387.239 592.819 587.782 566.799Z"
                stroke="#0D0D0D"
                stroke-opacity="0.06"
                stroke-width="66"
              />
            </svg>
          </div>
          {/* for display below md */}
          <div className="md:hidden sm:block hidden">
            <svg
              width="600"
              height="610"
              viewBox="0 0 1249 610"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mx-auto"
            >
              <path
                d="M1101.07 300.036C819.081 422.681 976.665 483.065 583.536 534.073C190.408 585.081 66 429.291 66 300.036C66 170.782 297.709 66 583.536 66C869.363 66 1383.06 177.392 1101.07 300.036Z"
                fill="#0D0D0D"
                fill-opacity="0.15"
              />
              <path
                d="M587.782 566.799C785.735 541.115 852.428 512.359 904.874 469.462C914.796 461.346 924.195 452.737 933.26 444.432C935.281 442.581 937.285 440.745 939.275 438.933C950.459 428.748 962.161 418.397 976.561 407.394C1005.15 385.549 1045.79 360.066 1114.23 330.298C1151.01 314.305 1179.48 296.656 1196.82 275.958C1205.82 265.209 1212.62 252.679 1215.05 238.443C1217.53 223.917 1215.02 210.057 1209.25 197.73C1198.44 174.657 1176.37 157.142 1153.29 143.619C1129.24 129.52 1099.11 116.92 1065.72 105.736C932.813 61.217 729.292 33 583.536 33C437.042 33 302.82 59.7851 203.985 104.479C108.191 147.799 33 214.421 33 300.036C33 375.962 69.923 458.028 160.216 512.86C249.313 566.965 387.239 592.819 587.782 566.799Z"
                stroke="#0D0D0D"
                stroke-opacity="0.06"
                stroke-width="66"
              />
            </svg>
          </div>
          {/* for display below sm */}
          <div className="sm:hidden block">
            <svg
              width="450"
              height="610"
              viewBox="0 0 1249 610"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mx-auto"
            >
              <path
                d="M1101.07 300.036C819.081 422.681 976.665 483.065 583.536 534.073C190.408 585.081 66 429.291 66 300.036C66 170.782 297.709 66 583.536 66C869.363 66 1383.06 177.392 1101.07 300.036Z"
                fill="#0D0D0D"
                fill-opacity="0.15"
              />
              <path
                d="M587.782 566.799C785.735 541.115 852.428 512.359 904.874 469.462C914.796 461.346 924.195 452.737 933.26 444.432C935.281 442.581 937.285 440.745 939.275 438.933C950.459 428.748 962.161 418.397 976.561 407.394C1005.15 385.549 1045.79 360.066 1114.23 330.298C1151.01 314.305 1179.48 296.656 1196.82 275.958C1205.82 265.209 1212.62 252.679 1215.05 238.443C1217.53 223.917 1215.02 210.057 1209.25 197.73C1198.44 174.657 1176.37 157.142 1153.29 143.619C1129.24 129.52 1099.11 116.92 1065.72 105.736C932.813 61.217 729.292 33 583.536 33C437.042 33 302.82 59.7851 203.985 104.479C108.191 147.799 33 214.421 33 300.036C33 375.962 69.923 458.028 160.216 512.86C249.313 566.965 387.239 592.819 587.782 566.799Z"
                stroke="#0D0D0D"
                stroke-opacity="0.06"
                stroke-width="66"
              />
            </svg>
          </div>
        </div>


        <div className="flex justify-center items-center lg:space-x-8 space-x-4 lg:flex-row flex-col">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.5 }}
            className="w-full sm:w-[75%] md:w-[60%] lg:w-[50%] xl:w-[40%]"
            style={{ height: 'auto' }}
          >
            <div
              className="bg-[#222629] text-white rounded-xl p-6 lg:p-8 h-[250px] lg:h-[350px] flex flex-col justify-between"
              style={{ minWidth: "320px" }}
            >
              <p className="text-xs small-display leading-5 mx- sm:text-md md:text-md lg:text-[1rem] xl:text-lg font-Helvectica font-semibold lg:font-norma">{testimonials[currentIndex].content}</p>
              <div className="flex items-center justify-between mt-4">
                <div className="flex items-center">
                  <img
                    src={testimonials[currentIndex].profileImage}
                    alt={testimonials[currentIndex].name}
                    className="rounded-full w-10 lg:w-12"
                    loading="lazy"
                  />
                  <div className="ml-4">
                    <p className="font-bold text-sm lg:text-base">{testimonials[currentIndex].name}</p>
                    <img
                      src={testimonials[currentIndex].ratingImage}
                      alt="5 stars"
                      width={80}
                      height={16}
                      className="mt-1"
                      loading="lazy"
                    />
                  </div>
                </div>
                <img
                  src={DoubleQuote}
                  alt="Double Quote"
                  loading="lazy"
                  className="w-[100px] lg:w-[120px]"
                />
              </div>
            </div>
          </motion.div>

          {isLgUp && currentIndex + 1 < testimonials.length && (
            <motion.div
              key={currentIndex + 1}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="w-full lg:w-[50%] xl:w-[40%]"
              style={{ height: 'auto' }}
            >
              <div
                className="bg-[#222629] text-white rounded-xl p-6 lg:p-8 h-[250px] lg:h-[350px] flex flex-col justify-between"
                style={{ minWidth: "320px" }}
              >
                <p className="text-xs small-display leading-5 mx-2 sm:text-md md:text-md lg:text-[1rem] xl:text-lg font-Helvectica font-semibold lg:font-norma">
                  {testimonials[currentIndex + 1].content}
                </p>
                <div className="flex items-center justify-between mt-4">
                  <div className="flex items-center">
                    <img
                      src={testimonials[currentIndex + 1].profileImage}
                      alt={testimonials[currentIndex + 1].name}
                      className="rounded-full w-10 lg:w-12"
                      loading="lazy"
                    />
                    <div className="ml-4">
                      <p className="font-bold text-sm lg:text-base">
                        {testimonials[currentIndex + 1].name}
                      </p>
                      <img
                        src={testimonials[currentIndex + 1].ratingImage}
                        alt="5 stars"
                        width={80}
                        height={16}
                        className="mt-1"
                        loading="lazy"
                      />
                    </div>
                  </div>
                  <img
                    src={DoubleQuote}
                    alt="Double Quote"
                    width={130}
                    height={130}
                    loading="lazy"
                  />
                </div>
              </div>
            </motion.div>
          )}
        </div>
        <div className="flex justify-center mt-8 space-x-4">
          <button
            onClick={handlePrev}
            className={`sm:w-12 sm:h-12 h-10 w-10 flex items-center justify-center rounded-full ${currentIndex === 0 ? "bg-[#222629]" : "bg-[#956F3E]"
              }`}
          >
            <span className="text-white">
              {/* Left arrow SVG */}
              <svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M7.86606 0.198409C7.60151 -0.0661363 7.17265 -0.0661363 6.9081 0.198409L0.585505 6.52094C0.458422 6.64793 0.387066 6.82027 0.387066 6.99992C0.387066 7.17957 0.458422 7.35191 0.585505 7.47899L6.9081 13.8016C7.17265 14.0661 7.60151 14.0661 7.86606 13.8016C8.13062 13.537 8.13062 13.1081 7.86606 12.8435L2.69996 7.67734L17.3226 7.67734C17.6967 7.67734 18 7.37404 18 6.99992C18 6.6258 17.6967 6.3225 17.3226 6.3225L2.69996 6.3225L7.86606 1.15643C8.13062 0.89188 8.13062 0.462965 7.86606 0.198409Z" fill="white" />
              </svg>
            </span>
          </button>
          <button
            onClick={handleNext}
            className={`sm:w-12 sm:h-12 h-10 w-10 flex items-center justify-center rounded-full ${(isLgUp && currentIndex === testimonials.length - 2) || (!isLgUp && currentIndex === testimonials.length - 1)
                ? "bg-[#222629]"
                : "bg-[#956F3E]"
              }`}
          >
            <span className="text-white">
              {/* Right arrow SVG */}
              <svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M10.1339 0.198409C10.3985 -0.0661363 10.8273 -0.0661363 11.0919 0.198409L17.4145 6.52094C17.5416 6.64793 17.6129 6.82027 17.6129 6.99992C17.6129 7.17957 17.5416 7.35191 17.4145 7.47899L11.0919 13.8016C10.8273 14.0661 10.3985 14.0661 10.1339 13.8016C9.86938 13.537 9.86938 13.1081 10.1339 12.8435L15.3 7.67734L0.67742 7.67734C0.303294 7.67734 0 7.37404 0 6.99992C0 6.6258 0.303294 6.3225 0.67742 6.3225L15.3 6.3225L10.1339 1.15643C9.86938 0.89188 9.86938 0.462965 10.1339 0.198409Z" fill="white" />
              </svg>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
