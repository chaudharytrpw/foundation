import Image from "next/image";
import Hero from "./components/Hero";
import ImpactSection from "./components/ImpactSection";
import MissionVision from "./components/MissionVision";
import GoalsSection from "./components/GoalsSection";
import TestimonialSection from "./components/TestimonialSection";
import FAQSection from "./components/FAQSection";
import PremiumSlider from "./components/PremiumSlider";
import SmallCardSlider from "./components/SmallCardSlider";

export default function Home() {
  return (
   <>

   <Hero/>
   <PremiumSlider/>
   <ImpactSection/>
   <MissionVision/>
   <GoalsSection/>
   <TestimonialSection/>
   <FAQSection/>
   <SmallCardSlider/>
   </>
  );
}
