interface ProblemSectionProps {
    hideHeader?: boolean;
  }
  
  export function ProblemSection({ hideHeader = false }: ProblemSectionProps) {
    const problems = [
      {
        title: "LACK OF INCENTIVES FOR CLEANUP ACTIONS",
      },
      {
        title: "LIMITS FOR RECOGNITION AND QUANTIFICATION OF PERSONAL IMPACT",
      },
      {
        title: "WEAK GLOBAL COORDINATION",
      }
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
            <div key={index} className="bg-[#2f800a] p-4 h-30.5">
              <h3 className="text-lg md:text-xl font-black text-black mb-0" style={{ fontFamily: "Bebas Neue" }}>
                {problem.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    );
  }