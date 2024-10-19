/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from "react";
import MpharmaCloud from "../assets/mpharmaCloud.svg";
import BoltCloud from "../assets/BoltCloud.svg";
import HuluCloud from "../assets/HuluCLoud.svg";
import ShowTimeCloud from "../assets/ShowTimeCloud.svg";
import NetflixUSCloud from "../assets/NetflixUSCloud.svg";
import PrimeCloud from "../assets/PrimeVideoCloud.svg";
import SpotifyCloud from "../assets/SpotifyCCloud.svg";
import HBOCloud from "../assets/HBOCloud.svg";
import WasteBancCloud from "../assets/WasteBancCloud.svg";
import PIAVpnCloud from "../assets/PIAVpvnCloud.svg";
import ChatGPTCloud from "../assets/ChatGPTCloud.svg";
import FitnessCloud from "../assets/FitnessCloud.svg";
import GreenLeafCloud from "../assets/GreenLeafCLoud.svg";

type PARTNER_CATEGORY = {
  id: number,
  name: string
}

type PARTNER = {
  id: number,
  name: string,
  image: string,
  tags: number[]
}

enum PARTNER_CATEGORY_ID {
  ALL = 11,
  HEALTH_FITNESS = 12,
  ENTERTAINMENT = 13,
  MUSIC = 14,
  TRAVEL = 15,
  OTHERS = 16
};

const allPartners: PARTNER[] = [
  {
    id: 1,
    name: "Mpharma",
    image: `${MpharmaCloud}`,
    tags: [PARTNER_CATEGORY_ID.ALL, PARTNER_CATEGORY_ID.HEALTH_FITNESS]
  },
  {
    id: 2,
    name: "Bolt",
    image: `${BoltCloud}`,
    tags: [PARTNER_CATEGORY_ID.ALL, PARTNER_CATEGORY_ID.TRAVEL]
  },
  {
    id: 3,
    name: "Hulu",
    image: `${HuluCloud}`,
    tags: [PARTNER_CATEGORY_ID.ALL, PARTNER_CATEGORY_ID.ENTERTAINMENT]
  },
  {
    id: 4,
    name: "ShowTime",
    image: `${ShowTimeCloud}`,
    tags: [PARTNER_CATEGORY_ID.ALL, PARTNER_CATEGORY_ID.ENTERTAINMENT]
  },
  {
    id: 5,
    name: "Netflix US",
    image: `${NetflixUSCloud}`,
    tags: [PARTNER_CATEGORY_ID.ALL, PARTNER_CATEGORY_ID.ENTERTAINMENT]
  },
  {
    id: 6,
    name: "Prime Video",
    image: `${PrimeCloud}`,
    tags: [PARTNER_CATEGORY_ID.ALL, PARTNER_CATEGORY_ID.ENTERTAINMENT]
  },
  {
    id: 7,
    name: "Spotify",
    image: `${SpotifyCloud}`,
    tags: [PARTNER_CATEGORY_ID.ALL, PARTNER_CATEGORY_ID.MUSIC]
  },
  {
    id: 8,
    name: "HBO Max",
    image: `${HBOCloud}`,
    tags: [PARTNER_CATEGORY_ID.ALL, PARTNER_CATEGORY_ID.ENTERTAINMENT]
  },
  {
    id: 9,
    name: "Waste Banc",
    image: `${WasteBancCloud}`,
    tags: [PARTNER_CATEGORY_ID.ALL, PARTNER_CATEGORY_ID.OTHERS]
  },
  {
    id: 10,
    name: "PIA VPN",
    image: `${PIAVpnCloud}`,
    tags: [PARTNER_CATEGORY_ID.ALL, PARTNER_CATEGORY_ID.OTHERS]
  },
  {
    id: 11,
    name: "Chat GPT",
    image: `${ChatGPTCloud}`,
    tags: [PARTNER_CATEGORY_ID.ALL, PARTNER_CATEGORY_ID.OTHERS]
  },
  {
    id: 12,
    name: "iFitness",
    image: `${FitnessCloud}`,
    tags: [PARTNER_CATEGORY_ID.ALL, PARTNER_CATEGORY_ID.HEALTH_FITNESS]
  },
  {
    id: 13,
    name: "Greenleaf Gym",
    image: `${GreenLeafCloud}`,
    tags: [PARTNER_CATEGORY_ID.ALL, PARTNER_CATEGORY_ID.HEALTH_FITNESS]
  },
]

const categories: PARTNER_CATEGORY[] = [
  {
    id: PARTNER_CATEGORY_ID.ALL,
    name: "All",
  },
  {
    id: PARTNER_CATEGORY_ID.HEALTH_FITNESS,
    name: "Health & Fitness",
  },
  {
    id: PARTNER_CATEGORY_ID.ENTERTAINMENT,
    name: "Entertainment",
  },
  {
    id: PARTNER_CATEGORY_ID.MUSIC,
    name: "Music",
  },
  {
    id: PARTNER_CATEGORY_ID.TRAVEL,
    name: "Travel",
  },
  {
    id: PARTNER_CATEGORY_ID.OTHERS,
    name: "Others",
  },
];

const PartnersCategories = () => {
  const [selectedCategory, setSelectedCategory] = useState<PARTNER_CATEGORY_ID>(PARTNER_CATEGORY_ID.ALL);
  const [showMore, setShowMore] = useState(false);
  const [itemsToShow, setItemsToShow] = useState(9);
  const [splitCategories, setSplitCategories] = useState<PARTNER_CATEGORY[][]>([]);

  useEffect(() => {
    const updateItemsToShow = () => {
      setItemsToShow(window.innerWidth < 768 ? 10 : 9);
    };

    updateItemsToShow();
    window.addEventListener("resize", updateItemsToShow);

    return () => window.removeEventListener("resize", updateItemsToShow);
  }, []);

  useEffect(() => {
    // Custom function to split the categories into rows
    const splitIntoRows = (items: any, maxItemsPerRow: any) => {
      const rows = [];
      for (let i = 0; i < items.length; i += maxItemsPerRow) {
        rows.push(items.slice(i, i + maxItemsPerRow));
      }
      return rows;
    };

    // Set the max items per row based on the screen width
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      const maxItemsPerRow = screenWidth >= 1024 ? 6 : screenWidth >= 768 ? 6 : screenWidth >= 640 ? 3 : 3; // Adjust as needed
      setSplitCategories(splitIntoRows(categories, maxItemsPerRow));
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  const filteredItems = allPartners.filter((item: PARTNER) => {
    return item.tags.includes(selectedCategory)
  })


  return (
    <div className="w-full bg-[#f7f7f7] relative z-10">
      <div className="max-w-7xl mx-auto  py-14 md:py-24 px-4 sm:px-6 lg:px-8">
        {/* Categories Navbar */}
        <div className="flex flex-col items-center space-y-4 mb-24">
          {splitCategories.map((row: PARTNER_CATEGORY[], index: number) => (
            <div
              key={index}
              className="bg-white rounded-xl px-6 py-4 flex justify-center gap-x-4"
            >
              {row.map((category: PARTNER_CATEGORY) => (
                <button
                  key={category.id}
                  onClick={() => {
                    setSelectedCategory(category.id);
                    setShowMore(false); // Reset "Show More" when the category changes
                  }}
                  className={`hover:text-[#956F3E] text-[0.78rem] px-2 sm:px-8 md:px-4 lg:px-8 md:text-base lg:text-md font-medium transition-colors duration-300
                  ${selectedCategory === category.id ? "text-[#956F3E]" : ""}
                `}

                >
                  {category.name}
                </button>
              ))}
            </div>
          ))}
        </div>

        {/* Items Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-10 md:gap-20">
          {filteredItems.slice(0, itemsToShow).map((item) => (
            <div key={item.id} className="flex flex-col items-center">
              <img src={item.image} alt={item.name} className="sm:w-28 lg:w-36 w-20 object-cover mb-2" />
              <p className="text-center text-[#956F3E] text-sm lg:text-lg font-bold">{item.name}</p>
            </div>
          ))}
        </div>

        {/* Extra Items with Transition */}
        <div
          className={`overflow-hidden transition-max-height duration-500 ease-in-out ${showMore ? "max-h-[1000px]" : "max-h-0"} mt-[4rem]`}
        >
          <div className="grid grid-cols-2 md:grid-cols-3 gap-10 md:gap-20">
            {filteredItems.slice(itemsToShow).map((item) => (
              <div key={item.id} className="flex flex-col items-center">
                <img src={item.image} alt={item.name} className=" sm:w-28 lg:w-36 w-20 object-cover mb-2" />
                <p className="text-center text-[#956F3E] text-sm font-medium">{item.name}</p>
              </div>
            ))}
          </div>
        </div>

        {/* See More / Show Less Button */}
        {filteredItems.length > itemsToShow && (
          <div className="flex justify-center mt-8">
            <button onClick={toggleShowMore} className="bg-[#212121] text-white px-16 py-2 rounded-md">
              {showMore ? "Show Less" : "See More"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default PartnersCategories;
