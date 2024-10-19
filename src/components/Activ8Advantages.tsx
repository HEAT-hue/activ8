import { useState, useEffect } from 'react';
import Card from './Card';
import TRarrow from "../assets/TRarrow.svg";
import Spark from "../assets/Spark.svg";
import ExclusiveCashbacks from "../assets/ExclusiveCashback.svg";
import SpecialDiscount from "../assets/SpecialDiscounts.svg";
import ReducedSF from "../assets/ReducedSubscriptionFees.svg";
import NumberlessATM from "../assets/NumberlessATMCards.svg";
import DiscountedAnB from "../assets/DiscontedAirtimeNBills.svg";
import ReferallProgram from "../assets/ReferallProgram.svg";
import PriorityCustomerS from "../assets/PriorityCustomerSupport.svg";

const Activ8Advantages = () => {
  const [isTwoCols, setIsTwoCols] = useState(false);

  // Function to update the screen size status
  const updateLayout = () => {
    const width = window.innerWidth;
    // Tailwind's 'md' breakpoint starts at 768px
    setIsTwoCols(width >= 768 && width < 1024); // md:grid-cols-2 happens between 768px and 1024px
  };

  useEffect(() => {
    // Set initial layout
    updateLayout();
    // Add event listener on resize
    window.addEventListener('resize', updateLayout);
    return () => window.removeEventListener('resize', updateLayout);
  }, []);

  return (
    <section className="px-6 md:px-16 lg:px-14 xl:px-[5%] 2xl:px-44 py-20 bg-[#FAFAFA]">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-14 max-w-[1600px] mx-auto">

        {/* First card, spans two columns */}
        <Card className="relative adjusted-360 md:col-span-2 bg-[#080808] shadow-sm rounded-3xl h-[280px] md:h-[300px] lg:h-[300px] xl:h-[320px] 2xl:h-[350px] w-full sm:w-[500px] md:w-[600px] lg:max-w-[90%] lg:min-w-[80%] xl:w-[700px] 2xl:w-[88%] flex flex-col justify-between mx-auto">
          <div className="relative ">
            <img
              src={Spark}
              alt="spark"
              className="absolute top-8 left-2 w-6 h-6 sparky"
              loading="lazy" // Lazy load for optimization
            />
            <div className="ml-8 mt-10 advantagediv">
              <h3 className="text-xl sm:text-3xl md:text-4xl lg:text-3xl xl:text-[2.3rem] 2xl:text-5xl font-semibold text-white leading-[3rem] sm:leading-[3.2rem] md:leading-[3.8rem] lg:leading-[4.4rem] 2xl:leading-[5rem]">
                The <span className="text-[#F2D272]">Activ8</span> advantages: <br /> features that will wow you
              </h3>
              <button className="flex items-center justify-center w-[14rem] sm:w-[10rem] text-xs text-PrimaryColor-50 h-12 rounded-md bg-[#BF8136] mt-10 lg:mt-5 xl:mt-10">
                Learn More
                <img
                  src={TRarrow}
                  alt="Forward Arrow"
                  className="w-4 h-4 ml-2"
                  loading="lazy" // Lazy load for optimization
                />
              </button>
            </div>
          </div>
        </Card>

        {/* Cards with images */}
        {[
          { src: ExclusiveCashbacks, title: "Exclusive Cashbacks", description: "Enjoy instant savings on every transaction, boosting your budget with effortless rewards." },
          { src: SpecialDiscount, title: "Special Discounts", description: "Access exclusive deals and limited-time offers tailored just for our subscribers, maximizing your savings on everyday purchases." },
          { src: ReducedSF, title: "Reduced Subscription Fees", description: "Save on subscription costs with our carefully selected partners, making premium services more affordable." },
          { src: NumberlessATM, title: "Numberless ATM Cards", description: "Benefit from secure and convenient access to your funds with cards designed for enhanced protection and ease." },
          { src: DiscountedAnB, title: "Discounted Airtime and Bills", description: "Lower your phone and utility expenses with reduced rates, keeping your communication and services within budget." },
          { src: ReferallProgram, title: "Referral Program", description: "Earn rewards for every successful referral, turning your network into a source of extra income." },
          { src: PriorityCustomerS, title: "Priority Customer Support", description: "Enjoy dedicated and expedited customer service, ensuring your issues and queries are resolved quickly and efficiently." }
        ].map((item, index) => (
          <Card
            key={index}
            className={`bg-white p-8 border-none shadow-sm rounded-3xl h-[280px] md:h-[300px] lg:h-[300px] xl:h-[320px] 2xl:h-[350px] w-full sm:w-[500px] md:w-[90%] mx-auto flex flex-col justify-center items-center ${isTwoCols && index === 6
                ? 'relative adjusted-360 md:col-span-2 shadow-sm rounded-3xl lg:h-[300px] w-full lg:max-w-[100%] flex flex-col justify-between mx-auto'
                : ''
              }`}
          >
            <div className="items-center">
              <img
                src={item.src}
                alt={item.title}
                className={`w-[20%] sm:w-[15%] ${isTwoCols && index === 6 ? 'md:w-[15%]' : 'md:w-[30%]'}`} // Adjust image size conditionally
                loading="lazy" // Optimize images by lazy loading
              />
              <h3 className="text-xl sm:text-xl md:text-lg lg:text-[1rem] 2xl:text-xl font-semibold mt-6 mb-6 sm:mb-10">
                {item.title}
              </h3>
              <p className="mt-2 text-sm lg:text-[0.78rem] xl:text-sm text-[#000000]">
                {item.description}
              </p>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Activ8Advantages;
