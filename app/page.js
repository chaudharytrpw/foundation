import Image from "next/image";
import Hero from "./components/Hero";
import ImpactSection from "./components/ImpactSection";
import MissionVision from "./components/MissionVision";
import GoalsSection from "./components/GoalsSection";
import TestimonialSection from "./components/TestimonialSection";
import FAQSection from "./components/FAQSection";

export default function Home() {
  return (
   <>
   <Hero/>
   <ImpactSection/>
   <MissionVision/>
   <GoalsSection/>
   <TestimonialSection/>
   <FAQSection/>
   </>
  );
}
