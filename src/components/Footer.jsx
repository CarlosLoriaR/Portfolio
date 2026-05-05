import React, { useState, useEffect } from "react";

const contactLinks = [
  {
    id: 1,
    icon: "mail",
    label: "Email",
    href: "mailto:carlos@example.com",
  },
  {
    id: 2,
    icon: "code",
    label: "GitHub",
    href: "https://github.com/CarlosLoriaR",
  },
  {
    id: 3,
    icon: "work",
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/carlosloriar/",
  },
];

export default function Footer() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const [ramUsage] = useState(62);
  const [cpuUsage] = useState(45);
  const [volume] = useState(75);
  const [battery] = useState(88);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <footer className="bg-[#1E1E1E] border-t border-[#2A2A2A] flex flex-col">
      <div className="bg-[#2A2A2A] px-4 h-6 flex items-center justify-between">
        <span className="text-[#00CCFF] text-[10px] font-bold uppercase">
          Contact Me
        </span>
        <div className="text-gray-500 text-[10px]">TOTAL_LINKS: 03</div>
      </div>
      <div className="h-24 flex-1 flex items-center justify-between px-4 gap-4 flex-col md:flex-row md:pb-0 pb-2">
        <div className="flex gap-3">
          {contactLinks.map((item) => (
            <a
              key={item.id}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className=" px-2 py-2 text-label-bold text-white uppercase flex items-center gap-2 hover:bg-[#3A3A3A] hover:border-[#00CCFF] transition-all cursor-pointer"
            >
              <span className="material-symbols-outlined text-sm">
                {item.icon}
              </span>
              {item.label}
            </a>
          ))}
        </div>
        <div className="hidden md:flex items-center gap-6 text-gray-500 text-[10px]">
          <div className="flex items-center gap-1">
            <span className="material-symbols-outlined text-sm">memory</span>
            <span>{ramUsage}%</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="material-symbols-outlined text-sm">
              settings_input_component
            </span>
            <span>{cpuUsage}%</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="material-symbols-outlined text-sm">volume_up</span>
            <span>{volume}%</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="material-symbols-outlined text-sm">
              battery_full
            </span>
            <span>{battery}%</span>
          </div>
          <div className="flex items-center gap-1 text-white font-mono-data border-l border-[#2A2A2A] pl-6">
            <span className="material-symbols-outlined text-sm">schedule</span>
            <span>{time}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
