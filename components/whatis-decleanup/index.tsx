import { ProblemSection } from "./problem-section"
import { SolutionSection } from "./solution-section"

export default function WhatIsDeCleanupNetwork() {
  return (
    <section className="w-full bg-[#4FA02A] relative overflow-hidden">
      <div className="container mx-auto px-4 py-8 relative z-10 m-[2px]">
        {/* Horizontal Line Separator */}
        <div className="w-full h-0.5 bg-black mb-8"></div>

        {/* Header Section - Title and Description Side by Side */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Left: Title with background image */}
          <div className="relative">
            <div className="absolute inset-0">
              <img
                src="/cleanup-illustration.png"
                alt=""
                className="w-full h-full object-cover object-center"
                aria-hidden="true"
              />
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-4xl font-black text-black leading-tight relative z-10 bg-[#FAFF00] mr-30">
              WHAT IS DECLEANUP
              <br />
              NETWORK?
            </h1>
          </div>

          {/* Right: Description */}
          <div className="text-black text-lg md:text-xl font-bold leading-tight space-y-5">
            <p>
              <span className="bg-[#FAFF00] space-x-2">DECLEANUP</span> NETWORK IS A GLOBAL SYSTEM FOR COORDINATING ENVIRONMENTAL CLEANUPS AND TURNING THEM INTO
              LONG-LASTING DIGITAL IMPACT.
            </p>
            <p>
              IT CONNECTS INDIVIDUALS, GRASSROOTS GROUPS, AND PARTNER ORGANIZATIONS INTO A SHARED ECOSYSTEM, WHERE EVERY
              CLEANUP BECOMES PART OF A BROADER EFFORT TO REGENERATE THE PLANET.
            </p>
            <p>
              BY CONVERTING ACTIONS INTO ONCHAIN DYNAMIC IMPACT PRODUCTS, WE ENABLE RECOGNITION, TRACEABILITY, AND
              PARTICIPATION ACROSS REGIONS AND COMMUNITIES.
            </p>
          </div>
        </div>

        {/* Horizontal Line Separator */}
        <div className="w-full h-0.5 bg-black mb-8"></div>

        {/* Problem-Solution Headers with horizontal line */}
        <div className="mb-8 text-center">
          <div className="flex justify-center items-center space-x-4">
            <h2 className="text-3xl md:text-4xl font-black text-black">
              THE PROBLEM
            </h2>
            <div className="flex-grow h-1 bg-black mx-2"></div>
            <h2 className="text-3xl md:text-4xl font-black text-yellow-400">
              THE SOLUTION
            </h2>
          </div>
        </div>

        {/* Problem-Solution Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
          <div className="pr-0">
            <ProblemSection hideHeader={true} />
          </div>
          <div className="pl-0">
            <SolutionSection hideHeader={true} />
          </div>
        </div>
      </div>
    </section>
  )
}
