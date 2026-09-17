import React from "react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-800 bg-slate-950/80 backdrop-blur-md">
      <div className="max-w-2xl mx-auto px-6 h-14 flex items-center justify-between">
        
        <a 
          href="#about" 
          className="font-mono text-sm font-semibold text-white tracking-tight hover:text-teal-400 transition-colors"
        >
          JohnnyNguyen<span className="text-teal-400">.dev</span>
        </a>

        <nav className="flex items-center gap-5 text-xs text-slate-400 font-medium">
          <a href="#experience" className="hover:text-slate-200 transition-colors">
            Experience
          </a>
          <a href="#projects" className="hover:text-slate-200 transition-colors">
            Projects
          </a>
          <a href="#skills" className="hover:text-slate-200 transition-colors">
            Skills
          </a>
          
          <a 
            href="/resume.pdf" 
            target="_blank" 
            rel="noreferrer"
            className="px-2.5 py-1 rounded-md border border-slate-700 bg-slate-900 text-teal-400 hover:border-teal-400/50 hover:bg-slate-850 transition-colors font-mono text-[11px]"
          >
            CV ↗
          </a>
        </nav>
      </div>
    </header>
  );
}