import React from "react";

export default function HeroDecks() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-gutter bg-[#2A2A2A] border-b border-[#2A2A2A]">
      {/* Deck 1 */}
      <div className="bg-[#121212] p-4 flex flex-col gap-2">
        <div className="flex justify-between items-start">
          <div>
            <span className="bg-[#00CCFF] text-black text-[10px] px-1 font-bold">
              DECK 1
            </span>
            <h1 className="text-[24px] md:text-[28px] font-black text-white mt-2">
              Carlos Loria
            </h1>
            <p className="text-[#00CCFF] text-label-bold">
              FULL-STACK DEVELOPER
            </p>
          </div>
          <div className="text-right">
            <span className="text-white font-mono-data text-2xl">128.00</span>
            <p className="text-gray-500 text-[10px]">BPM</p>
          </div>
        </div>
        {/* Waveform Visualizer */}
        <div className="relative h-20 bg-black mt-2 overflow-hidden border border-[#2A2A2A]">
          <div className="absolute inset-0 flex items-center overflow-hidden">
            <div className="w-full h-16 opacity-80 flex animate-waveform-scroll">
              <div className="w-full h-full flex-shrink-0 waveform-bar" />
              <div className="w-full h-full flex-shrink-0 waveform-bar" />
              <div className="w-full h-full flex-shrink-0 waveform-bar" />
              <div className="w-full h-full flex-shrink-0 waveform-bar" />
              <div className="w-full h-full flex-shrink-0 waveform-bar" />
            </div>
          </div>
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-white z-10 transform -translate-x-1/2"></div>
        </div>
        <div className="flex gap-2 mt-2">
          <button className="bg-[#2A2A2A] border border-[#3C494E] px-4 py-1 text-label-bold text-white uppercase flex items-center gap-2 hover:bg-[#3A3A3A] transition-colors">
            CUE
          </button>
          <button className="bg-[#00CCFF] border border-[#00CCFF] px-4 py-1 text-label-bold text-black uppercase flex items-center gap-2 hover:bg-[#00B8E6] transition-colors">
            <span className="material-symbols-outlined text-sm">play_arrow</span> PLAY
          </button>
        </div>
      </div>

      {/* Deck 2 */}
      <div className="bg-[#121212] p-4 flex flex-col gap-2">
        <div className="flex justify-between items-start">
          <div>
            <span className="bg-gray-600 text-white text-[10px] px-1 font-bold">
              DECK 2
            </span>
            <h2 className="text-headline-lg font-black text-white mt-2">
              Professional Mode
            </h2>
            <p className="text-[#D30017] text-label-bold">
              STATUS: READY FOR HIRE
            </p>
          </div>
          <div className="text-right">
            <span className="text-white font-mono-data text-2xl">4/4</span>
            <p className="text-gray-500 text-[10px]">BEAT</p>
          </div>
        </div>
        {/* Info Panel in Deck 2 */}
        <div className="mt-2 grid grid-cols-2 gap-2 h-20">
          <div className="bg-[#1E1E1E] border border-[#2A2A2A] p-2 flex flex-col justify-center">
            <p className="text-[10px] text-gray-500 uppercase">Key Signature</p>
            <p className="text-white font-mono-data text-lg text-[#FFD44F]">
              TS-2024
            </p>
          </div>
          <div className="bg-[#1E1E1E] border border-[#2A2A2A] p-2 flex flex-col justify-center">
            <p className="text-[10px] text-gray-500 uppercase">Location</p>
            <p className="text-white font-mono-data text-lg">Vancouver, BC</p>
          </div>
        </div>
        <div className="flex justify-end gap-2 mt-2">
          <div className="flex items-center gap-2 px-3 py-1 bg-[#1E1E1E] border border-[#2A2A2A]">
            <div className="w-2 h-2 rounded-full bg-[#00CCFF] shadow-[0_0_8px_#00CCFF]"></div>
            <span className="text-[10px] text-white font-bold uppercase">
              SYNC
            </span>
          </div>
          <div className="flex items-center gap-2 px-3 py-1 bg-[#1E1E1E] border border-[#2A2A2A]">
            <div className="w-2 h-2 rounded-full bg-gray-600"></div>
            <span className="text-[10px] text-gray-500 font-bold uppercase">
              MASTER
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
