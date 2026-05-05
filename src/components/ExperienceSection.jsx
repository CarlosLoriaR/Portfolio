import React from "react";

export default function ExperienceSection() {
  const experiences = [
    {
      id: 1,
      title: "QA Specialist",
      date: "March 2023 - August 2024",
      description:
        "My job is to ensure that the client's requirements are met to the letter and deliver tasks in excellent quality.",
    },
    {
      id: 2,
      title: "Frontend Developer - ICCBR2024 Conference",
      date: "February 2024",
      description:
        "I worked as a frontend developer in which I created a platform that was not only informative for the congress but also useful for people interested in attending. I also implemented a Stripe payment gateway for ticket sales.",
    },
  ];

  const education = [
    {
      id: 1,
      title: "Computer Systems Engineering",
      school: "Mérida Technological Institute",
      date: "2019 - 2023",
      description:
        "Studied computer systems engineering specializing in Web Development. Focused on software development, web technologies, and programming fundamentals.",
    },
    {
      id: 2,
      title: "Web Development Program",
      school: "Cornerstone Community College - Vancouver, BC",
      date: "2025 - Current",
      description:
        "Web Development program focused on modern web technologies, including frontend and backend development, building responsive websites, and developing practical web applications.",
    },
  ];

  return (
    <div className="md:flex-[3] md:border-r border-[#2A2A2A] md:overflow-y-auto scrollbar-hide bg-[#121212] w-full">
      <div className="sticky top-0 bg-[#1E1E1E] px-4 py-1 border-b border-[#2A2A2A] z-20">
        <span className="text-[#00CCFF] text-[11px] font-bold uppercase border-b border-[#00CCFF]">
          Experience
        </span>
      </div>
      <div className="p-6">
        <h2 className="text-white font-bold text-headline-lg mb-6">
          Experience
        </h2>
        <div className="mb-8">
          {experiences.map((exp) => (
            <div
              key={exp.id}
              className="mb-6 pb-6 border-b border-[#2A2A2A]"
            >
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-white font-bold text-[14px]">
                  {exp.title}
                </h3>
                <span className="text-[#00CCFF] text-[12px] font-mono-data">
                  {exp.date}
                </span>
              </div>
              <p className="text-gray-400 text-[14px] leading-relaxed">
                {exp.description}
              </p>
            </div>
          ))}
        </div>

        <h2 className="text-white font-bold text-headline-lg mb-6">
          Education
        </h2>
        {education.map((edu) => (
          <div key={edu.id} className="mb-6 pb-6 border-b border-[#2A2A2A]">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="text-white font-bold text-[14px]">
                  {edu.title}
                </h3>
                <p className="text-[#00CCFF] text-[12px] mt-1">
                  {edu.school}
                </p>
              </div>
              <span className="text-gray-500 text-[12px] font-mono-data">
                {edu.date}
              </span>
            </div>
            <p className="text-gray-400 text-[14px] leading-relaxed mt-2">
              {edu.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
