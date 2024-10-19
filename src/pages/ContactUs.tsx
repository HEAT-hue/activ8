import ContactForm from "../components/ContactForm";
import HearFromYou from "../components/HearFromYou";
import Waitlist from "../components/Waitlist";
import { useEffect } from "react";

export default function ContactUs() {
  useEffect(() => {
    document.title = 'Activ8 - Contact Us';
  }, []);
  return (
    <main className="min-h-screen p-0 overflow-x-hidden ">
      <HearFromYou/>
      <ContactForm/>
      <Waitlist/>
    </main>
  );
}
