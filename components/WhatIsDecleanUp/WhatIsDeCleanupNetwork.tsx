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
          <h2 className="text-3xl text-left bg-red-400 md:text-4xl font-black text-black px-2 py-1 inline-block">
            THE PROBLEM
          </h2>
        </div>
      )}

      <div className="space-y-4">
        {problems.map((problem, index) => (
          <div
            key={index}
            className=" p-4 min-h-[120px] md:min-h-[200px] lg:min-h-[280px] leading-6 xl:min-h-[320px] flex bg-[#4FA02A] items-center md:items-start "
          >
            <h3
              className="text-xl font-normal md:text-xl text-left lg:text-3xl text-black leading-relaxed"
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
              className="text-[#FAFF00] text-left md:text-center text-4xl md:text-2xl lg:text-4xl font-bold uppercase mb-2 lg:mb-3 my-3"
              style={{ fontFamily: "Bebas Neue, sans-serif" }}
            >
              {solution.title}
            </h3>
            <p className="text-[#58B12F] text-sm md:text-lg  text-start lg:text-4xl  leading-relaxed">
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
    <div className="h-full md:min-h-screen pb-4">
      <div className="mx-auto px-4 sm:px-6 lg:px-8  lg:py-4">

      
        <div className="w-full flex justify-center mb-5 md:mb-10  items-center font-black text-black uppercase leading-relaxed drop-shadow-lg">
          <div className="inline-block bg-[#FAFF00] text-2xl md:text-6xl lg:text-7xl px-2 font-medium">
            What is DeCleanup Network?
          </div>
        </div>

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
          </div>

          {/* Right: Description */}
          <div className="md:w-[50%] pl-0 md:pl-4 lg:pl-8 mt-4 md:mt-0 ">
            <div className="space-y-4 md:space-y-6 flex flex-col h-full justify-between">
              <div className="font-black">
                <div className="text-[#000000] text-xl md:text-4xl text-left  lg:text-3xl xl:text-4xl leading-tight font-light">
                  at DeCleanup Network we coordinate global environmental
                  cleanups and turn them into lasting digital impact.
                </div>
              </div>

              <div className="font-black">
                <div className="text-[#000000] text-xl md:text-3xl text-left  lg:text-3xl xl:text-4xl leading-tight font-light">
                  We connect participants and partners into a shared ecosystem
                  where every cleanup becomes a part of broader planetary
                  regeneration.
                </div>
              </div>

              <div className="font-black">
                <div className="text-[#000000] text-xl md:text-3xl text-left  lg:text-3xl xl:text-4xl leading-tight font-light">
                  By converting actions into onchain Impact Products, we enable
                  recognition, traceability, and participation across regions.
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="hidden md:block">
          {/* Horizontal Line Separator */}
          <div className="w-full h-1 bg-black mb-8 lg:mb-12"></div>

          {/* Problem-Solution Headers with horizontal line */}
          <div className="mb-8 lg:mb-12">
            <div className="flex justify-center items-center">
              <h2
                className="text-4xl lg:text-5xl xl:text-6xl font-black text-black whitespace-nowrap pr-8"
                style={{ fontFamily: "Bebas Neue, Arial Black, sans-serif" }}
              >
                THE PROBLEM
              </h2>
              <div className="flex-grow h-1 bg-black mx-4"></div>
              <h2
                className="text-4xl lg:text-5xl xl:text-6xl font-black text-[#FAFF00] whitespace-nowrap pl-8"
                style={{ fontFamily: "Bebas Neue, Arial Black, sans-serif" }}
              >
                THE SOLUTION
              </h2>
            </div>
          </div>

          {/* Problem-Solution Content Side by Side */}
          <div className="grid grid-cols-2 gap-0 min-h-[600px] lg:min-h-[700px] xl:min-h-[800px]">
            <div className="">
              <ProblemSection hideHeader={true} />
            </div>
            <div>
              <SolutionSection hideHeader={true} />
            </div>
          </div>
        </div>

        {/* Mobile Layout: Stacked with vertical line */}
        <div className="block md:hidden">
          {/* Mobile Problem Section */}
          <div className="mb-8">
            <div className="mb-6 text-center ">
              <h2 className="text-4xl sm:text-5xl font-bold text-black bg-[#FAFF00] inline-block p-2">
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
              <h2 className="text-4xl sm:text-5xl font-bold text-black bg-[#FAFF00] inline-block p-2">
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
