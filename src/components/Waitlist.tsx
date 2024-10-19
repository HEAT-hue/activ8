import { useState } from 'react';
import { Transition } from '@headlessui/react';
// import BouncingCircles from './BouncingCircles';

const Waitlist = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [showNotifier, setShowNotifier] = useState(false);
  const [email, setEmail] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [showLabel, setShowLabel] = useState(false);

  const validateEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleChange = (e: any) => {
    const inputEmail = e.target.value;
    setEmail(inputEmail);
    const valid = validateEmail(inputEmail);
    setIsValidEmail(valid);
    setShowLabel(inputEmail.length > 0 && !valid);
  };
  const handleJoinWaitlist = () => {
    setIsLoading(true);
    // Simulate a delay for the "loading" state
    setTimeout(() => {
      setIsLoading(false);
      console.log("Successful"); // Log success to the console
      setShowNotifier(true);
      // Automatically hide the notifier after 3 seconds
      setTimeout(() => {
        setShowNotifier(false);
      }, 3000);
    }, 2000); // Simulated API call delay
  };


  return (
    <div className="relative flex flex-col items-center justify-between h-scree bg-[#EBC553] overflow-hidden p-4">
      {/* SVG Backgrounds */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        {/* <BouncingCircles /> */}

      </div>

      {/* Content Container */}
      <div className="relative z-10 flex flex-col justify-between items-center my-[20%] sm:my-[7%] w-full h-full max-w-screen-sm sm:max-w-screen-md  mx-auto">
        <div className="text-center text-brown-800">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-4xl text-[#6C512D] font-bold mb-4 px-4 sm:px-0">"Don't Wait, Activ8! Join Our Exclusive Early List"</h1>
          <p className="mt-12 text-md sm:text-lg mb-7 text-[#212121]">"Be first in line for the app that's about to transform your lifestyle."</p>

        </div>



        {showLabel && (
          <div className='ml-14 my-2  self-start text-xs text-PrimaryColor-500'>
            Please enter a valid email address
          </div>
        )}
        <div className="flex flex-col items-center w-full max-w-md sm:max-w-2xl mb-auto mt-4 gap-4 sm:flex-row sm:gap-6">
          <input
            type="email"
            placeholder="Enter your email"
            required
            className="w-full p-4 text-sm sm:text-sm rounded-3xl shadow-sm border border-gray-200 focus:outline-none"
            style={{ fontSize: '16px' }}  // Ensures the font size is at least 16px
            value={email}
            onChange={handleChange}

          />

          <button
            type='submit'
            disabled={!isValidEmail}
            onClick={handleJoinWaitlist}
            className="p-4 px-10 whitespace-nowrap text-xs sm:text-sm text-white bg-[#BF8136] rounded-3xl"
          >
            {isLoading ? 'Loading....' : 'Join the waitlist'}
          </button>


          {/* Floating notifier */}
          <Transition
            show={showNotifier}
            enter="transition ease-out duration-300"
            enterFrom="transform scale-75 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition ease-in duration-300"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-75 opacity-0"
          >
            <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-[#BF8136] text-white p-4 rounded-lg flex items-center justify-between w-[91.6667%] sm:w-[66.6667%] md:w-[56.6667%] lg:w-[43.3333%] 2xl:w-[28.3333%] xl:px-6 xl:py-4">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className='w-4 sm:w-'>
                <circle cx="10" cy="10" r="10" fill="white" />
                <path d="M4.75 10.75L8.25 14.25L15.25 6.75" stroke="#BF8136" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              </svg>

              <span className='text-xs sm:text-base '>Successful. Thanks for joining our waitlist</span>
              |
              <button

                onClick={() => setShowNotifier(false)}
                className="ml-4 text-white flex flex-row justify-center items-center gap-x-3"
              >
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.01758 1.01953L1.01758 9.01953M1.01758 1.01953L9.01758 9.01953" stroke="white" stroke-width="1.1916" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </button>
            </div>

          </Transition>
        </div>

      </div>
    </div>
  );
};

export default Waitlist;
