import WhatIsDeCleanupNetwork from "@/components/whatis-decleanup";
import Hero from "@/components/HeroSection/Hero";
import TokenizeImpactSection from "@/components/HowToTokonizeImpact/TokenizeImpactSection";

const Page = () => {
  return (
    <main className="flex flex-col text-center uppercase">
      <Hero />
      <WhatIsDeCleanupNetwork />
      <TokenizeImpactSection />
    </main>
  );
};

export default Page;