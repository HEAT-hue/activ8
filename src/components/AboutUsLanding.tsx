import UsingPhoneOutdoors from "../assets/UsingPhoneOutdoors.png";

const AboutUsLanding = () => {
  return (
    <section className="bg-[#000000] py-16 lg:py-14 px-4 sm:px-6 md:px-10 lg:px-16 xl:px-28 relative overflow-hidden">
      <div className="max-w-[1600px] mx-auto">
        <div className='text-center lg:text-left lg:mb-4 xl:mb-4 2xl:mb-1 mb-1'>
          <h1 className='text-3xl sm:text-3xl md:text-4xl lg:text-5xl text-PrimaryColor-300 font-HelveticaNeue-Medium'>
            About Us
          </h1>
        </div>

        <div className="flex flex-col-reverse lg:flex-row items-center justify-between">
          
          {/* Text Content */}
          <div className="flex flex-col w-full lg:w-[50%] xl:w-[48%] 2xl:w-[50%] h-full">
            <p className='text-md py-2 sm:text-lg  text-PrimaryColor-50 font-OpenSans-Regular'>
              Welcome to Activ8 – your ultimate lifestyle companion! At Activ8,
              we&apos;re passionate about transforming how you manage your daily
              needs. Our app offers a seamless way to access exclusive benefits,
              discounts, and essential services, making it easier than ever
              to optimize your lifestyle.<br/><br/>

              With Activ8, you can effortlessly manage subscriptions, streamline
              transactions, and connect with top-tier vendors—all from one
              intuitive platform. Whether you’re looking to simplify your finances,
              discover new services, or stay on top of your daily activities, we’ve got
              you covered.<br/><br/>

              Our mission is to make quality lifestyle services accessible and
              affordable for everyone. We’re committed to delivering a user-friendly
              experience that empowers you to live your best life with ease and
              efficiency. Join us today and experience the future of lifestyle
              management with Activ8!
            </p>
          </div>

          {/* Image and background container */}
          <div className="w-full md:w-[80%] lg:w-[48%] xl:w-[48%] flex-shrink-0 mb-10 mt-20 lg:mt-0 lg:mb-0 relative">
            <div className="relative w-full h-full flex justify-end items-center">
              <img
                src={UsingPhoneOutdoors} 
                alt="Woman shopping"
                className="rounded-lg object-cover relative my-auto mx-auto z-10"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsLanding;
