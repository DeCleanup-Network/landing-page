import React from "react";

interface ProblemSectionProps {
  hideHeader?: boolean;
}

function ProblemSection({ hideHeader = false }: ProblemSectionProps) {
  const problems = [
    {
      title: "LACK OF INCENTIVES FOR CLEANUP ACTIONS",
    },
    {
      title: "LIMITS FOR RECOGNITION AND QUANTIFICATION OF PERSONAL IMPACT",
    },
    {
      title: "WEAK GLOBAL COORDINATION",
    },
  ];

  return (
    <div>
      {!hideHeader && (
        <div className="mb-6">
          <h2 className="text-3xl md:text-4xl font-black text-black px-2 py-1 inline-block">
            THE PROBLEM
          </h2>
        </div>
      )}

      <div className="space-y-4">
        {problems.map((problem, index) => (
          <div
            key={index}
            className=" p-4 min-h-[120px] md:min-h-[200px] lg:min-h-[280px] leading-6 xl:min-h-[320px] flex bg-[#4FA02A]"
          >
            <h3
              className="text-lg md:text-xl lg:text-3xl font-bold text-black leading-relaxed"
              style={{ fontFamily: "Bebas Neue, sans-serif" }}
            >
              {problem.title}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
}

interface SolutionSectionProps {
  hideHeader?: boolean;
}

function SolutionSection({ hideHeader = false }: SolutionSectionProps) {
  const solutions = [
    {
      title: "TOKENIZING IMPACT INTO IMPACT PRODUCTS",
      description:
        "WE TURN EACH CLEANUP INTO A DYNAMIC ONCHAIN IMPACT PRODUCT - A VISIBLE, GROWING ASSET TIED TO REAL-WORLD ACTION. THIS CREATES LASTING VALUES AND RECOGNITION BEYOND THE MOMENT OF CLEANUP.",
    },
    {
      title: "SCALABLE PERSONAL RECOGNITION SYSTEM",
      description:
        "PARTICIPANTS EARN VISIBILITY AND STATUS THROUGH A SYSTEM DESIGNED TO REFLECT THEIR ENVIRONMENTAL CONTRIBUTIONS - UNLOCKING NEW LEVELS, METRICS, AND FUTURE BENEFITS BASED ON THEIR ACTIONS.",
    },
    {
      title: "GLOBAL NETWORK OF COORDINATED ACTION",
      description:
        "THROUGH OUR AMBASSADOR PROGRAM, PARTNER COMMUNITIES, AND DECENTRALIZED TECH, WE CONNECT LOCAL CLEANUP EFFORTS INTO ONE SHARED ECOSYSTEM - ALIGNED, VISIBLE, AND SCALABLE ACROSS BORDERS",
    },
  ];

  return (
    <div>
      {!hideHeader && (
        <div className="mb-6">
          <h2 className="text-3xl md:text-4xl font-black ">THE SOLUTION</h2>
        </div>
      )}

      <div className="space-y-4">
        {solutions.map((solution, index) => (
          <div
            key={index}
            className="bg-[#111111] p-4 flex items-start flex-col  backdrop-blur-sm border border-white/10 min-h-[120px] md:min-h-[200px] lg:min-h-[280px] xl:min-h-[320px]"
          >
            <h3
              className="text-[#FAFF00] text-lg md:text-2xl lg:text-4xl font-bold uppercase mb-2 lg:mb-3 my-3"
              style={{ fontFamily: "Bebas Neue, sans-serif" }}
            >
              {solution.title}
            </h3>
            <p className="text-[#58B12F] text-sm md:text-lg  text-start lg:text-2xl font-bold leading-relaxed">
              {solution.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function WhatIsDeCleanupNetwork() {
  return (
    <div className="min-h-screen">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-16">
        {/* Horizontal Line Separator */}
        <div className="hidden md:block w-full h-0.5 bg-black mb-8 lg:mb-12"></div>

        {/* Header Section - Title and Description Side by Side */}
        <div className="text-center flex flex-col md:flex-row lg:text-left mb-8 lg:mb-12">
          {/* Left: Title with background image */}
          <div className="relative md:w-[50%] min-h-[300px] md:min-h-[400px]">
            <div
              className="absolute inset-0 w-full h-full bg-no-repeat bg-center bg-cover"
              style={{
                backgroundImage: "url('/image2.png')",
              }}
            ></div>
            <div className="absolute  top-0 left-0  font-black text-black uppercase leading-relaxed drop-shadow-lg">
              <div className="inline-block bg-[#FAFF00] text-5xl md:text-8xl  font-medium">
                What is DeCleanup
              </div>
              <div className="inline-block bg-[#FAFF00] text-5xl md:text-8xl font-medium">
                Network?
              </div>
            </div>
          </div>

          {/* Right: Description */}
          <div className="md:w-[50%] pl-0 md:pl-4 lg:pl-8 mt-4 md:mt-0 flex flex-col">
            <div className="space-y-4 md:space-y-6">
              <div className="font-black">
                <div className="text-[#000000] text-base md:text-3xl  lg:text-3xl xl:text-4xl leading-tight font-light">
                  <span className="bg-[#FAFF00] px-1">DECLEANUP</span> NETWORK
                  IS A GLOBAL SYSTEM FOR COORDINATING ENVIRONMENTAL CLEANUPS AND
                  TURNING THEM INTO LONG-LASTING DIGITAL IMPACT.
                </div>
              </div>

              <div className="font-black">
                <div className="text-[#000000] text-base  md:text-lg lg:text-xl xl:text-4xl leading-tight font-normal">
                  IT CONNECTS INDIVIDUALS, GRASSROOTS GROUPS, AND PARTNER
                  ORGANIZATIONS INTO A SHARED ECOSYSTEM, WHERE EVERY CLEANUP
                  BECOMES PART OF A BROADER EFFORT TO REGENERATE THE PLANET.
                </div>
              </div>

              <div className="font-black">
                <div className="text-[#000000] text-base md:text-lg lg:text-xl xl:text-4xl leading-tight font-light">
                  BY CONVERTING ACTIONS INTO ONCHAIN DYNAMIC IMPACT PRODUCTS, WE
                  ENABLE RECOGNITION, TRACEABILITY, AND PARTICIPATION ACROSS
                  REGIONS AND COMMUNITIES.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Horizontal Line Separator */}
        <div className="w-full h-0.5 bg-black mb-8 lg:mb-8"></div>

        {/* Desktop Layout: Problem-Solution Headers with horizontal line */}
        <div className="hidden md:block mb-8 text-center">
          <div className="flex justify-center items-center space-x-4">
            <h2 className="text-4xl lg:text-6xl xl:text-7xl font-bold text-black whitespace-nowrap">
              THE PROBLEM
            </h2>
            <div className="flex-grow h-1 bg-black mx-4"></div>
            <h2 className="text-4xl lg:text-6xl xl:text-7xl font-bold text-[#FAFF00] whitespace-nowrap">
              THE SOLUTION
            </h2>
          </div>
        </div>

        {/* Desktop Layout: Problem-Solution Content Side by Side */}
        <div className="hidden md:grid md:grid-cols-2 gap-0">
          <div>
            <ProblemSection hideHeader={true} />
          </div>
          <div>
            <SolutionSection hideHeader={true} />
          </div>
        </div>

        {/* Mobile Layout: Stacked with vertical line */}
        <div className="block md:hidden">
          {/* Mobile Problem Section */}
          <div className="mb-8">
            <div className="mb-6 text-center">
              <h2 className="text-4xl sm:text-5xl font-bold text-black">
                THE PROBLEM
              </h2>
            </div>

            {/* Problem content with vertical line */}
            <div className="relative">
              {/* Vertical line at the left edge */}
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-black z-0"></div>

              {/* Problem items */}
              <div className="relative z-10 pl-6">
                <ProblemSection hideHeader={true} />
              </div>
            </div>
          </div>

          {/* Mobile Solution Section */}
          <div>
            <div className="mb-6 text-center">
              <h2 className="text-4xl sm:text-5xl font-bold text-yellow-400">
                THE SOLUTION
              </h2>
            </div>

            {/* Solution content without vertical line */}
            <div>
              <SolutionSection hideHeader={true} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
