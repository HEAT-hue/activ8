import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import classNames from 'classnames';

// Import images
import Activ8Logo from '../assets/Activ8Logo.svg';
import ForwardArrow from '../assets/ForwardArrow.svg';
import SandwitchIcon from '../assets/Sandwitch.svg';
import CloseIcon from '../assets/Close.svg';
import { NAVIGATION } from '../lib/definition';

// Navigation links
const navigation = [
  { name: 'Home', href: NAVIGATION.HOME },
  { name: 'About Us', href: NAVIGATION.ABOUT_US },
  { name: 'Partners', href: NAVIGATION.PARTNERS },
  { name: 'Subscription', href: NAVIGATION.SUBSCRIPTIONS },
  { name: 'FAQs', href: NAVIGATION.FAQS },
  { name: 'Contact Us', href: NAVIGATION.CONTACT_US },
];

export default function Navbar() {
  const location = useLocation(); // React Router hook to get current path
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Check if the link is active
  const isActiveLink = (href: string) => {
    if (href === '/') {
      return location.pathname === href; // Exact match for Home
    }
    return location.pathname.startsWith(href); // Match other paths
  };

  return (
    <nav className="lg:bg-PrimaryColor-950 bg-[#f3f3f3] fixed w-full z-20">
      <div className="mx-auto max-w-[1700px] px-2 sm:px-6 lg:px-8 bg-[#F5EAD6] lg:bg-PrimaryColor-950">
        <div className="relative flex h-16 items-center">

          {/* Logo for larger screens */}
          <div className="hidden lg:flex items-center justify-start mr-[5vw]">
            <Link to="/">
              <img src={Activ8Logo} alt="Activ8 Logo" />
            </Link>
          </div>

          {/* Desktop navigation */}
          <div className="flex-grow justify-between items-center hidden lg:flex">
            <div className="flex w-full justify-between">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={classNames({
                    'font-NTR-Regular text-sm text-[#956F3E]': isActiveLink(item.href),
                    'font-NTR-Regular text-sm text-PrimaryColor-50 hover:text-[#956F3E] transition-all duration-300': !isActiveLink(item.href),
                  })}
                  aria-current={isActiveLink(item.href) ? 'page' : undefined}
                >
                  {item.name}
                </Link>
              ))}
            </div>
            <button className="text-PrimaryColor-50 text-xs w-32 h-10 items-center rounded-md bg-PrimaryColor-500 ml-[4vw] flex whitespace-nowrap justify-center">
              Sign Up
              <img src={ForwardArrow} alt="Forward Arrow" className="ml-3" />
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center justify-between w-full bg-[#F5EAD6]">
            <Link to="/">
              <img src={Activ8Logo} alt="Activ8 Logo" />
            </Link>
            <button onClick={toggleMenu} className="focus:outline-none">
              <img src={isOpen ? CloseIcon : SandwitchIcon} alt="Menu Icon" className="mr-3" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile navigation */}
      <div
        className={`lg:hidden fixed top-0 right-0 w-[300px] min-h-[360px] rounded-lg mt-2 mr-2 py-10 px-4 bg-white shadow-lg transform ${isOpen ? 'translate-x-0' : 'translate-x-[103%]'
          } transition-transform duration-300 ease-in-out z-50`}
      >
        <div className="relative max-h-screen p-5">
          <button onClick={toggleMenu} className="absolute top-2 right-2">
            <img src={CloseIcon} alt="Close Icon" />
          </button>

          <div className="flex flex-col space-y-7">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={classNames({
                  'font-NTR-Regular text-sm text-[#956F3E]': isActiveLink(item.href),
                  'font-NTR-Regular text-sm text-gray-800 hover:text-[#956F3E] transition-all duration-300': !isActiveLink(item.href),
                })}
                aria-current={isActiveLink(item.href) ? 'page' : undefined}
                onClick={() => setIsOpen(false)} // Close menu after clicking
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>

        <div className="pt-4 flex justify-center">
          <button className="text-white bg-[#956F3E] mx-auto rounded-md px-6 py-3 text-sm">
            Sign Up
          </button>
        </div>
      </div>

      {/* Overlay for mobile menu */}
      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black opacity-50"
          onClick={toggleMenu}
        ></div>
      )}
    </nav>
  );
}
