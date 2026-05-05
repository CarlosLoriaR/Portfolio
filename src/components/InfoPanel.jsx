import React from "react";

export default function InfoPanel({ selectedProject, activeSection }) {
  if (activeSection === "aboutme") {
    return (
      <div className="flex md:flex-1 bg-[#1E1E1E] md:overflow-y-auto overflow-y-auto scrollbar-hide flex flex-col w-full">
        <div className="bg-[#2A2A2A] px-4 py-1 border-b border-[#353534]">
          <span className="text-white text-[11px] font-bold uppercase">
            Profile
          </span>
        </div>
        <div className="p-4">
          <div className="w-full aspect-square bg-black border border-[#2A2A2A] mb-4 overflow-hidden">
            <img
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300"
              src="/images/profile.jpg"
              alt="Profile"
            />
          </div>
        </div>
      </div>
    );
  }

  if (activeSection === "projects") {
    if (!selectedProject) {
      return (
        <div className="flex-1 bg-[#1E1E1E] overflow-y-auto scrollbar-hide flex flex-col items-center justify-center p-5">
          <span className="material-symbols-outlined text-[#2A2A2A] text-6xl mb-4">
            music_note
          </span>
          <p className="text-gray-500 text-[12px] uppercase text-center">
            Please select a project
          </p>
          <p className="text-gray-600 text-[10px] text-center mt-2">
            Click on any project to see details
          </p>
        </div>
      );
    }

    return (
      <div className="flex md:flex-1 bg-[#1E1E1E] md:overflow-y-auto overflow-y-auto scrollbar-hide flex flex-col w-full">
        <div className="bg-[#2A2A2A] px-4 py-1 border-b border-[#353534]">
          <span className="text-white text-[11px] font-bold uppercase">
            Project Details
          </span>
        </div>
        <div className="p-4 border-b border-[#2A2A2A]">
          <div className="w-full aspect-square bg-black border border-[#2A2A2A] mb-4 overflow-hidden flex items-center justify-center">
            <span className="material-symbols-outlined text-[#00CCFF] text-8xl opacity-50">
              music_note
            </span>
          </div>
          <h3 className="text-white font-bold text-headline-md mb-2">
            {selectedProject.title}
          </h3>
          <div className="flex flex-wrap gap-1 mb-4">
            {selectedProject.stack.split(", ").map((tech) => (
              <span
                key={tech}
                className="text-[11px] bg-[#2A2A2A] text-[#00CCFF] px-2 py-1 rounded"
              >
                {tech}
              </span>
            ))}
          </div>
          <p className="text-gray-400 text-[14px] mb-4 leading-relaxed">
            {selectedProject.description ||
              "A project showcasing web development skills."}
          </p>
          <a
            href={selectedProject.link || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 bg-[#00CCFF] text-black font-bold text-[11px] uppercase hover:bg-[#00B8E6] transition-colors"
          >
            <span className="material-symbols-outlined text-sm">
              open_in_new
            </span>
            Visit Site
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="flex-1 bg-[#1E1E1E] overflow-y-auto scrollbar-hide flex flex-col">
      <div className="bg-[#2A2A2A] px-4 py-1 border-b border-[#353534]">
        <span className="text-white text-[11px] font-bold uppercase">
          Playlist
        </span>
      </div>
      <div className="p-4 flex items-center justify-center h-full">
        <iframe
          title="Spotify Playlist"
          style={{ borderRadius: "12px" }}
          src="https://open.spotify.com/embed/playlist/21n57DyEnQLBIlYRgCnWaW?utm_source=generator&theme=0"
          width="100%"
          height="352"
          frameBorder="0"
          allowFullScreen=""
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
}
