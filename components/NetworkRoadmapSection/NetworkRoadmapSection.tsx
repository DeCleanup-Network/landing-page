import React from "react";

const NetworkRoadmapSection = () => {
  const roadmap = [
    {
      phase: "FOUNDATION PHASE",
      description: "initial community partnerships activated",
      version: "DAPP V1",
      features: [
        "BASIC POI SUBMISSION",
        "IMPACT PRODUCTS",
        "POINTS AND IMPACT VALUE",
      ],
    },
    {
      phase: "SYSTEM GROWTH",
      description: "collaboration with regen coordination",
      version: "DAPP V2.1",
      features: [
        "IMPROVED POI SUBMISSION",
        "PERSONAL DASHBOARD",
        "REFERRAL SYSTEM",
        "LEADERBOARD",
      ],
    },
    {
      phase: "ACTIVATION",
      description: "launching global ambassador program",
      version: "DAPP V2.2",
      features: [
        "$DCU TOKEN LAUNCH",
        "STAKING AND LOCKING",
        "COMMUNITY VERIFICATION",
        "IMPACT CIRCLES",
        "INTEGRATION WITH REGEN BAZAAR",
        "MULTICHAIN ROLLOUT",
      ],
    },
    {
      phase: "REGIONAL SCALING",
      description: "multi-region coordination and governance",
      version: "DAPP V3",
      features: [
        "NEW IMPACT PRODUCT LEVELS",
        "GOVERNANCE TOOLS",
        "IMPACT METRICS",
        "MULTICHAIN POAPS",
        "INTEGRATIONS WITH PARTNERS",
      ],
      color: "",
    },
  ];

  const galleryImages = [
    {
      src: "./testimonial1.jpg",
      alt: "Community cleanup 1",
      className: "col-span-1 row-span-2",
    },
    {
      src: "./testimonial2.jpg",
      alt: "Community cleanup 2",
      className: "col-span-1 row-span-1",
    },
    {
      src: "./testimonial3.jpg",
      alt: "Community cleanup 3",
      className: "col-span-1 row-span-1",
    },
    {
      src: "./testimonial4.jpg",
      alt: "Community cleanup 4",
      className: "col-span-1 row-span-2",
    },
  ];

  return (
    <div className="min-h-screen bg-black">
      {/* Roadmap Section with responsive margins */}
      <div className="py-4 px-2 sm:px-4 lg:px-4 2xl:px-16 3xl:px-32">
        <div className="relative w-full bg-[#111111] py-8 sm:py-12 lg:py-16 2xl:py-20 3xl:py-24 px-4 sm:px-6 lg:px-8 2xl:px-12 3xl:px-16">
          {/* Header */}
          <div className="text-left mb-8 sm:mb-12 lg:mb-20 2xl:mb-24 3xl:mb-32 lg:bottom-10">
            <h2 className="text-3xl sm:text-4xl sm:ml-4 md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl 3xl:text-9xl font-black uppercase text-[#4FA02A] mb-0 leading-tight">
              NETWORK ROADMAP
            </h2>
          </div>

          {/* Desktop Roadmap - Original Style */}
          <div className="hidden lg:grid lg:grid-cols-4 gap-6 2xl:gap-8 3xl:gap-12 relative">
            {/* Connecting lines - visible on larger screens */}
            <div className="absolute top-38 left-0 w-full">
              <div className="flex justify-between items-center h-0">
                <div className="w-1/4 h-0.5 bg-[#4FA02A]"></div>
                <div className="w-1/4 h-0.5 bg-[#4FA02A]"></div>
                <div className="w-1/4 h-0.5 bg-[#4FA02A]"></div>
                <div className="w-1/4 h-0.5 bg-[#4FA02A]"></div>
              </div>
            </div>

            {roadmap.map((item, index) => (
              <div key={index} className="relative">
                {/* Connection dot */}
                <div className={`absolute top-36.5 left-2 transform -translate-x-1/2 w-3 h-3 ${item.color} rounded-0 border-2 border-[#FAFF00] z-10 bg-[#FAFF00]`} />
                
                <div className="text-left">
                  <h3 className="text-[#FAFF00] text-4xl sm:text-5xl lg:text-5xl xl:text-5xl 2xl:text-6xl 3xl:text-7xl uppercase mb-2 leading-tight" style={{ fontFamily: 'Bebas Neue', letterSpacing: '-0.02em', lineHeight: '100%' }}>
                    {item.phase}
                  </h3>
                  <p className="text-[#58B12F] text-lg lg:text-2xl 2xl:text-3xl 3xl:text-4xl font-normal mb-10 leading-tight lowercase" style={{ fontFamily: 'Bebas Neue', letterSpacing: '-0.02em', lineHeight: '77%' }}>{item.description}</p>

                  <div className={`${item.color} rounded-xl p-3 2xl:p-4 3xl:p-6 shadow-lg`}>
                    <h4 className="text-[#FAFF00] text-4xl sm:text-5xl lg:text-5xl xl:text-5xl 2xl:text-6xl 3xl:text-7xl uppercase mb-2 leading-tight" style={{ fontFamily: 'Bebas Neue', letterSpacing: '-0.02em', lineHeight: '100%' }}>{item.version}</h4>
                    <ul className="text-[#58B12F] text-lg lg:text-3xl 2xl:text-4xl 3xl:text-5xl font-normal mb-5 leading-tight lowercase" style={{ fontFamily: 'Bebas Neue', letterSpacing: '-0.02em', lineHeight: '102%' }}>
                      {item.features.map((feature, idx) => (
                        <li key={idx} className="uppercase">{feature}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile/Tablet Roadmap */}
          <div className="block lg:hidden">
            {/* Vertical connecting line */}
            <div className="absolute left-7 top-35 w-2 h-317 bg-[#4FA02A] z-0"></div>
            
            <div className="space-y-6 pb-12">
              {/* Point 1 - Foundation Phase */}
              <div className="relative">
                <div className="absolute left-4 top-6 w-3 h-5 bg-[#FAFF00] border-2 border-[#FAFF00] z-20 transform -translate-x-1/2" />
                <div className="ml-8">
                  <div className="p-4 shadow-lg">
                    <h4 className="text-[#FAFF00] text-left text-4xl sm:text-5xl lg:text-5xl xl:text-5xl uppercase mb-2 leading-tight" style={{ fontFamily: 'Bebas Neue', letterSpacing: '-0.02em', lineHeight: '100%' }}>FOUNDATION PHASE</h4>
                    <p className="text-[#58B12F] text-left text-lg lg:text-3xl font-normal mb-4 leading-tight lowercase" style={{ fontFamily: 'Bebas Neue', letterSpacing: '-0.02em', lineHeight: '102%' }}>initial community partnerships activated</p>
                  </div>
                </div>
              </div>

              {/* Point 2 - System Growth */}
              <div className="relative">
                <div className="absolute left-4 top-6 w-3 h-5 bg-[#FAFF00] border-2 border-[#FAFF00] z-20 transform -translate-x-1/2" />
                <div className="ml-8">
                  <div className="p-4 shadow-lg">
                    <h4 className="text-[#FAFF00] text-left text-4xl sm:text-5xl lg:text-5xl xl:text-5xl uppercase mb-2 leading-tight" style={{ fontFamily: 'Bebas Neue', letterSpacing: '-0.02em', lineHeight: '100%' }}>SYSTEM GROWTH</h4>
                    <p className="text-[#58B12F] text-left text-lg lg:text-3xl font-normal mb-4 leading-tight lowercase" style={{ fontFamily: 'Bebas Neue', letterSpacing: '-0.02em', lineHeight: '102%' }}>collaboration with regen coordination</p>
                  </div>
                </div>
              </div>

              {/* Point 3 - Activation */}
              <div className="relative">
                <div className="absolute left-4 top-6 w-3 h-5 bg-[#FAFF00] border-2 border-[#FAFF00] z-20 transform -translate-x-1/2" />
                <div className="ml-8">
                  <div className="p-4 shadow-lg">
                    <h4 className="text-[#FAFF00] text-left text-4xl sm:text-5xl lg:text-5xl xl:text-5xl uppercase mb-2 leading-tight" style={{ fontFamily: 'Bebas Neue', letterSpacing: '-0.02em', lineHeight: '100%' }}>ACTIVATION</h4>
                    <p className="text-[#58B12F] text-left text-lg lg:text-3xl font-normal mb-4 leading-tight lowercase" style={{ fontFamily: 'Bebas Neue', letterSpacing: '-0.02em', lineHeight: '102%' }}>launching global ambassador program</p>
                  </div>
                </div>
              </div>

              {/* Point 4 - Regional Scaling */}
              <div className="relative">
                <div className="absolute left-4 top-6 w-3 h-5 bg-[#FAFF00] border-2 border-[#FAFF00] z-20 transform -translate-x-1/2" />
                <div className="ml-8">
                  <div className="p-4 shadow-lg">
                    <h4 className="text-[#FAFF00] text-left text-4xl sm:text-5xl lg:text-5xl xl:text-5xl uppercase mb-2 leading-tight" style={{ fontFamily: 'Bebas Neue', letterSpacing: '-0.02em', lineHeight: '100%' }}>REGIONAL SCALING</h4>
                    <p className="text-[#58B12F] text-left text-lg lg:text-3xl font-normal mb-4 leading-tight lowercase" style={{ fontFamily: 'Bebas Neue', letterSpacing: '-0.02em', lineHeight: '102%' }}>multi-region coordination and governance</p>
                  </div>
                </div>
              </div>

              {/* Point 5 - DAPP V1 */}
              <div className="relative">
                <div className="absolute left-4 top-6 w-3 h-5 bg-[#FAFF00] border-2 border-[#FAFF00] z-20 transform -translate-x-1/2" />
                <div className="ml-8">
                  <div className="rounded-lg p-4 shadow-lg">
                    <h4 className="text-[#FAFF00] text-left text-4xl sm:text-5xl lg:text-5xl xl:text-5xl uppercase mb-2 leading-tight" style={{ fontFamily: 'Bebas Neue', letterSpacing: '-0.02em', lineHeight: '100%' }}>DAPP V1</h4>
                    <ul className="text-[#58B12F] text-left text-lg lg:text-3xl font-normal mb-4 leading-tight lowercase" style={{ fontFamily: 'Bebas Neue', letterSpacing: '-0.02em', lineHeight: '102%' }}>
                      <li className="uppercase">BASIC POI SUBMISSION</li>
                      <li className="uppercase">IMPACT PRODUCTS</li>
                      <li className="uppercase">POINTS AND IMPACT VALUE</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Point 6 - DAPP V2.1 */}
              <div className="relative">
                <div className="absolute left-4 top-6 w-3 h-5 bg-[#FAFF00] border-2 border-[#FAFF00] z-20 transform -translate-x-1/2" />
                <div className="ml-8">
                  <div className="rounded-lg p-4 shadow-lg">
                    <h4 className="text-[#FAFF00] text-4xl text-left sm:text-5xl lg:text-5xl xl:text-5xl uppercase mb-2 leading-tight" style={{ fontFamily: 'Bebas Neue', letterSpacing: '-0.02em', lineHeight: '100%' }}>DAPP V2.1</h4>
                    <ul className="text-[#58B12F] text-lg text-left lg:text-3xl font-normal mb-4 leading-tight lowercase" style={{ fontFamily: 'Bebas Neue', letterSpacing: '-0.02em', lineHeight: '102%' }}>
                      <li className="uppercase">IMPROVED POI SUBMISSION</li>
                      <li className="uppercase">PERSONAL DASHBOARD</li>
                      <li className="uppercase">REFERRAL SYSTEM</li>
                      <li className="uppercase">LEADERBOARD</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Point 7 - DAPP V2.2 */}
              <div className="relative">
                <div className="absolute left-4 top-6 w-3 h-5 bg-[#FAFF00] border-2 border-[#FAFF00] z-20 transform -translate-x-1/2" />
                <div className="ml-8">
                  <div className="rounded-lg p-4 shadow-lg">
                    <h4 className="text-[#FAFF00] text-4xl sm:text-5xl lg:text-5xl xl:text-5xl uppercase mb-2 text-left leading-tight" style={{ fontFamily: 'Bebas Neue', letterSpacing: '-0.02em', lineHeight: '100%' }}>DAPP V2.2</h4>
                    <ul className="text-[#58B12F] text-lg lg:text-3xl font-normal mb-4 leading-tight text-left" style={{ fontFamily: 'Bebas Neue', letterSpacing: '-0.02em', lineHeight: '102%' }}>
                      <li className="uppercase">$DCU TOKEN LAUNCH</li>
                      <li className="uppercase">STAKING AND LOCKING</li>
                      <li className="uppercase">COMMUNITY VERIFICATION</li>
                      <li className="uppercase">IMPACT CIRCLES</li>
                      <li className="uppercase">INTEGRATION WITH REGEN BAZAAR</li>
                      <li className="uppercase">MULTICHAIN ROLLOUT</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Point 8 - DAPP V3 */}
              <div className="relative">
                <div className="absolute left-4 top-6 w-3 h-5 bg-[#FAFF00] border-2 border-[#FAFF00] z-20 transform -translate-x-1/2" />
                <div className="ml-8">
                  <div className="rounded-lg p-4 shadow-lg">
                    <h4 className="text-[#FAFF00] text-4xl sm:text-5xl lg:text-5xl xl:text-5xl uppercase mb-2 leading-tight text-left" style={{ fontFamily: 'Bebas Neue', letterSpacing: '-0.02em', lineHeight: '100%' }}>DAPP V3</h4>
                    <ul className="text-[#58B12F] text-lg lg:text-3xl font-normal mb-4 leading-tight lowercase text-left" style={{ fontFamily: 'Bebas Neue', letterSpacing: '-0.02em', lineHeight: '102%' }}>
                      <li className="uppercase">NEW IMPACT PRODUCT LEVELS</li>
                      <li className="uppercase">GOVERNANCE TOOLS</li>
                      <li className="uppercase">IMPACT METRICS</li>
                      <li className="uppercase">MULTICHAIN POAPS</li>
                      <li className="uppercase">INTEGRATIONS WITH PARTNERS</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Yellow Background Section */}
      <div 
        className="relative w-full bg-[#FAFF00] px-4 sm:px-6 lg:px-9 2xl:px-16 3xl:px-32" 
        style={{ position: 'relative' }}
      >
        {/* Gallery with responsive margins */}
        <div className="pt-5 mb-4 sm:mb-4 2xl:mb-4 3xl:mb-4">
          <div className="grid grid-cols-3 gap-2 2xl:gap-4 3xl:gap-6">
            {/* Large image on left - full height */}
            <div className="col-span-1 bg-[#FAFF00] border-2 border-[#FAFF00] rounded-lg overflow-hidden">
              <img
                src={galleryImages[0].src}
                alt={galleryImages[0].alt}
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Middle column with two stacked images */}
            <div className="col-span-1 flex flex-col gap-2 2xl:gap-4 3xl:gap-6">
              <div className="flex-1 bg-[#FAFF00] border-2 border-[#FAFF00] rounded-lg overflow-hidden">
                <img
                  src={galleryImages[1].src}
                  alt={galleryImages[1].alt}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="flex-1 bg-[#FAFF00] border-2 border-[#FAFF00] rounded-lg overflow-hidden">
                <img
                  src={galleryImages[2].src}
                  alt={galleryImages[2].alt}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            {/* Large image on right - full height */}
            <div className="col-span-1 bg-[#FAFF00] border-2 border-[#FAFF00] rounded-lg overflow-hidden">
              <img
                src={galleryImages[3].src}
                alt={galleryImages[3].alt}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
    
        {/* Community Impact Section with responsive margins and typography */}
        <div className="mb-11 mt-10 lg:mt-10 lg:mb-10 2xl:mb-10 3xl:mb-10 3xl:mt-10">
          {/* Horizontal Line Separator */}
          <div className="w-full h-0.5 bg-black mb-2 lg:mb-7 lg:mt-11 2xl:mb-10 3xl:mb-12 3xl:mt-50"></div>
          {/* Header Section - Title and Description side by side */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 2xl:gap-12 3xl:gap-16 mb-8 2xl:mb-12 3xl:mb-16 3xl:mt-50">
            <div>
              <h3 className="text-2xl sm:text-3xl lg:text-6xl xl:text-6xl 2xl:text-7xl 3xl:text-8xl font-black uppercase text-black mb-15 mt-2 leading-tight">
                COMMUNITY IMPACT
              </h3>
            </div>
            <div>
              <p className="text-black text-left sm:text-lg lg:text-3xl 2xl:text-4xl 3xl:text-5xl font-normal mb-4 mt-2 leading-tight uppercase" style={{ fontFamily: 'Bebas Neue', letterSpacing: '-0.02em', lineHeight: '102%' }}>
                ACROSS THE WORLD, INDIVIDUALS AND PARTNERS ARE USING 
                DECLANUP DAPP TO TURN EVERYDAY ACTIONS INTO VERIFIED 
                ENVIRONMENTAL IMPACT. THEIR STORIES SHOW WHAT'S 
                POSSIBLE WHEN CLEANUPS GO ONCHAIN.
              </p>
            </div>
          </div>

          {/* Cards Section - Two cards side by side with responsive spacing */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 2xl:gap-8 3xl:gap-12 lg:items-start">
            {/* HEM Japan - shorter card */}
            <div className="bg-black text-[#4FA02A] p-4 lg:p-6 2xl:p-8 3xl:p-10 rounded-none">
              <h4 className="text-[#FAFF00] text-1xl sm:text-2xl lg:text-3xl xl:text-5xl 2xl:text-6xl 3xl:text-7xl mb-2 font-extrabold text-left leading-tight uppercase">HEM JAPAN</h4>
              <p className="text-[#4FA02A] text-sm lg:text-base 2xl:text-lg 3xl:text-xl font-extrabold leading-relaxed text-left uppercase">
                ONE OF OUR EARLIEST PARTNERS, THEY HAVE BEEN ACTIVELY ORGANIZING 
                AND VERIFYING CLEANUPS ACROSS JAPAN, USING DECLANUP'S SYSTEM AND 
                OTHER APPS TO TRACK AND RECOGNIZE IMPACT. <br/>
                IN 2024 12 ACTIVE USERS, 9 CLEANUP EVENTS REGISTERED
              </p>
            </div>
            
            {/* Pestathon - taller card */}
            <div className="bg-black text-[#4FA02A] p-6 lg:p-8 2xl:p-10 3xl:p-12 rounded-none">
              <h4 className="text-[#FAFF00] text-1xl sm:text-2xl lg:text-3xl xl:text-5xl 2xl:text-6xl 3xl:text-7xl mb-2 font-black text-lg uppercase text-left">PESATHON</h4>
              <p className="text-[#4FA02A] text-sm lg:text-base 2xl:text-lg 3xl:text-xl font-extrabold leading-tight text-left uppercase">
                PESATHON CAMPAIGN, ORGANIZED BY UNNPLOGGAS IN UNIVERSITY IN NIGERIA 
                BROUGHT EDUCATION AND ACTION TOGETHER. FOR A WEEK, STUDENTS WERE LEARNING
                ABOUT ENVIRONMENTAL CARE AND ACCOMPLISHING CLEANUPS AT 
                THE CAMPUS AND SURROUNDINGS. DECLANUP NETWORK PROVIDED 
                ADDITIONAL 120 USDGLO TO THE REWARDS POOL ON ATLANTIS IMPACT MINER. <br/>
                IN 2024 9 ACTIVE USERS AND 4 CLEANUP EVENTS REGISTERED.
              </p>
            </div>
          </div>
        </div>
        {/* Horizontal Line Separator */}
        <div className="w-full h-0.5 bg-black mb-4 lg:mb-9 2xl:mb-12 3xl:mb-16"></div>

        {/* Quote Section with responsive typography */}
        <div className="p-6 lg:p-8 2xl:p-10 3xl:p-12 rounded-xl shadow-lg mb-0">
          <div className="text-black leading-relaxed">
            <span className="text-4xl lg:text-6xl 2xl:text-7xl 3xl:text-8xl font-black mr-300">"</span>
            <p className="text-black text-left sm:text-lg lg:text-3xl 2xl:text-4xl 3xl:text-5xl font-normal mb-4 mt-2 leading-tight uppercase" style={{ fontFamily: 'Bebas Neue', letterSpacing: '-0.02em', lineHeight: '102%' }}>
              I ENCOURAGE YOU TO DIVE IN DECLANUP DAPP! FIND A COMMUNITY WHERE YOU CAN ENJOY CONTRIBUTING TO SOCIETY. AT 
              DECLANUP DAPP PICKING UP A SINGLE PLASTIC BOTTLE IS WORTH COLLECTING WHEN INTERACTING WITH PARTICIPANTS. AFTER 
              A SNAPSHOT OF YOUR ACTION, YOU CAN TURN THAT INTO A REWARD! START BY TAKING ACTION, SNAPPING A PHOTO, AND 
              RECEIVING REWARDS. THEN, LEARN ABOUT WEB3 TECHNOLOGY TO ACTIVATE THOSE REWARDS. DECLANUP EMPLOYS THE 
              MOST SOPHISTICATED SYSTEM I'VE ENCOUNTERED IN DAPPS, MAKING IT EASIER FOR PEOPLE TO PARTICIPATE IN ENVIRONMENTAL 
              PROTECTION ACTIVITIES. <span className="font-bebas font-normal text-[30px] 2xl:text-[36px] 3xl:text-[42px] ml-250 leading-[102%] tracking-[-0.02em] lowercase">— Yuichi Hosomo — HEM Japan</span>
            </p>
            <span className="text-4xl lg:text-6xl 2xl:text-7xl 3xl:text-8xl font-black ml-300">"</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NetworkRoadmapSection;