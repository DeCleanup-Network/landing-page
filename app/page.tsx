import Hero from "@/components/HeroSection/Hero";
import TokenizeImpactSection from "@/components/HowToTokonizeImpact/TokenizeImpactSection";

const page = () => {
  return (
      <main className="flex flex-col text-center uppercase">
        <Hero />
        <TokenizeImpactSection />
      </main> 
  )
}

export default page
