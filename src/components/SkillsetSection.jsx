import React from "react";

export default function SkillsetSection() {
  const skills = [
    {
      category: "Design",
      items: [
        "Graphic Design",
        "Interface Design",
        "User Experience",
        "Visual Design Systems",
      ],
    },
    {
      category: "Frontend",
      items: ["HTML", "CSS", "JavaScript", "React", "Astro", "Tailwind"],
    },
    {
      category: "Backend",
      items: ["PHP", "Node.js", "MongoDB"],
    },
    {
      category: "Tools",
      items: ["Git", "Payment Gateways", "Vercel"],
    },
  ];

  return (
    <div className="md:flex-[3] md:border-r border-[#2A2A2A] md:overflow-y-auto scrollbar-hide bg-[#121212] w-full">
      <div className="sticky top-0 bg-[#1E1E1E] px-4 py-1 border-b border-[#2A2A2A] z-20">
        <span className="text-[#00CCFF] text-[11px] font-bold uppercase border-b border-[#00CCFF]">
          Skill Set
        </span>
      </div>
      <div className="p-6">
        <h2 className="text-white font-bold text-headline-lg mb-4">
          My Skills
        </h2>
        <p className="text-gray-400 text-[14px] mb-6 leading-relaxed">
          I specialize in building complex web applications, digital product
          design and developing visual design systems. I enjoy creating
          effortless user experience and designing delightful digital products.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.map((skillGroup) => (
            <div
              key={skillGroup.category}
              className="bg-[#1E1E1E] border border-[#2A2A2A] p-4 rounded"
            >
              <h3 className="text-[#00CCFF] font-bold text-[12px] uppercase mb-3 border-b border-[#2A2A2A] pb-2">
                {skillGroup.category}
              </h3>
              <ul className="space-y-2">
                {skillGroup.items.map((skill) => (
                  <li
                    key={skill}
                    className="text-gray-300 text-[13px] flex items-center gap-2"
                  >
                    <span className="w-1 h-1 bg-[#00CCFF] rounded-full"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
