
import { useState } from 'react';
import PlusIcon from '../assets/PlusIcon.svg';
import MinusIcon from '../assets/MinusIcon.svg';

interface FAQItemProp {
  question: string,
  answer: string
}

const FAQItem: React.FC<FAQItemProp> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleFAQ = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border-b border-brown-300 py-4">
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={toggleFAQ}
      >
        <h3 className="text-md font-semibold text-[#BF8136]">{question}</h3>
        <img
          src={isOpen ? MinusIcon : PlusIcon}
          alt="Toggle icon"
          width={24}
          height={24}
        />
      </div>
      <div
        className={`overflow-hidden transition-max-height duration-300 ease-in-out ${isOpen ? 'max-h-40' : 'max-h-0'}`}
      >
        <p className="mt-2 text-brown-600 max-w-[90%] leading-[1.5rem] md:leading-[2.2rem]">{answer}</p>
      </div>
    </div>
  );
};

const FAQ = () => {
  const faqs = [
    {
      question: 'How do I subscribe to a package on Activ8?',
      answer: 'Choose a plan (Basic or Standard), click the "Subscribe" button, pay with your debit card, and wait for the confirmation message.',
    },
    {
      question: 'How long does it take to activate my subscription?',
      answer: ' Activation typically takes 24-48 hours.',
    },
    {
      question: 'What happens if my subscription fails?',
      answer: 'You will receive a notification to retry the payment. If the issue persists, contact customer support.',
    },
    {
      question: 'How do I cancel my subscription?',
      answer: 'Go to the subscription settings in the app, select the subscription you wish to cancel, and follow the prompts to complete the cancellation. Please note that you cannot cancel an ongoing subscription. Once a user pays for it, it is automatically synced, and if the user wishes to cancel, they will not be on any subscription.',
    },
    {
      question: 'Will I receive a refund if I cancel my subscription?',
      answer: 'Refunds are subject to the terms and conditions of your subscription plan. Please review the terms or contact customer support for more information.',
    },
    {
      question: 'Do I have to subscribe for a plan to enjoy the services on Activ8?',
      answer: 'No, you can pay for services individually at a discounted price.',
    },
  ];

  return (
    <div className="flex flex-col lg:flex-row w-full my-12 md:max-w-5xl xl:max-w-[1300px] mx-auto p-6 md:p-8">
      {/* Left Side: Support FAQs Text */}
      <div className="lg:w-1/3 pr-0 lg:pr-8 mb-6 lg:mb-0">
        <h2 className="text-3xl font-bold text-[#956F3E]"><span className='text-base sm:text-sm text-[#48361E] font-normal'>Support</span> <br /> FAQs</h2>
      </div>

      {/* Right Side: FAQ Items */}
      <div className="lg:w-2/3 flex flex-col text-sm sm:text-base space-y-4">
        {faqs.map((faq, index) => (
          <FAQItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </div>
  );
};

export default FAQ;
