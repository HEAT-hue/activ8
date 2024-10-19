import FAQ from "../components/FAQ";
import PlansNoHeading from "../components/PlansNoHeading";
import PlansThatFit from "../components/PlansThatFit";
import { useEffect } from "react";

export default function Subscription() {
  useEffect(() => {
    document.title = 'Activ8 - Subscription';
  }, []);
  return (
    <main className="min-h-screen p-0 overflow-x-hidden ">
      <PlansThatFit/>
      <PlansNoHeading/>
      <FAQ/>
    </main>
  );
}
