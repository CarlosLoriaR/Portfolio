import React from "react";

export default function AboutMeSection() {
  return (
    <div className="md:flex-[3] md:border-r border-[#2A2A2A] md:overflow-y-auto scrollbar-hide bg-[#121212] w-full">
      <div className="sticky top-0 bg-[#1E1E1E] px-4 py-1 border-b border-[#2A2A2A] z-20">
        <span className="text-[#00CCFF] text-[11px] font-bold uppercase border-b border-[#00CCFF]">
          About Me
        </span>
      </div>
      <div className="p-6">
        <p className="text-gray-400 text-[16px] mb-6 leading-relaxed">
          I'm a full stack developer with a passion for creating elegant digital
          solutions. My expertise spans from crafting responsive, user-centric
          interfaces with React and modern web technologies, to building robust
          backend systems. I specialize in creating seamless experiences where
          design and functionality converge perfectly.
        </p>

        <p className="text-gray-400 text-[16px] mb-8 leading-relaxed">
          Throughout my journey, I've worked on diverse projects including
          congress platforms with Stripe integration, marathon registration
          systems, and creative tools. I'm driven by the challenge of
          transforming complex requirements into intuitive applications. Beyond
          code, you'll find me exploring music, gaming, and continuously
          learning new technologies to stay ahead in the ever-evolving tech
          landscape.
        </p>

        <div className="bg-[#1E1E1E] border border-[#2A2A2A] p-4 rounded">
          <h3 className="text-[#00CCFF] font-bold text-[12px] uppercase mb-4 border-b border-[#2A2A2A] pb-2">
            Quick Facts
          </h3>
          <div className="space-y-3 text-[11px]">
            <div className="flex justify-between items-center">
              <span className="text-gray-400">Age</span>
              <span className="text-white">27 Years</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-400">Experience</span>
              <span className="text-white">5+ Years</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-400">Languages</span>
              <span className="text-white">English, Spanish</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
