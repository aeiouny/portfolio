import React from "react";

export default function Hero() {
  return (
    <section id="about" className="pt-16 pb-12 text-center space-y-6">
      
      <div className="flex flex-col items-center gap-3">
        <div className="relative">
          <div className="h-24 w-24 rounded-full overflow-hidden border-2 border-slate-800 bg-slate-900 shadow-md">
            <img
              src="/profile.jpg"
              alt="Johnny Nguyen"
              className="h-full w-full object-cover"
            />
          </div>

          <span className="absolute bottom-1 right-1 flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-500 border-2 border-slate-950" />
          </span>
        </div>

        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-emerald-400 text-xs font-mono">
          <span className="h-2 w-2 rounded-full bg-emerald-400" />
          Available for Work
        </div>
      </div>

      <div className="space-y-1">
        <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
          Johnny Nguyen
        </h1>
        <p className="text-base sm:text-lg font-medium text-slate-400">
          Aspiring Software Engineer & CS Student
        </p>
      </div>

        <p className="text-center text-sm sm:text-base text-slate-400 leading-relaxed max-w-lg mx-auto w-full">
        Interested in web development, building accessible user interfaces, and solving real-world problems in collaborative engineering environments.
        </p>

        <div className="w-full flex flex-wrap justify-center items-center gap-3 pt-2 font-mono text-xs">
        <a
            href="https://github.com/aeiouny"
            target="_blank"
            rel="noreferrer"
            className="px-4 py-2 rounded-lg border border-slate-700 bg-slate-900 text-slate-200 hover:border-emerald-400/50 hover:text-emerald-400 transition-colors"
        >
            GitHub ↗
        </a>
        <a
            href="https://linkedin.com/in/johnnyxn"
            target="_blank"
            rel="noreferrer"
            className="px-4 py-2 rounded-lg border border-slate-700 bg-slate-900 text-slate-200 hover:border-emerald-400/50 hover:text-emerald-400 transition-colors"
        >
            LinkedIn ↗
        </a>
        <a
            href="mailto:johnnyxn@outlook.com"
            className="px-4 py-2 rounded-lg border border-transparent text-slate-400 hover:text-white transition-colors"
        >
            Get in Touch
        </a>
        </div>
    </section>
  );
}