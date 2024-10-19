import AboutUsLanding from "../components/AboutUsLanding";
import Empowering from "../components/Empowering";
import MissionComponent from "../components/MissionComponent";
import Ready2Activ8 from "../components/Ready2Activ8";
import Testimonials from "../components/Testimonials";
import { useEffect } from "react";


export default function AboutUs() {
  useEffect(() => {
    document.title = 'Activ8 - About Us';
  }, []);
  return (
    <main className="min-h-screen p-0 overflow-x-hidden ">
      <Empowering />
      <AboutUsLanding />
      <MissionComponent />
      <Testimonials />
      <Ready2Activ8 />

    </main>
  );
}
