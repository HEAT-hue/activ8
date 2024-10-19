import ContactUsModal from './ContactUsModal';

export default function PartnerCTA() {
  return (
    <section className="bg-beige">
      <div className=" lg:p-12 p-0 flex justify-center">
        <div className="bg-[#D29F60] flex items-center justify-center flex-col text-center w-full rounded-none lg:rounded-md py-20 px-8 lg:px-24 lg:py-36">
          <h2 className="text-white font-bold text-xl md:text-4xl">
            Want to become a partner?
          </h2>
          <p className="text-white text-sm mt-4 w-full md:w-[50%]   ">
            Let’s work together to create value, drive engagement, and elevate everyday life for our users.
          </p>
          <ContactUsModal />
        </div>
      </div>
    </section>
  );
}
