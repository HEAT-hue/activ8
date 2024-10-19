import { useEffect } from "react";
import PringlesWave from '../assets/PringlesWave.svg';

const TermsOfService = () => {
  useEffect(() => {
    document.title = 'Activ8 - Terms Of Service';
  }, []);
  return (
    <>
      <section className="bg-[#F9FAFB] py-[30%] px-4 sm:px-6 sm:py-[14%] lg:py-[13%] lg:px-8"
        style={{ backgroundImage: `url(${PringlesWave})`, backgroundRepeat: "no-repeat" }}
      >
        <div className="w-full sm:w-[70%] md:w-[80%] lg:w-[60%]  mx-auto text-center">
          <h4 className="text-sm md:text-lg text-PrimaryColor-500 font-semibold mb-2">CURRENT AS OF 20TH AUGUST, 2024</h4>
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl leading-[2.2rem] lg:text-5xl xl:text-5xl">
            Terms Of Service
          </h2>
          <p className="mt-8 w-[98%] sm:w-full text-sm leading-5 text-gray-600 max-w-[43rem] mx-auto">
            By accessing our website, you are agreeing to be bound by these terms of service, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws.
          </p>
        </div>
      </section>
      <div className="px-4 md:px-24 py-8 bg-gray-100">
        <div className="max-w-4xl mx-auto p-6 ">
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4 text-gray-900">What information do we collect?</h2>
            <p className="text-[#475467] mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vehicula, nisi ut feugiat pharetra, elit nisi interdum libero, at vestibulum nulla neque a turpis.
              Suspendisse potenti.
            </p>
            <p className="text-[#475467]">
              Mauris feugiat leo ac dolor pharetra, at tincidunt arcu suscipit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nullam viverra orci non est commodo, a pellentesque justo dictum.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4 text-gray-900">How do we use your information?</h2>
            <p className="text-[#475467] mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vehicula, nisi ut feugiat pharetra, elit nisi interdum libero, at vestibulum nulla neque a turpis. Suspendisse potenti.
            </p>
            <p className="text-[#475467]">
              Mauris feugiat leo ac dolor pharetra, at tincidunt arcu suscipit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nullam viverra orci non est commodo, a pellentesque justo dictum.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4 text-gray-900">
              Do we use cookies and other tracking technologies?
            </h2>
            <p className="text-[#475467]">
              Phasellus euismod neque ut neque varius, sit amet commodo libero vestibulum. Curabitur at quam a dolor dapibus fermentum.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4 text-gray-900">How long do we keep your information?</h2>
            <p className="text-[#475467]">
              Phasellus euismod neque ut neque varius, sit amet commodo libero vestibulum. Curabitur at quam a dolor dapibus fermentum.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4 text-gray-900">How do we keep your information safe?</h2>
            <p className="text-[#475467]">
              Phasellus euismod neque ut neque varius, sit amet commodo libero vestibulum. Curabitur at quam a dolor dapibus fermentum.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">What are your privacy rights?</h2>
            <p className="text-[#475467]">
              Phasellus euismod neque ut neque varius, sit amet commodo libero vestibulum. Curabitur at quam a dolor dapibus fermentum.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4 text-gray-900">
              How can you contact us about this policy?
            </h2>
            <p className="text-[#475467]">
              Sagittis et eu at elementum, quis in. Proin praesent volutpat egestas sociis sit lorem nunc nunc sit. Eget diam curabitur mi ac. Auctor rutrum lacus malesuada massa ornare et. Vulputate consectetur ac ultrices at diam dui eget fringilla tincidunt. Arcu sit dignissim massa erat cursus vulputate gravida id. Sed quis auctor vulputate hac elementum gravida cursus dis.
            </p>
            <ol className="list-decimal list-inside text-[#475467] space-y-1 mt-4">
              <li> Lectus id duis vitae porttitor enim gravida morbi.</li>
              <li> Eu turpis posuere semper feugiat volutpat elit, ultrices suspendisse. Auctor vel in vitae placerat.</li>
              <li> Suspendisse maecenas ac donec scelerisque diam sed est duis purus.</li>
            </ol>
          </section>
        </div>
      </div>
    </>
  );
};

export default TermsOfService;
