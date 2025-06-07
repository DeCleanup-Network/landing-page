import React from "react";
import NavLink from "../NavLink/NavLink";

const TokenizeImpactSection = () => {
  const steps = [
    {
      number: "1.",
      title: "Start or Join a Cleanup",
      description:
        "Find or start a cleanup in your area or join an existing one nearby. Organize environmental action together with outdoor enthusiasts.",
    },
    {
      number: "2.",
      title: "Capture the Impact",
      description:
        "Take selfies and get photos with friends, upload them to our platform and get verified.",
    },
    {
      number: "3.",
      title: "Earn Rewards",
      description:
        "Get impact tokens for cleanup the earth/ocean. Earning such along the way for referring to friends and consistently repeating your impactful activity.",
    },
  ];


  return (
    <div className="h-screen">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-16">
        {/* Hero Section */}
        <div className="text-center flex flex-col md:flex-row lg:text-left">
          {/* Left Content with Background Image */}
          <div className="relative md:w-[50%] min-h-[400px] space-y-4 flex items-center justify-center">
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat "
              style={{
                backgroundImage: "url('/image1.png')",
              }}
            ></div>
            <div className="absolute top-0 flex flex-col left-0 text-2xl sm:text-2xl lg:text-5xl xl:text-3xl font-black text-black uppercase leading-relaxed drop-shadow-lg">
              <div className="inline-block bg-[#FAFF00] text-8xl font-medium">
                How to Tokenize
              </div>
              <div className="inline-block  bg-[#FAFF00] text-8xl font-medium">
                Impact?
              </div>
            </div>

          </div>

          {/* Right Content - Steps */}
          <div className="space-y-4 lg:space-y-6 md:w-[50%] pl-4 lg:pl-8 mt-5 md:mt-0">
            {steps.map((step, index) => (
              <div
                key={index}
                className="bg-[#111111] backdrop-blur-sm border border-white/10 rounded-xl p-4 lg:p-6  font-bebes duration-300"
              >
                <div className="flex flex-row text-4xl">
                  <div className="text-[#FAFF00] text-base lg:text-4xl font-bold mb-2 ">
                    {step.number}
                  </div>
                  <div className="text-[#FAFF00] text-base lg:text-4xl fonbg-[#111111]t-bold uppercase mb-2 lg:mb-3 ">
                    {step.title}
                  </div>
                </div>
                <div className="text-[#58B12F] text-sm lg:text-3xl leading-relaxed">
                  {step.description}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center space-y-8  mt-12 lg:mt-16">
          {/* Get Started Button */}
          <div className="w-full border-y border-black p-3">
            <button className=" bg-black w-full hover:bg-black/80  text-[#FAFF00] font-black text-xl lg:text-5xl uppercase px-8 lg:px-12 py-4 lg:py-5  hover:shadow-2xl shadow-lg transform">
              Get Started
            </button>
          </div>
          {/* Join Movement Section */}
          <div className="space-y-6 lg:space-y-8">
            <h2 className="text-3xl sm:text-4xl lg:text-[202px]  font-black text-black uppercase leading-tight">
              Join the Movement
            </h2>

            <p className="text-black text-base lg:text-5xl font-extrabold px-4">
              Connect with our growing community on social media, and explore
              everything you need to start contributing to a cleaner environment
              today.
            </p>

            {/* Social Buttons */}
            <div className="flex border-t border-black flex-col sm:flex-row gap-4 lg:gap-6 p-4 items-center">
              <button className="bg-black text-[#FAFF00] font-bold text-lg lg:text-5xl uppercase px-8 lg:px-10 py-3 lg:py-4 w-full transition-all duration-300 hover:scale-105 hover:shadow-xl shadow-md transform hover:-translate-y-1">
                Telegram
              </button>
              <button className="bg-black text-[#FAFF00]  font-bold text-lg lg:text-5xl uppercase px-8 lg:px-10 py-3 lg:py-4 w-full transition-all duration-300 hover:scale-105 hover:shadow-xl shadow-md transform hover:-translate-y-1">
                Twitter
              </button>
            </div>
          </div>
          <NavLink />
        </div>
      </div>
    </div>
  );
};

export default TokenizeImpactSection;
