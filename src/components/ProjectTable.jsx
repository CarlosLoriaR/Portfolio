import React, { useState } from "react";

const projects = [
  {
    id: 1,
    title: "ICCBR2024",
    stack: "HTML, CSS, JS, PHP, Bootstrap",
    date: "2024-02-01",
    rating: 5,
    link: "https://web.archive.org/web/20250117185308/https://iccbr2024.org/",
    description:
      "Developed a comprehensive web platform for the International Conference on Case-Based Reasoning 2024. The platform served as both an informational hub and registration system, featuring real-time event details, speaker information, and session schedules. Integrated Stripe payment gateway for secure ticket transactions, enabling fully online registration. The site received over 2,000 visitors during the conference period and facilitated seamless attendee management with responsive design across all devices.",
  },
  {
    id: 2,
    title: "Mx-Race",
    stack: "HTML, CSS, JS, PHP",
    date: "2023-06-15",
    rating: 5,
    link: "https://mx-race.com/",
    description:
      "Created a full-featured marathon management platform handling event registration, payment processing, and administration. The system supports multiple payment methods including online bank transfers and cash transactions. Features include participant management, race result publishing with detailed runner statistics, event creation tools, and an intuitive admin panel. Successfully managed registration for hundreds of participants and streamlined the entire race management workflow.",
  },
  {
    id: 3,
    title: "Album Poster Generator",
    stack: "Astro, Tailwind, JavaScript",
    date: "2023-03-20",
    rating: 4,
    link: "https://poster-generator-eta.vercel.app/",
    description:
      "Built an interactive web application that empowers users to create personalized music posters in real-time. The tool combines image uploading, text customization, and layout controls into an intuitive interface. Users can upload album artwork, customize text with various fonts and colors, and generate publication-ready designs. Deployed on Vercel for optimal performance and accessibility. The application demonstrates clean UI/UX principles with a focus on user experience and ease of use.",
  },
];

export default function ProjectTable({ onProjectSelect }) {
  const [hoveredRow, setHoveredRow] = useState(null);

  const renderStars = (rating) => {
    return (
      <div className="flex">
        {Array.from({ length: 5 }).map((_, i) => (
          <span key={i} className="text-[#FFD44F]">
            {i < rating ? "★" : "☆"}
          </span>
        ))}
      </div>
    );
  };

  return (
    <div className="md:flex-[3] md:border-r border-[#2A2A2A] md:overflow-y-auto scrollbar-hide bg-[#121212] w-full flex-1">
      <div className="sticky top-0 bg-[#1E1E1E] px-4 py-1 border-b border-[#2A2A2A] z-20 flex justify-between items-center">
        <div className="flex gap-4">
          <span className="text-[#00CCFF] text-[11px] font-bold uppercase border-b border-[#00CCFF]">
            All Projects
          </span>
          <span className="text-gray-500 text-[11px] font-bold uppercase hover:text-white cursor-pointer transition-colors hidden sm:inline">
            Web Apps
          </span>
          <span className="text-gray-500 text-[11px] font-bold uppercase hover:text-white cursor-pointer transition-colors hidden sm:inline">
            Mobile
          </span>
        </div>
        <div className="flex items-center text-gray-500 gap-2 hidden sm:flex">
          <span className="material-symbols-outlined text-sm">search</span>
          <span className="text-[10px] uppercase">Search Library</span>
        </div>
      </div>

      {/* Desktop: Table View */}
      <table className="w-full text-left border-collapse hidden md:table">
        <thead>
          <tr className="bg-[#1E1E1E] text-[11px] text-gray-500 uppercase border-b border-[#2A2A2A]">
            <th className="p-2 w-10"></th>
            <th className="p-2 font-medium">Title</th>
            <th className="p-2 font-medium">Stack</th>
            <th className="p-2 font-medium">Date</th>
            <th className="p-2 font-medium">Rating</th>
            <th className="p-2 w-12"></th>
          </tr>
        </thead>
        <tbody className="text-[14px]">
          {projects.map((project, idx) => (
            <tr
              key={project.id}
              onMouseEnter={() => setHoveredRow(project.id)}
              onMouseLeave={() => setHoveredRow(null)}
              onClick={() => onProjectSelect(project)}
              className={`border-b border-[#1E1E1E] hover:bg-[#2A2A2A] cursor-pointer transition-colors ${
                idx % 2 === 1 ? "bg-[#171717]" : ""
              }`}
            >
              <td className="p-2">
                <div className="w-6 h-6 bg-[#1E1E1E] border border-[#2A2A2A] flex items-center justify-center">
                  <span className="material-symbols-outlined text-[#00CCFF] text-sm">
                    music_note
                  </span>
                </div>
              </td>
              <td className="p-2 text-white font-bold">{project.title}</td>
              <td className="p-2 text-gray-400">{project.stack}</td>
              <td className="p-2 text-gray-400">{project.date}</td>
              <td className="p-2">{renderStars(project.rating)}</td>
              <td className="p-2">
                <span
                  className={`material-symbols-outlined transition-opacity ${
                    hoveredRow === project.id
                      ? "text-[#00CCFF] opacity-100"
                      : "opacity-0"
                  }`}
                >
                  play_circle
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Mobile: Card View */}
      <div className="md:hidden p-4 space-y-3">
        {projects.map((project) => (
          <div
            key={project.id}
            onClick={() => onProjectSelect(project)}
            className="bg-[#1E1E1E] border border-[#2A2A2A] p-3 rounded hover:border-[#00CCFF] transition-colors cursor-pointer"
          >
            <div className="flex items-start gap-3 mb-2">
              <div className="w-6 h-6 bg-[#121212] border border-[#2A2A2A] flex items-center justify-center flex-shrink-0">
                <span className="material-symbols-outlined text-[#00CCFF] text-sm">
                  music_note
                </span>
              </div>
              <div className="flex-1">
                <h3 className="text-white font-bold text-[13px]">{project.title}</h3>
                <p className="text-gray-500 text-[10px]">{project.date}</p>
              </div>
            </div>
            <div className="flex gap-1 mb-2 flex-wrap">
              {project.stack.split(", ").map((tech, idx) => (
                <span key={idx} className="text-[8px] bg-[#121212] border border-[#2A2A2A] px-1.5 py-0.5 text-gray-400">
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex justify-between items-center">
              <div>{renderStars(project.rating)}</div>
              <span className="material-symbols-outlined text-[#00CCFF] text-sm">
                play_circle
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
