import React from "react";

export default function TopAppBar() {
  return (
    <header className="flex justify-between items-center h-10 w-full px-2 bg-[#121212] border-b border-[#2A2A2A]">
      <div className="flex items-center gap-4">
        <span className="font-black text-[#00CCFF] italic tracking-tighter text-headline-md">
          PORTFOLIO
        </span>
        <nav className="hidden md:flex h-full items-center">
          <a
            className="px-3 h-full flex items-center font-inter text-[11px] uppercase tracking-wider text-gray-400 hover:bg-[#2A2A2A] hover:text-white transition-colors duration-100 ease-in-out"
            href="#"
          >
            File
          </a>
          <a
            className="px-3 h-full flex items-center font-inter text-[11px] uppercase tracking-wider text-gray-400 hover:bg-[#2A2A2A] hover:text-white transition-colors duration-100 ease-in-out"
            href="#"
          >
            View
          </a>
          <a
            className="px-3 h-full flex items-center font-inter text-[11px] uppercase tracking-wider text-gray-400 hover:bg-[#2A2A2A] hover:text-white transition-colors duration-100 ease-in-out"
            href="#"
          >
            Export
          </a>
          <a
            className="px-3 h-full flex items-center font-inter text-[11px] uppercase tracking-wider text-[#00CCFF] border-b border-[#00CCFF] bg-[#2A2A2A]"
            href="#"
          >
            Performance
          </a>
        </nav>
      </div>
      <div className="flex items-center gap-2">
        <span className="material-symbols-outlined text-[#00CCFF] text-sm">
          schedule
        </span>
        <span className="material-symbols-outlined text-gray-400 text-sm">
          settings
        </span>
        <span className="material-symbols-outlined text-gray-400 text-sm">
          help
        </span>
      </div>
    </header>
  );
}
