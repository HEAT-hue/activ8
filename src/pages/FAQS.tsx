import FAQComponent from "../components/FAQComponent";
import FAQsLanding from "../components/FAQsLanding";
import Waitlist from "../components/Waitlist";
import { useEffect } from "react";

export default function FAQS() {
  useEffect(() => {
    document.title = 'Activ8 - FAQs';
  }, []);
  return (
    <main className="min-h-screen p-0 overflow-x-hidden ">
     <FAQsLanding/>
     <FAQComponent/>
     <Waitlist/>
    </main>
  );
}
