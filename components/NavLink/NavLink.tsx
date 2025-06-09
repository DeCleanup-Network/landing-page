import React from "react";
import Divider from "../ui/Divider";

const NavLink: React.FC = () => {
  const navLinks = [
    { name: "LITEPAPER", href: "#litepaper" },
    { name: "DOCS", href: "#docs" },
    { name: "LATEST ARTICLES", href: "#articles" },
    { name: "KARMA-GAP", href: "#karma-gap" },
    { name: "GITHUB", href: "#github" },
    { name: "USER GUIDE", href: "#user-guide" },
    { name: "BUG REPORT", href: "#bug-report" },
  ];

  return (
    <nav className="relative min-h-[120px] overflow-hidden">
      <Divider className="mt-4" />
      <div className="flex justify-between items-center gap-4 p-2 flex-wrap">
        {navLinks.map((link, index) => (
          <a
            key={index}
            href={link.href}
            className="bg-black text-[#FAFF00] no-underline px-5 py-3 text-md tracking-wide uppercase transition-all duration-300 border-2 border-transparent whitespace-nowrap hover:bg-gray-800 hover:border-yellow-400 hover:-translate-y-0.5 hover:shadow-lg focus:outline-none focus:border-white focus:ring-2 focus:ring-white/50 active:translate-y-0 font-bebas font-medium"
            aria-label={`View ${link.name}`}
          >
            {link.name}
          </a>
        ))}
      </div>
      <Divider className="mt-2" />

      <div className="flex flex-col md:flex-row justify-between text-xs text-[#111111] font-semibold font-sans">
        <span className="text-[#111111] text-xl">DECLEANUP NETWORK 2025©</span>
        <span className="tracking-wide text-xl">STELLAR</span>
      </div>
    </nav>
  );
};

export default NavLink;
