import Image from "next/image";
import Hero from "./components/Hero";
import ImpactSection from "./components/ImpactSection";
import MissionVision from "./components/MissionVision";
import GoalsSection from "./components/GoalsSection";
import TestimonialSection from "./components/TestimonialSection";
import FAQSection from "./components/FAQSection";
import PremiumSlider from "./components/PremiumSlider";
import SmallCardSlider from "./components/SmallCardSlider";
import AccreditationSlider from "./components/AccreditationSlider";
import OurImpact from "./components/OurImpact";
import OurProgrammes from "./components/OurProgrammes";
import EventSection from "./components/EventSection";

export default function Home() {
  return (
   <>

   <Hero/>
  
   <PremiumSlider/>

     <EventSection/>
   {/* <ImpactSection/> */}
   <MissionVision/>
   <GoalsSection/>
   <TestimonialSection/>
   <AccreditationSlider/>
   <SmallCardSlider/>

   <OurProgrammes/>
   <FAQSection/>
   <OurImpact/>
   </>
  );
}
