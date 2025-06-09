import WhatIsDeCleanupNetwork from "@/components/WhatIsDecleanUp/WhatIsDeCleanupNetwork";
import Hero from "@/components/HeroSection/Hero";
import TokenizeImpactSection from "@/components/HowToTokonizeImpact/TokenizeImpactSection";
import NetworkRoadmapSection from "@/components/NetworkRoadmapSection/NetworkRoadmapSection"

const Page = () => {
  return (
    <main className="flex flex-col text-center uppercase">
      <Hero />
      <WhatIsDeCleanupNetwork />
       <NetworkRoadmapSection/>
      <TokenizeImpactSection />
    </main>
  );
};

export default Page;