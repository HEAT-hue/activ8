
import ExpandIcon from "../assets/ExpandIcon.svg";
import IntegrationIcon from '../assets/SeamlessIcon.svg';
import RevenueIcon from '../assets/DriveSalesIcon.svg';
import handshakeImage from "../assets/HoldingHands.jpeg";


export default function PartnershipSection() {
  return (
    <div className="bg-[#ECE4D4] bg-no-repeat bg-cover p-6 md:p-12 relative z-0"
    >
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
      <div className="container px-0 py-14 mx-auto xl:px-24">
        <div className="flex flex-col-reverse md:flex-row items-center">
          {/* Text Section */}
          <div className="flex-1 flex flex-col gap-6">
            <h2 className="text-gold text-[#956F3E] font-bold text-[1.5rem] md:text-lg">
              Partner with Activ8: Let's Elevate Everyday Life Together
            </h2>
            <h1 className="text-black font-bold font-Helvectica text-lg md:text-4xl">
              Enhanced brand loyalty, and a direct channel to reach a diverse audience across Nigeria.
            </h1>
            <p className="text-gray-700 text-sm md:text-base leading-6">
              At Activ8, we believe in creating a win-win for our partners and users. By joining forces with us, you’ll gain access to a growing community of engaged customers eager to discover and utilize your services. Our platform is designed to seamlessly integrate your offerings, providing you with increased visibility.
            </p>

            {/* Image Section for md and below */}
            <div className="md:hidden flex justify-center my-8">
              <img src={handshakeImage} alt="Partnership" className='rounded-md' width={400} height={500} />
            </div>

            <div className="flex flex-col text-sm md:text-base gap-8">
              <div className="bg-white p-4 rounded-md  flex items-center gap-4 shadow-none">
                <img src={ExpandIcon} alt="Expand your reach" className='self-start' width={24} height={24} />
                <div>
                  <h3 className="text-[#38404A] leading-[1.35rem]"><span className='font-bold'>Expand your reach:</span> Tap into a vast user base that is always on the lookout for value-driven services. Whether you’re in health, entertainment, fitness, or travel, Activ8 connects you with customers who are ready to engage.</h3>
                </div>
              </div>

              <div className="flex items-center pl-5 gap-8">
                <img src={IntegrationIcon} alt="Seamless Integration" className='self-start' width={24} height={24} />
                <div>
                  <h3 className="text-[#38404A] leading-[1.35rem] "><span className='font-bold'>Seamless Integration: </span> We make it easy for you to join our platform. Our tech team handles the heavy lifting, so you can focus on what you do best—delivering top-notch services.</h3>
                </div>
              </div>

              <div className="flex items-center pl-5 gap-8">
                <img src={RevenueIcon} alt="Drive Sales and Revenue" className='self-start' width={24} height={24} />
                <div>
                  <h3 className="text-[#38404A] leading-[1.35rem] "><span className='font-bold'>Drive Sales and Revenue: </span>By offering discounts or complimentary services through Activ8, you can attract new customers and drive repeat business, ultimately boosting your sales and bottom line.                  </h3>
                </div>
              </div>
            </div>
          </div>

          {/* Image Section for lg and above */}
          <div className="hidden md:flex md:flex-1  md:ml-8">
            <div className="p-4 ml-auto">
              <img src={handshakeImage} alt="Partnership" className='rounded-md ' width={500} height={600} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
