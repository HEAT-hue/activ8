
import { useState } from 'react';
import { Select } from 'antd';
import '../styles/CustomSelect.css';
import ForwardArrow from "../assets/ForwardArrow.svg";


const { Option } = Select;

const sections = [
    {
        name: 'General Information',
        content: [
            {
                heading: 'How does Activ8 benefit Users?',
                text: 'Activ8 provides a comprehensive package of essential services at a competitive price, enhancing users\' lifestyle and saving them money.'
            },
            {
                heading: 'How do I find out about new features or services added to Activ8?',
                text: 'Check the app\'s notification section, subscribe to the newsletter, or visit the official website for updates.'
            },
            {
                heading: 'How do I provide feedback on my Activ8 experience?',
                text: 'Use the feedback option in the app\'s support section to share your thoughts and suggestions.'
            },
            {
                heading: 'Is there a referral program for Activ8?',
                text: 'Yes, refer friends using your unique referral code. Both you and your friends may receive benefits upon successful subscription.'
            },
            // Add more items if neccessary
        ],
    },
    {
        name: 'Account and Profile Management',
        content: [
            {
                heading: 'How do I create an Activ8 account',
                text: 'Download the Activ8 app, select the sign-up option, provide the required information, verify your email with the OTP, and receive an account creation success message.'
            },
            {
                heading: ' What information is required to create an Activ8 account?',
                text: 'To create an Activ8 account, you\'ll need to provide your first name, last name, date of birth, gender, phone number (associated with your BVN), email address, and password. You can also include your middle name and referral code if available. Additionally, you must agree to the terms of service and privacy policy.'
            },
            {
                heading: 'How do I log into my Activ8 account?',
                text: 'Open the Activ8 app, choose the login option, enter your registered email address and password, and click sign in. You can also use facial ID, fingerprint, Gmail, or Apple iOS for login.'
            },
            {
                heading: 'What should I do if I forget my password?',
                text: ' Click on the "Forgot Password" option on the login page, enter your registered email address, and follow the instructions to reset your password.'
            },
            {
                heading: 'How can I update my profile information?',
                text: ' Navigate to the profile settings in the app, update your profile details such as date of birth, email, residence, and gender, and save the changes. Please note that you cannot update your name and phone number, as these are linked to your BVN. To change any details on your BVN, you need to visit your bank.'
            },
            {
                heading: 'Can I change my first or last name on my profile?',
                text: ' No, the first and last names synced with your BVN cannot be edited.'
            },
            {
                heading: 'How do I enable Biometric authentication?',
                text: ' Go to the security settings in your profile and enable biometric authentication (facial ID/fingerprint).'
            },
            {
                heading: 'What do I do if I can’t log into my account?',
                text: 'Ensure you are using the correct email and password. If you still can’t log in, try resetting your password or contact customer support.'
            },
            {
                heading: 'How do I change my account password?',
                text: 'Go to the security settings in your profile, select "Change Password," enter your current password, new password, and confirm the new password.'
            },
            // Add the content here
        ],
    },
    {
        name: 'Wallet and Transactions',
        content: [
            {
                heading: 'How do I add funds to my Activ8 wallet?',
                text: 'Link your debit card to the wallet and follow the prompts to add funds.'
            },
            {
                heading: 'How do I transfer funds from my Activ8 wallet?',
                text: 'Go to the wallet section, select the transfer option, enter the recipient details, and complete the transfer by inputting the PIN.'
            },
            {
                heading: 'How do I withdraw funds from my Activ8 wallet?',
                text: 'Select the withdraw option in the wallet section, link a bank account, and follow the prompts to withdraw funds.'
            },
            {
                heading: 'What should I do if my transaction fails?',
                text: 'Report the issue through the app\'s transaction details section and contact customer support for assistance.'
            },
            {
                heading: 'How do I view my transaction history?',
                text: 'Go to the wallet section, select "Transaction History," and filter transactions by date, amount, or type.'
            },
            {
                heading: 'How do I freeze my Activ8 debit card?',
                text: 'In the wallet section, select "Freeze Card," input your PIN, and follow the prompts to temporarily suspend card usage.'
            },
            {
                heading: 'How do I unfreeze my Activ8 debit card?',
                text: 'Select "Unfreeze Card" in the wallet section, input your PIN, and follow the prompts to reactivate the card.'
            },
            {
                heading: 'How do I request a new debit card?',
                text: 'Go to the wallet section, select "Request New Card," input your PIN, and provide the required details for card delivery.'
            },
            {
                heading: 'What security features does the Activ8 wallet have?',
                text: 'The Activ8 wallet includes real-time transaction alerts, transaction history, and robust security measures like two-factor authentication.'
            }
        ],

    },
    {
        name: 'Secuirity and Support',
        content: [
            {
                heading: 'What should I do if I suspect unauthorized access to my account?',
                text: 'Immediately change your password and contact customer support for further assistance.'
            },
            {
                heading: 'Use the "Report an Issue" option in the app\'s security settings or contact customer support directly?',
                text: 'Use the "Report an Issue" option in the app\'s security settings or contact customer support directly.'
            },
            {
                heading: 'How do I set up security questions for my account?',
                text: 'Upon first login, select and answer three security questions from the provided list.'
            },
            {
                heading: 'How do I reset my transaction PIN?',
                text: 'Go to the security settings in your profile, select "Reset PIN," and answer a security question.'
            },
            {
                heading: 'How can I contact customer support?',
                text: 'Use the live chat feature in the app, call the support phone number, or send an email to the support address provided in the app.'
            },
            {
                heading: 'What should I do if I forget the answers to my security questions?',
                text: 'Contact customer support for assistance with account recovery.'
            },
            {
                heading: 'How do I update my biometric authentication settings?',
                text: 'Go to the security settings in your profile and update your biometric authentication preferences.'
            },
            {
                heading: 'How do I view the terms and conditions of Activ8?',
                text: 'Go to the legal section in the app\'s settings and select "Terms & Conditions."'
            },
            {
                heading: 'How do I review the privacy policy of Activ8?',
                text: 'Go to the legal section in the app\'s settings and select "Privacy Policy."'
            }
        ],

    },
    {
        name: 'Troubleshooting',
        content: [
            {
                heading: 'What should I do if the app crashes or freezes?',
                text: 'Restart the app, clear the cache, and ensure you are using the latest version. Contact support if the problem continues.'
            },
            {
                heading: 'How do I update the Activ8 app?',
                text: 'Visit your device\'s app store, search for Activ8, and select "Update" if a new version is available.'
            },
            {
                heading: 'How do I clear the app cache?',
                text: 'Go to your device settings, find the Activ8 app, and select "Clear Cache."'
            },
            {
                heading: 'How do I check if the Activ8 servers are down?',
                text: 'Check the Activ8 status page or the app\'s notification section for any server status updates.'
            }

        ],


    },
    {
        name: 'Service Activation and Usage',
        content: [
            {
                heading: 'How do I activate my Axa Mansard health consultation benefit?',
                text: 'After subscription activation, follow the instructions provided in the app to access the Axa Mansard website, enter the coupon code, and schedule a consultation.'
            },
            {
                heading: 'How do I activate my CloudClinic consultation and pharmacy access?',
                text: 'Register or log in to CloudClinic\'s platform using the provided credentials or activation link, verify your details, and select a preferred pharmacy.'
            },
            {
                heading: 'How do I set up my Prime Video account?',
                text: 'Create or log in to a Prime Video account using the activation link provided in the app, enter the activation code, and start streaming.'
            },
            {
                heading: 'How do I activate my MTN data plan?',
                text: 'If you have an MTN number, follow the prompts in the app to activate the data plan. If not, provide an MTN number and indicate if it’s for yourself or another person.'
            },
            {
                heading: 'How do I access Alt Travel benefits?',
                text: 'Go to the Alt Travel section in the app, generate a discount coupon, and follow the instructions provided to subscribe to Alt Travel\'s platform.'
            }
        ],



    },
    {
        name: 'Technical Support',
        content: [
            {
                heading: ' How do I report a bug in the Activ8 app? ',
                text: 'Use the "Report a Bug" feature in the app\'s support section, provide a detailed description, and submit it for review.'
            }
        ],



    },
    // Add more sections as needed
];

const FAQComponent = () => {
    const [selectedSection, setSelectedSection] = useState(sections[0]);

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleSelectChange = (value: any) => {
        const section = sections.find(section => section.name === value);
        if (section)
            setSelectedSection(section);
    };

    const contentLength = selectedSection.content.length;

    return (
        <div className="px-2 sm:px-6 lg:px-20 xl:px-24 py-14 bg-PrimaryColor-100">
            <div className='mx-auto max-w-[1600px]'>
                <div className="mb-14 flex justify-center">
                    <Select
                        className="custom-select w-64 lg:w-80 h-12"
                        value={selectedSection.name}
                        onChange={handleSelectChange}
                        dropdownClassName="custom-dropdown"
                    >
                        {sections.map((section) => (
                            <Option key={section.name} value={section.name}>
                                {section.name}
                            </Option>
                        ))}
                    </Select>
                </div>

                <div
                    className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-10`}
                >
                    {selectedSection.content.map((item, index) => {
                        return (
                            <div
                                key={index}
                                className={`p-4 ${contentLength === 1 ? 'lg:col-span-3' : ''}`}
                            >
                                <h3 className="font-semibold mb-2 text-[#120D07]">{item.heading}</h3>
                                <p className="text-sm font-sans text-[#4E4E41] leading-6">
                                    {item.text}
                                </p>
                            </div>
                        );
                    })}
                </div>

                {/* Still Have Questions Bar */}
                <div className="bg-gray-100 p-7 rounded-md flex flex-col lg:flex-row lg:items-center lg:justify-between mt-24">
                    <div>
                        <h3 className="text-md font-bold text-[#956F3E] mb-1">Still have questions?</h3>
                        <p className="text-gray-700 text-md">Can’t find the answer you’re looking for? Please chat to our friendly team.</p>
                    </div>
                    <div className="mt-4 lg:mt-0 flex justify-center lg:justify-start">
                        <button className="sm:text-[1rem] text-xs flex items-center justify-center px-5 text-PrimaryColor-50 py-4 rounded-md bg-PrimaryColor-500">
                            Get in touch
                            <img
                                src={ForwardArrow}
                                alt="Forward Arrow"
                                className="w-4 h-4 ml-2"
                            />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FAQComponent;
