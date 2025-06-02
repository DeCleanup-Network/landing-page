interface SolutionSectionProps {
    hideHeader?: boolean
  }
  
  export function SolutionSection({ hideHeader = false }: SolutionSectionProps) {
    const solutions = [
      {
        title: "TOKENIZING IMPACT INTO IMPACT PRODUCTS",
        description:
          "WE TURN EACH CLEANUP INTO A DYNAMIC ONCHAIN IMPACT PRODUCTV - A VISIBLE, GROWING ASSET TIED TO REAL-WORLD ACTION.THIS CREATES LASTING VALUES AND RECOGNITION BEYOND THE MOMENT OF CLEANUP.",
      },
      {
        title: "SCALABILE PERSONAL RECOGNITION SYSTEM",
        description:
          "PARTICIPANTS EARN VISIBILITY AND STATUS THROUGH A SYSTEM DESIGNED TO REFLECT THEIR ENVIRONMENTAL CONTRIBUTIONS - UNLOCKING NEW LEVELS, METRICS, AND FUTURE BENEFITS BASED ON THEIR ACTIONS.",
      },
      {
        title: "GLOBAL NETWORK OF COORDINATED ACTION",
        description:
          "THROUGH OUR AMBASSADOR PROGRAM, PARTNER COMMUNITIES, AND DECENTRALIZED TECH, WE CONNECT LOCAL CLEANUP EFFORTS INTO ONE SHARED ECOSYSTEM - ALIGNED, VISIBLE, AND SCALABLE ACROSS BORDERS",
      },
    ]
  
    return (
      <div>
        {!hideHeader && (
          <div className="mb-6">
            <h2 className="text-3xl md:text-4xl font-black text-[#FAFF00]">THE SOLUTION</h2>
          </div>
        )}
  
        <div className="space-y-4">
          {solutions.map((solution, index) => (
            <div key={index} className="bg-black border border-black p-4">
              <h3 className="text-lg md:text-xl font-black text-[#FAFF00] mb-2" style={{ fontFamily: "Bebas Neue" }}>
                {solution.title}
              </h3>
              <p className="text-[#58B12F] text-sm font-medium leading-tight">{solution.description}</p>
            </div>
          ))}
        </div>
      </div>
    )
  }
  