
import Activ8Advantages from "../components/Activ8Advantages";
import AnimatedSlider from "../components/AnimatedSlider";
import CountdownComponent from "../components/CountdownComponent";
import HowItWorks from "../components/HowItWorks";
import Landing from "../components/Landing";
import NumberlessATMCards from "../components/NumberlessATMCards";
import Plans from "../components/Plans";
import Ready2Activ8 from "../components/Ready2Activ8";

export default function Home() {
  return (

    <main className="min-h-screen p-0 overflow-x-hidden ">
      <Landing />
      <AnimatedSlider />
      <Activ8Advantages />
      <NumberlessATMCards />
      <HowItWorks />
      <Plans />
      <Ready2Activ8 />
      <CountdownComponent />
    </main>
  );
}
