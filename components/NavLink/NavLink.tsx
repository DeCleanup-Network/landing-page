import React from "react";
import Divider from "../ui/Divider";
// Simple Divider component since it's imported

const NavLink = () => {
  const navLinks = [
    { name: "LITEPAPER", href: "https://github.com/DeCleanup-Network" },
    { name: "DOCS", href: "https://github.com/DeCleanup-Network/docs" },
    { name: "LATEST ARTICLES", href: "https://paragraph.xyz/decleanupnet" },
    { name: "KARMA-GAP", href: "https://gap.karmahq.xyz/project/decentralized-cleanup-network-decleanup-network"},
    { name: "GITHUB", href: "https://github.com/DeCleanup-Network" },
    { name: "USER GUIDE", href: "https://giveth.io/project/decentralized-cleanup-network"},
    { name: "BUG REPORT", href: "https://tally.so/r/mRBlbl" },
  ];

  return (
    <nav className="relative  overflow-hidden">
      <Divider className="" />
      
      {/* Mobile Layout - Grid (2x3 + 1) */}
      <div className="block md:hidden">
        <div className="grid grid-cols-2 gap-3 mb-3">
          {navLinks.slice(0, 6).map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="bg-black text-[#FAFF00] text-sm font-bold rounded px-4 py-3 text-center tracking-wide uppercase transition-all duration-300 border-2 border-transparent whitespace-nowrap hover:bg-gray-800 hover:border-yellow-400 hover:-translate-y-0.5 hover:shadow-lg focus:outline-none focus:border-white focus:ring-2 focus:ring-white/50 active:translate-y-0"
              style={{ fontFamily: "Bebas Neue, Arial Black, sans-serif" }}
              aria-label={`View ${link.name}`}
            >
              {link.name}
            </a>
          ))}
        </div>
        {/* Last item centered */}
        <div className="flex justify-center">
          <a
            href={navLinks[6].href}
            className="bg-black text-[#FAFF00] text-sm font-bold rounded px-4 py-3 text-center tracking-wide uppercase transition-all duration-300 border-2 border-transparent whitespace-nowrap hover:bg-gray-800 hover:border-yellow-400 hover:-translate-y-0.5 hover:shadow-lg focus:outline-none focus:border-white focus:ring-2 focus:ring-white/50 active:translate-y-0"
            style={{ fontFamily: "Bebas Neue, Arial Black, sans-serif" }}
            aria-label={`View ${navLinks[6].name}`}
          >
            {navLinks[6].name}
          </a>
        </div>
      </div>

      {/* Desktop Layout - Horizontal Row */}
      <div className="hidden md:flex justify-between  gap-2 lg:gap-3 p-2 flex-wrap">
        {navLinks.map((link, index) => (
          <a
            key={index}
            href={link.href}
            className="bg-black  text-[#FAFF00] text-sm lg:text-base font-bold rounded px-3 lg:px-4 py-2 lg:py-3 text-center tracking-wide uppercase transition-all duration-300 border-2 border-transparent whitespace-nowrap hover:bg-gray-800 hover:border-yellow-400 hover:-translate-y-0.5 hover:shadow-lg focus:outline-none focus:border-white focus:ring-2 focus:ring-white/50 active:translate-y-0"
            style={{ fontFamily: "Bebas Neue, Arial Black, sans-serif" }}
            aria-label={`View ${link.name}`}
          >
            {link.name}
          </a>
        ))}
      </div>
      
      <Divider className="mt-2 bg-black" />

      {/* Footer */}
      <div className="flex flex-col md:flex-row justify-between items-center mt-4 text-xs text-black font-semibold">
        <span 
          className="text-black text-lg lg:text-xl font-bold"
          style={{ fontFamily: "Bebas Neue, Arial Black, sans-serif" }}
        >
          DECLEANUP NETWORK 2025©
        </span>
        <span 
          className="tracking-wide text-lg lg:text-xl font-bold mt-2 md:mt-0"
          style={{ fontFamily: "Bebas Neue, Arial Black, sans-serif" }}
        >
          STELLAR
        </span>
      </div>
    </nav>
  );
};

export default NavLink;