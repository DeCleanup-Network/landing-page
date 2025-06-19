import WhatIsDeCleanupNetwork from "@/components/WhatIsDecleanUp/WhatIsDeCleanupNetwork";
import Hero from "@/components/HeroSection/Hero";
import TokenizeImpactSection from "@/components/HowToTokonizeImpact/TokenizeImpactSection";
import NetworkRoadmapSection from "@/components/NetworkRoadmapSection/NetworkRoadmapSection";
import ProblemAndSolution from "@/components/ProblemAndSolution/ProblemAndSolution";
import CommunityImpact from "@/components/CommunityImpact/CommunityImpact";

const Page = () => {
  return (
    <main className="flex flex-col text-center uppercase">
      <Hero />
      <WhatIsDeCleanupNetwork />
      <CommunityImpact />
      <ProblemAndSolution />
      <NetworkRoadmapSection />
      <TokenizeImpactSection />
    </main>
  );
};

export default Page;
