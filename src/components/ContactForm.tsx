import CallSupport from "../assets/CallSupport.png"

const ContactForm = () => {
  return (
    <div className="bg-gradient-to-r from-white to-beige p-8 md:p-12 lg:p-16 w-full flex justify-center">
      <div className="max-w-[1600px] w-full flex flex-col-reverse lg:flex-row items-center justify-center gap-x-[10%]">

        {/* Form Section */}
        <div className="w-full max-w-xl">
          <form>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                  First name
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  placeholder="First name"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none sm:text-sm"
                />
              </div>

              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                  Last name
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  placeholder="Last name"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none sm:text-sm"
                />
              </div>
            </div>

            <div className="mt-6">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="you@company.com"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none sm:text-sm"
              />
            </div>

            <div className="mt-6">
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="Subject"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none sm:text-sm"
              />
            </div>

            <div className="mt-6">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                placeholder="Leave us a message..."
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none max-h-[150px] min-h-[150px] sm:text-sm"
              ></textarea>
            </div>

            <div className="mt-8 flex justify-center">
              <button
                type="submit"
                className="w-full sm:w-[85%] bg-[#BF8136] text-white py-3 text-sm px-4 rounded-md shadow-lg focus:outline-none"
              >
                Send Message
              </button>
            </div>

          </form>
        </div>

        {/* Image Section */}
        <div className="mb-8 lg:mr-12 mt-8 rounded-md shadow-sm-even-3xl sm:shadow-even-3xl flex-shrink-0">
          <img
            src={CallSupport}
            alt="Support"
            width={500} // Adjust width as needed
            height={300} // Adjust height as needed
            className="rounded-md"
            loading='lazy'
          />
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
