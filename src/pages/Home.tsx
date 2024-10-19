import Activ8Advantages from "../components/Activ8Advantages";
import AnimatedSlider from "../components/AnimatedSlider";
import CountdownComponent from "../components/CountdownComponent";
import NumberlessATMCards from "../components/NumberlessATMCards";
import { useEffect } from "react";


import HowItWorks from "../components/HowItWorks";
import Landing from "../components/Landing";
import Plans from "../components/Plans";
import Ready2Activ8 from "../components/Ready2Activ8";

export default function Home() {
  useEffect(() => {
    document.title = 'Activ8 - Home';
  }, []);
  return (
    
    <main className="min-h-screen p-0 overflow-x-hidden ">
      <Landing/>
      <AnimatedSlider/>
      <Activ8Advantages/>
      <NumberlessATMCards/>
      <HowItWorks/>
      <Plans/>
      <Ready2Activ8/>
      <CountdownComponent/>
    </main>
  );
}
