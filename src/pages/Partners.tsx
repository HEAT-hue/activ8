import MeetOurPartners from "../components/MeetOurPartners";
import PartnerCTA from "../components/PartnerCTA";
import PartnersCategories from "../components/PartnersCategories";
import PartnershipSection from "../components/PartnershipSection";
import { useEffect } from "react";

export default function Partners() {
  useEffect(() => {
    document.title = 'Activ8 - Partners';
  }, []);
  return (
    <main className="min-h-screen p-0 overflow-x-hidden">
      <MeetOurPartners />
      <PartnersCategories />
      <PartnershipSection />
      <PartnerCTA />
    </main>
  );
}
