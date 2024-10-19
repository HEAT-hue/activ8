import WavyBackgroundImage from "../assets/WavyBackgroundImage.svg";
import Image1 from "../assets/netflix.svg";
import Image2 from "../assets/Bolt.svg";
import Image3 from "../assets/ChatGPT.svg";
import Image4 from "../assets/Spotify.svg";
import Image5 from "../assets/FLower.svg";
import Image6 from "../assets/Hulu.svg";
import Image7 from "../assets/Primevideo.svg";
import Image8 from "../assets/WasteBanc.svg";
import Image9 from "../assets/Greenleaf.svg";
import Image10 from "../assets/VPN.svg";
import Image11 from "../assets/Fitness.svg";
import Image12 from "../assets/HBO.svg";
import Image13 from "../assets/SHOWTIME.svg";
import "../styles/AnimatedSlider.css";

const ImageSlider = [
    { src: Image1, alt: "Netflix" },
    { src: Image2, alt: "Bolt" },
    { src: Image3, alt: "Chat GPT" },
    { src: Image4, alt: "Spotify" },
    { src: Image5, alt: "Flower" },
    { src: Image6, alt: "Hulu" },
    { src: Image7, alt: "Prime Video" },
    { src: Image8, alt: "Waste Bank" },
    { src: Image9, alt: "Green Leaf" },
    { src: Image10, alt: "VPN" },
    { src: Image11, alt: "iFitness" },
    { src: Image12, alt: "HBO max" },
    { src: Image13, alt: "Show Time" }
];

export default function AnimatedSlider() {
    return (
        <section>
            <div className="relative w-full min-h-[100px] h-[14vh] overflow-hidden">
                {/* Background Wave Image */}
                <div className="absolute inset-0">
                    <img
                        src={WavyBackgroundImage}
                        alt="Background"
                        className="w-full h-full object-cover" // Ensure the background covers the area
                    />
                </div>

                <div className="slider-container overflow-hidden whitespace-nowrap relative z-10"> {/* z-10 to ensure the slider is above the background */}
                    <div className="marquee">
                        {ImageSlider.concat(ImageSlider).map((image, index) => (
                            <div key={index} className="inline-block mx-8 flex items-center justify-center min-h-[60px] h-full">
                                <img src={image.src} alt={image.alt} className="h-auto sliding-images max-h-[8vw] min-h-[60px] min-w-[60px] mx-auto" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
