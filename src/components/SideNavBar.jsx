import React, { useState } from "react";

export default function SideNavBar({ onSectionChange }) {
  const [activeNav, setActiveNav] = useState("collection");

  const handleNavClick = (id, section) => {
    setActiveNav(id);
    if (onSectionChange) onSectionChange(section);
  };

  const navItems = [
    { id: "about", icon: "person", label: "About Me", section: "aboutme" },
    {
      id: "experience",
      icon: "work",
      label: "Experience",
      section: "experience",
    },
    {
      id: "skillset",
      icon: "terminal",
      label: "Skill Set",
      section: "skillset",
    },
    {
      id: "projects",
      icon: "library_music",
      label: "Projects",
      section: "projects",
    },
  ];

  return (
    <aside className="hidden md:flex flex-col h-full w-64 py-4 bg-[#1E1E1E] border-r border-[#2A2A2A]">
      <div className="px-4 mb-6">
        <p className="font-label-bold text-[#00CCFF] text-[10px] tracking-widest uppercase">
          Browser
        </p>
      </div>
      <nav className="flex flex-col flex-1">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => handleNavClick(item.id, item.section)}
            className={`flex items-center gap-3 px-4 py-2 cursor-pointer transition-all text-left border-l-2 ${
              activeNav === item.id
                ? "bg-[#2A2A2A] text-[#00CCFF] border-l-[#00CCFF]"
                : "text-gray-400 hover:bg-[#2A2A2A] hover:text-white border-l-transparent"
            }`}
          >
            <span className="material-symbols-outlined text-md">
              {item.icon}
            </span>
            <span className="font-inter text-[12px] font-medium uppercase">
              {item.label}
            </span>
          </button>
        ))}
      </nav>
      <div className="border-t border-[#2A2A2A] my-4"></div>
      <div className="flex-1 overflow-y-auto scrollbar-hide px-2">
        <div className="mb-2">
          <div className="flex items-center gap-2 px-2 py-1 cursor-pointer hover:bg-[#2A2A2A] rounded transition-colors">
            <span className="material-symbols-outlined text-sm text-gray-400">
              expand_more
            </span>
            <p className="text-gray-400 text-[11px] font-mono-data uppercase">
              Explorer
            </p>
          </div>
          <div className="ml-4 mt-1 space-y-1">
            <div className="flex items-center gap-2 px-2 py-1 cursor-pointer hover:bg-[#2A2A2A] rounded transition-colors">
              <span className="material-symbols-outlined text-sm text-gray-500">
                folder
              </span>
              <p className="text-gray-400 text-[10px] font-mono-data">Music</p>
            </div>
            <div className="flex items-center gap-2 px-2 py-1 cursor-pointer hover:bg-[#2A2A2A] rounded transition-colors">
              <span className="material-symbols-outlined text-sm text-gray-500">
                folder
              </span>
              <p className="text-gray-400 text-[10px] font-mono-data">
                Documents
              </p>
            </div>
            <div className="flex items-center gap-2 px-2 py-1 cursor-pointer hover:bg-[#2A2A2A] rounded transition-colors">
              <span className="material-symbols-outlined text-sm text-gray-500">
                folder
              </span>
              <p className="text-gray-400 text-[10px] font-mono-data">
                Downloads
              </p>
            </div>
            <div className="flex items-center gap-2 px-2 py-1 cursor-pointer hover:bg-[#2A2A2A] rounded transition-colors">
              <span className="material-symbols-outlined text-sm text-gray-500">
                folder
              </span>
              <p className="text-gray-400 text-[10px] font-mono-data">
                Projects
              </p>
            </div>
            <div className="flex items-center gap-2 px-2 py-1 cursor-pointer hover:bg-[#2A2A2A] rounded transition-colors">
              <span className="material-symbols-outlined text-sm text-gray-500">
                folder
              </span>
              <p className="text-gray-400 text-[10px] font-mono-data">
                Desktop
              </p>
            </div>
            <div className="flex items-center gap-2 px-2 py-1 cursor-pointer hover:bg-[#2A2A2A] rounded transition-colors">
              <span className="material-symbols-outlined text-sm text-gray-500">
                folder
              </span>
              <p className="text-gray-400 text-[10px] font-mono-data">Videos</p>
            </div>
            <div className="flex items-center gap-2 px-2 py-1 cursor-pointer hover:bg-[#2A2A2A] rounded transition-colors">
              <span className="material-symbols-outlined text-sm text-gray-500">
                folder
              </span>
              <p className="text-gray-400 text-[10px] font-mono-data">
                Applications
              </p>
            </div>
            <div className="flex items-center gap-2 px-2 py-1 cursor-pointer hover:bg-[#2A2A2A] rounded transition-colors">
              <span className="material-symbols-outlined text-sm text-gray-500">
                folder
              </span>
              <p className="text-gray-400 text-[10px] font-mono-data">
                Archives
              </p>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
