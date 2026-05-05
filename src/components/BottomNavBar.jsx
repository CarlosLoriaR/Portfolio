import React from "react";

export default function BottomNavBar({ activeNav, onSectionChange }) {
  const navItems = [
    { id: "aboutme", icon: "person", label: "About", section: "aboutme" },
    { id: "experience", icon: "work", label: "Exp", section: "experience" },
    { id: "skillset", icon: "terminal", label: "Skills", section: "skillset" },
    { id: "projects", icon: "library_music", label: "Projects", section: "projects" },
  ];

  return (
    <nav className="fixed bottom-0 left-0 w-full z-40 flex justify-around items-center h-16 bg-[#121212] border-t border-[#2A2A2A] md:hidden">
      {navItems.map((item) => (
        <button
          key={item.id}
          onClick={() => onSectionChange(item.section)}
          className={`flex flex-col items-center justify-center flex-1 h-full transition-all ${
            activeNav === item.id
              ? "text-[#00CCFF] border-t-2 border-[#00CCFF] bg-[#1E1E1E]"
              : "text-gray-500 hover:text-white"
          }`}
        >
          <span className="material-symbols-outlined text-lg">
            {item.icon}
          </span>
          <span className="font-inter text-[9px] font-medium uppercase mt-1 tracking-widest">
            {item.label}
          </span>
        </button>
      ))}
    </nav>
  );
}
