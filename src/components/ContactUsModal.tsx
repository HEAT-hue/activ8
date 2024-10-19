"use client";
import { useState, useEffect, useRef, FormEvent } from "react";
import { Transition } from "@headlessui/react";

export default function ContactUsModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showNotifier, setShowNotifier] = useState(false);
  const [formData, setFormData] = useState({
    companyName: "",
    email: "",
    phone: "",
    message: ""
  });
  const [isSlidingOut, setIsSlidingOut] = useState(false);
  const modalRef = useRef(null);

  const handleClose = () => {
    if (modalRef.current) {
      setIsSlidingOut(true);

      // Wait for the animation to finish before setting isOpen to false
      setTimeout(() => {
        setIsOpen(false);
        setIsSlidingOut(false);
      }, 600); // Match the duration of the slide-out animation
    }
  };
  const [formIsValid, setFormIsValid] = useState(false);

  useEffect(() => {
    const allFieldsFilled = Object.values(formData).every(field => field.trim() !== "");
    setFormIsValid(allFieldsFilled);
  }, [formData]);

  const handleSendMessage = (event: FormEvent) => {
    event.preventDefault();
    if (!formIsValid) return;

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      console.log("Successful");
      setShowNotifier(true);

      // Clear the form data
      setFormData({
        companyName: "",
        email: "",
        phone: "",
        message: ""
      });

      // Hide the notifier after a short delay
      setTimeout(() => {
        setShowNotifier(false);
      }, 3000);
    }, 3000);
  };

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto"; // Disable/Enable scrolling when modal is open/closed
  }, [isOpen]);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleChange = (event: any) => {
    const { id, value } = event.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  return (
    <div className="relative">
      <button
        className="mt-8 bg-[#48361E] text-white text-sm py-2 px-14 rounded-lg hover:bg-opacity-90"
        onClick={() => setIsOpen(true)}
      >
        Contact Us
      </button>

      <Transition show={isOpen}>
        <div className="fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-0 ease-out bg-black bg-opacity-50">
          <div
            ref={modalRef}
            className={`bg-white rounded-lg ${isSlidingOut ? "slide-out-bottom" : "slide-in-bottom"} shadow-lg max-w-md mx-7 w-full sm:max-w-3xl relative`}
            style={{ maxHeight: "calc(100vh - 40px)" }} // Ensures modal fits within the viewport
          >
            {/* Close Button */}
            <button
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
              onClick={handleClose}
            >
              <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_192_6113)">
                  <g filter="url(#filter0_d_192_6113)">
                    <path d="M16.1751 15L23.0835 8.09168C23.22 7.93226 23.2913 7.7272 23.2832 7.51747C23.2751 7.30774 23.1882 7.10879 23.0398 6.96038C22.8914 6.81196 22.6924 6.72502 22.4827 6.71692C22.273 6.70882 22.0679 6.78016 21.9085 6.91668L15.0001 13.825L8.09181 6.90835C7.93489 6.75143 7.72206 6.66327 7.50014 6.66327C7.27822 6.66327 7.06539 6.75143 6.90847 6.90835C6.75155 7.06527 6.6634 7.27809 6.6634 7.50001C6.6634 7.72193 6.75155 7.93476 6.90847 8.09168L13.8251 15L6.90847 21.9083C6.82124 21.9831 6.75039 22.075 6.70037 22.1784C6.65035 22.2818 6.62224 22.3944 6.61781 22.5091C6.61338 22.6239 6.63271 22.7383 6.67461 22.8453C6.7165 22.9522 6.78005 23.0493 6.86127 23.1306C6.94248 23.2118 7.0396 23.2753 7.14654 23.3172C7.25348 23.3591 7.36792 23.3784 7.48268 23.374C7.59745 23.3696 7.71006 23.3415 7.81345 23.2915C7.91684 23.2414 8.00877 23.1706 8.08347 23.0833L15.0001 16.175L21.9085 23.0833C22.0679 23.2199 22.273 23.2912 22.4827 23.2831C22.6924 23.275 22.8914 23.1881 23.0398 23.0396C23.1882 22.8912 23.2751 22.6923 23.2832 22.4826C23.2913 22.2728 23.22 22.0678 23.0835 21.9083L16.1751 15Z" fill="#956F3E" />
                  </g>
                </g>
                <defs>
                  <filter id="filter0_d_192_6113" x="2.61719" y="6.66327" width="24.6665" height="24.7114" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="2" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_192_6113" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_192_6113" result="shape" />
                  </filter>
                  <clipPath id="clip0_192_6113">
                    <rect width="30" height="30" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </button>

            {/* Scrollable content area */}
            <div className="p-8 md:px-[150px] sm:px-[130px] lg:px-[160px] xl:px-[150px] py-14 overflow-y-auto max-h-[89vh] sm:max-h-[90vh] md:max-h-[80vh]">
              <h2 className="text-md sm:text-lg lg:text-2xl font-bold text-center mb-4">
                Join the train and provide services for individuals that will{" "}
                <span className="text-[#BF8136]">Activ8</span> their lifestyle.
              </h2>
              <form onSubmit={handleSendMessage}>
                <label htmlFor="companyName" className="block mb-1 text-left text-sm font-medium text-gray-700">
                  Company Name
                </label>
                <input
                  id="companyName"
                  type="text"
                  placeholder="Company Name"
                  value={formData.companyName}
                  onChange={handleChange}
                  style={{ fontSize: '16px' }}
                  className="w-full p-2 mb-4 text-sm rounded-lg border border-gray-300 focus:outline-none"
                />
                <label htmlFor="email" className="block mb-1 text-left text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  style={{ fontSize: '16px' }}
                  className="w-full p-2 mb-4 text-sm rounded-lg border border-gray-300 focus:outline-none"
                />
                <label htmlFor="phone" className="block mb-1 text-left text-sm font-medium text-gray-700">
                  Phone Number
                </label>
                <input
                  id="phone"
                  type="text"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  style={{ fontSize: '16px' }}
                  className="w-full p-2 mb-4 text-sm rounded-lg border border-gray-300 focus:outline-none"
                />
                <label htmlFor="message" className="block mb-1 text-left text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  id="message"
                  placeholder="Your message"
                  value={formData.message}
                  onChange={handleChange}
                  style={{ fontSize: '16px' }}
                  rows={4}
                  className="resize-none w-full p-2 text-sm rounded-lg min-h-[150px] max-h-[150px] border border-gray-300 focus:outline-none"
                />
                <button
                  disabled={!formIsValid || isLoading}
                  className={`w-[80%] text-sm mt-4 p-2 rounded-md text-white ${!formIsValid || isLoading ? "bg-[#BF8136] cursor-not-allowed" : "bg-[#BF8136] hover:bg-[#BF8136]/80"
                    }`}
                >
                  {isLoading ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </Transition>

      {/* Floating Notifier */}
      <Transition
        show={showNotifier}
        enter="transition ease-out duration-300"
        enterFrom="transform scale-75 opacity-0"
        enterTo="transform scale-100 opacity-100"
        leave="transition ease-in duration-300"
        leaveFrom="transform scale-100 opacity-100"
        leaveTo="transform scale-75 opacity-0"
      >
        <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50 bg-[#BF8136] text-white p-4 rounded-lg flex items-center justify-between w-[91.6667%] sm:w-[66.6667%] md:w-[56.6667%] lg:w-[43.3333%] xl:w-[28.3333%] xl:px-6 xl:py-4">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-4"
          >
            <circle cx="10" cy="10" r="10" fill="white" />
            <path
              d="M4.75 10.75L8.25 14.25L15.25 6.75"
              stroke="#BF8136"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          <span className="text-xs sm:text-base">
            Message Sent Succesfully
          </span>
          <button
            onClick={() => setShowNotifier(false)}
            className="ml-4 text-white flex flex-row justify-center items-center gap-x-3"
          >
            <svg
              width="10"
              height="10"
              viewBox="0 0 10 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.01758 1.01953L1.01758 9.01953M1.01758 1.01953L9.01758 9.01953"
                stroke="white"
                strokeWidth="1.1916"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </Transition>
    </div>
  );
}
