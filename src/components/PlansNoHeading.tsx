import React from "react";
import { plans } from "../lib/data";

interface PlanCardProp {
  plan: string,
  price: string
  features: string[]
}
const PlanCard: React.FC<PlanCardProp> = ({ plan, price, features }) => {
  return (
    <div className="border rounded-2xl lg:mt-0 mt-10 p-6 shadow-md flex flex-col justify-between lg:w-[48%] w-full min-h-[400px] bg-white">
      <div>
        <div className="w-full border-b-[1.5px] border-b-[#eaecf0] mb-4">
          <div className="flex flex-col sm:flex-row justify-between items-start gap-y-6 sm:gap-y-0 sm:items-center mb-4">
            <h3 className="text-lg font-semibold self-start text-[#956F3E]">{plan}</h3>
            <p className="sm:block flex text-xl sm:text-4xl font-bold text-[#956F3E] font-he">
              {price} <span className="text-sm self-center sm:text-base font-normal text-[#48361E] ml-1">monthly</span>
            </p>
          </div>
        </div>

        <h4 className="text-md font-semibold mb-4">FEATURES</h4>
        <ul
          className="list-none grid gap-4
            grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2
            2xl:grid-cols-2"
          style={{
            gridAutoFlow: 'row',
          }}
        >
          {features.map((feature, index) => (
            <li key={index} className="flex items-center self-start text-[#475467]">
              <span className="mr-2 self-start">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="24" height="24" rx="12" fill="#DCFAE6" />
                  <path fillRule="evenodd" clipRule="evenodd" d="M17.0965 7.39016L9.9365 14.3002L8.0365 12.2702C7.6865 11.9402 7.1365 11.9202 6.7365 12.2002C6.3465 12.4902 6.2365 13.0002 6.4765 13.4102L8.7265 17.0702C8.9465 17.4102 9.3265 17.6202 9.7565 17.6202C10.1665 17.6202 10.5565 17.4102 10.7765 17.0702C11.1365 16.6002 18.0065 8.41016 18.0065 8.41016C18.9065 7.49016 17.8165 6.68016 17.0965 7.38016V7.39016Z" fill="#17B26A" />
                </svg>
              </span>
              {feature}
            </li>
          ))}
        </ul>
      </div>
      <div className="w-full mt-4 border-t-[1.5px] border-t-[#eaecf0] p-2 pt-6">
        <button className="w-full h-auto bg-black text-white rounded-lg py-3 px-4">
          Get started
        </button>
      </div>
    </div>
  );
};

const PlansNoHeading = () => {

  return (
    <section className="p-4  pt-14 sm:px-10 lg:py-32 lg:px-14 xl:px-32 pb-14 bg-[#f3f3f3]">
      <div className="container mx-auto">

        <div className="flex flex-col lg:flex-row justify-between">
          {plans.map((plan, index) => (
            <PlanCard
              key={index}
              plan={plan.plan}
              price={plan.price}
              features={plan.features}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlansNoHeading;
