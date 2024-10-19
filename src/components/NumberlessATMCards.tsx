import ATMcards from "../assets/ATMcards.png"

const NumberlessATMCards = () => {
    return (
        <div className="py-24 bg-black text-white flex flex-col items-center justify-center px-4">
            <span className=' bg-[#F5F5F5] inline-block rounded-sm shadow-sm border mb-14 border-gray-200 '>
                <h6 className="text-center text-sm font-HelveticaNeue-Medium text-black p-1 ">I N T R O D U C I N G</h6>
            </span>
            <h2 className="text-4xl md:text-6xl font-bold text-center mb-6">
                Numberless ATM Cards
            </h2>
            <p className="text-center text-sm md:text-md max-w-2xl mb-20">
                Benefit from secure and convenient access to your funds with cards designed for enhanced protection and ease.
            </p>
            <div className="flex justify-center items-center relative w-full max-w-7xl px-4">

                {/* Card */}
                <div className="z-10">
                    <img
                        src={ATMcards}
                        alt="three cards"
                        loading='lazy'
                        className="object-contain"

                    />
                </div>
            </div>
        </div>
    );
};

export default NumberlessATMCards;
