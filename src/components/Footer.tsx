import { Link } from 'react-router-dom';
import Activ8LogoNT from "../assets/Activ8LogoNT.svg";
import BigWavyBackgroundImage from "../assets/BigWavyBackgroundImage.svg";
import cbn from "../assets/cbn.svg";
import TheAltBank from "../assets/TheAltBank.svg";
import { NAVIGATION } from '../lib/definition';

const Footer = () => {

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 pt-[80px] pb-5 overflow-hidden" style={{ backgroundImage: `url(${BigWavyBackgroundImage})` }}>
      <div className="container mx-auto px-4 max-w-[1600px]">
        <div className="flex flex-col md:flex-row justify-between items-start space-y-16 md:space-y-0 md:space-x-8">
          {/* Logo and Social Icons */}
          <div className="flex flex-col space-y-12">
            <div>
              <img
                src={Activ8LogoNT}
                alt="Activ8 Logo"
              // placeholder="blur" 
              />
            </div>
            <div className="flex space-x-4">
              <Link to="#">
                <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="44" height="44" rx="5" fill="#120D07" />
                  <path d="M23.5487 32V22.8777H26.6094L27.0686 19.3216H23.5487V17.0515C23.5487 16.0222 23.8333 15.3208 25.311 15.3208L27.1925 15.32V12.1392C26.8671 12.0969 25.7502 12 24.4502 12C21.7356 12 19.8771 13.657 19.8771 16.6993V19.3216H16.8071V22.8777H19.8771V32H23.5487Z" fill="white" />
                </svg>

              </Link>
              <Link to="#">
                <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="44" height="44" rx="5" fill="#120D07" />
                  <rect x="12" y="12" width="20" height="20" fill="url(#pattern0_192_3165)" />
                  <defs>
                    <pattern id="pattern0_192_3165" patternContentUnits="objectBoundingBox" width="1" height="1">
                      <use href="#image0_192_3165" transform="scale(0.00390625)" />
                    </pattern>
                    <image id="image0_192_3165" width="256" height="256" href="data:image/png;base64,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" />
                  </defs>
                </svg>


              </Link>
              <Link to="#">
                <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="44" height="44" rx="5" fill="#120D07" />
                  <g clipPath="url(#clip0_192_3167)">
                    <path d="M31.9951 31.9999V31.999H32.0001V24.664C32.0001 21.0757 31.2276 18.3115 27.0326 18.3115C25.0159 18.3115 23.6626 19.4182 23.1101 20.4674H23.0517V18.6465H19.0742V31.999H23.2159V25.3874C23.2159 23.6465 23.5459 21.9632 25.7017 21.9632C27.8259 21.9632 27.8576 23.9499 27.8576 25.499V31.9999H31.9951Z" fill="white" />
                    <path d="M12.3301 18.6475H16.4767V32H12.3301V18.6475Z" fill="white" />
                    <path d="M14.4017 12C13.0758 12 12 13.0758 12 14.4017C12 15.7275 13.0758 16.8258 14.4017 16.8258C15.7275 16.8258 16.8033 15.7275 16.8033 14.4017C16.8025 13.0758 15.7267 12 14.4017 12V12Z" fill="white" />
                  </g>
                  <defs>
                    <clipPath id="clip0_192_3167">
                      <rect width="20" height="20" fill="white" transform="translate(12 12)" />
                    </clipPath>
                  </defs>
                </svg>

              </Link>
              <Link to="#">
                <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="44" height="44" rx="5" fill="#120D07" />
                  <g clipPath="url(#clip0_192_3168)">
                    <path d="M31.9804 17.8801C31.9336 16.8174 31.7617 16.0868 31.5156 15.4537C31.2616 14.7818 30.8709 14.1801 30.359 13.68C29.8589 13.1721 29.2533 12.7774 28.5891 12.5274C27.9524 12.2813 27.2256 12.1094 26.163 12.0626C25.0923 12.0118 24.7525 12 22.0371 12C19.3217 12 18.9818 12.0118 17.9152 12.0586C16.8525 12.1055 16.1219 12.2775 15.489 12.5235C14.8169 12.7774 14.2153 13.1681 13.7152 13.68C13.2073 14.1801 12.8127 14.7857 12.5626 15.4499C12.3164 16.0868 12.1446 16.8134 12.0977 17.8761C12.0469 18.9467 12.0352 19.2866 12.0352 22.002C12.0352 24.7173 12.0469 25.0572 12.0938 26.1239C12.1406 27.1865 12.3126 27.9171 12.5588 28.5502C12.8127 29.2221 13.2073 29.8238 13.7152 30.3239C14.2153 30.8318 14.8209 31.2265 15.4851 31.4765C16.1219 31.7226 16.8486 31.8945 17.9114 31.9413C18.9779 31.9883 19.3179 31.9999 22.0333 31.9999C24.7486 31.9999 25.0885 31.9883 26.1552 31.9413C27.2178 31.8945 27.9484 31.7226 28.5813 31.4765C29.9254 30.9568 30.9881 29.8941 31.5078 28.5502C31.7538 27.9133 31.9258 27.1865 31.9726 26.1239C32.0195 25.0572 32.0312 24.7173 32.0312 22.002C32.0312 19.2866 32.0273 18.9467 31.9804 17.8801ZM30.1794 26.0457C30.1364 27.0225 29.9723 27.5499 29.8355 27.9015C29.4995 28.7728 28.808 29.4643 27.9367 29.8004C27.585 29.9372 27.0538 30.1012 26.0808 30.1441C25.026 30.1911 24.7096 30.2027 22.0411 30.2027C19.3725 30.2027 19.0522 30.1911 18.0011 30.1441C17.0244 30.1012 16.4969 29.9372 16.1453 29.8004C15.7117 29.6402 15.317 29.3862 14.9967 29.0541C14.6646 28.7298 14.4106 28.3391 14.2504 27.9055C14.1137 27.5539 13.9496 27.0225 13.9067 26.0497C13.8597 24.9948 13.8481 24.6783 13.8481 22.0097C13.8481 19.3412 13.8597 19.0209 13.9067 17.9699C13.9496 16.9932 14.1137 16.4657 14.2504 16.1141C14.4106 15.6804 14.6646 15.2859 15.0007 14.9654C15.3248 14.6333 15.7155 14.3793 16.1493 14.2192C16.5009 14.0825 17.0323 13.9184 18.0051 13.8754C19.06 13.8285 19.3765 13.8168 22.0449 13.8168C24.7174 13.8168 25.0337 13.8285 26.0848 13.8754C27.0616 13.9184 27.589 14.0825 27.9406 14.2192C28.3742 14.3793 28.7689 14.6333 29.0892 14.9654C29.4213 15.2897 29.6753 15.6804 29.8355 16.1141C29.9723 16.4657 30.1364 16.997 30.1794 17.9699C30.2262 19.0248 30.238 19.3412 30.238 22.0097C30.238 24.6783 30.2262 24.9908 30.1794 26.0457Z" fill="white" />
                    <path d="M22.0371 16.8643C19.2007 16.8643 16.8994 19.1654 16.8994 22.002C16.8994 24.8385 19.2007 27.1397 22.0371 27.1397C24.8737 27.1397 27.1749 24.8385 27.1749 22.002C27.1749 19.1654 24.8737 16.8643 22.0371 16.8643ZM22.0371 25.3347C20.197 25.3347 18.7044 23.8422 18.7044 22.002C18.7044 20.1617 20.197 18.6693 22.0371 18.6693C23.8774 18.6693 25.3698 20.1617 25.3698 22.002C25.3698 23.8422 23.8774 25.3347 22.0371 25.3347Z" fill="white" />
                    <path d="M28.5777 16.6613C28.5777 17.3237 28.0407 17.8608 27.3781 17.8608C26.7158 17.8608 26.1787 17.3237 26.1787 16.6613C26.1787 15.9988 26.7158 15.4619 27.3781 15.4619C28.0407 15.4619 28.5777 15.9988 28.5777 16.6613Z" fill="white" />
                  </g>
                  <defs>
                    <clipPath id="clip0_192_3168">
                      <rect width="20" height="20" fill="white" transform="translate(12 12)" />
                    </clipPath>
                  </defs>
                </svg>

              </Link>
            </div>
          </div>

          {/* Company Section */}
          <div>
            <h3 className="text-lg md:text-xl font-bold mb-4 text-[#956F3E] font-Helvectica">Company</h3>
            <ul className='text-sm font-Inter-Regular leading-6 sm:text-base'>
              <li className="mb-2"><Link to={NAVIGATION.ABOUT_US} className="hover:underline">About us</Link></li>
              <li className="mb-2"><Link to={NAVIGATION.PARTNERS} className="hover:underline">Partners</Link></li>
              <li className="mb-2"><Link to={NAVIGATION.SUBSCRIPTIONS} className="hover:underline">Pricing</Link></li>
              <li className="mb-2"><Link to={NAVIGATION.FAQS} className="hover:underline">FAQ</Link></li>
              <li className="mb-2"><Link to={NAVIGATION.CONTACT_US} className="hover:underline">Contact Us</Link></li>
            </ul>
          </div>

          {/* Legal and Privacy Section */}
          <div>
            <h3 className="text-lg md:text-xl font-Helvectica font-bold mb-4 text-[#956F3E]">Legal and Privacy</h3>
            <ul className='text-sm leading-6 font-Inter-Regular sm:text-base'>
              <li className="mb-2"><Link to={NAVIGATION.TERMS_OF_SERVICE} className="hover:underline">Terms of Service</Link></li>
              <li className="mb-2"><Link to={NAVIGATION.PRIVACY_POLICY} className="hover:underline">Privacy Policy</Link></li>
              <li className="mb-2"><Link to="#" className="hover:underline">Data Protection Information</Link></li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-lg md:text-xl font-bold mb-4 text-[#956F3E] font-Helvectica">Contact</h3>
            <ul className='text-sm leading-6 font-Inter-Regular sm:text-base'>
              <li className="mb-2"><a href="tel:+2342017000555" className="hover:underline ">02017000555</a></li>
              <li className="mb-2"><a href="mailto:contactus@activ8.ng" className="hover:underline">contactus@activ8.ng</a></li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 flex flex-col-reverse md:flex-row justify-between items-center mb-5 gap-y-4 md:gap-y-0 md:space-y-0 md:space-x-[-150px]">
          <div className="flex items-center justify-center flex-1 space-x-2">
            <img
              src={cbn}
              alt="CBN Logo"
              className="w-6 h-6"
            />
            <p className="text-[#151313] text-xs sm:text-sm">
              Licensed by the <span className="font-bold">Central Bank of Nigeria</span>
            </p>
            <span>|</span>
            <img
              src={TheAltBank}
              alt="Activ8 Logo"
              className="w-16 h-6"
            />
          </div>
          <p className="text-xs md:text-r{ight text-center mt-2 text-[#956F3E] md:mt-0">
            {`Copyright© ${currentYear} Activ8`}
          </p>
        </div>


      </div>
    </footer>
  );
};

export default Footer;
