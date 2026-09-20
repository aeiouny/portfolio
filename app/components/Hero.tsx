export default function Hero() {
  return (
    <section id="about" className="pt-16 pb-12 text-center space-y-6">
      
      <div className="space-y-3">
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white">
          Johnny Nguyen
        </h1>
        
        <p className="text-base sm:text-lg font-mono font-medium text-emerald-400">
          Software Engineer - Backend & Cloud Systems
        </p>
        
        <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-l text-xs sm:text-sm text-slate-400 font-mono">
          <span>M.S. Software Engineering @ SJSU</span>
          <span className="hidden sm:inline text-slate-700">•</span>
          <span>SAN FRANCISCO BAY AREA (Open to Remote / Relocation)</span>
        </div>
      </div>

      <p className="text-center text-sm sm:text-base text-slate-300 leading-relaxed max-w-xl mx-auto w-full px-4">
        Currently building distributed backend services, containerized infrastructure, and high-performance microservices using 
        <span className="text-white font-medium"> TypeScript</span>, <span className="text-white font-medium">PostgreSQL</span>, and <span className="text-white font-medium">Kubernetes</span>.
      </p>

        <div className="w-full flex flex-wrap justify-center items-center gap-3 pt-2 font-mono text-xs">
          <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="px-5 py-2.5 rounded-lg bg-emerald-500 text-slate-950 font-semibold hover:bg-emerald-400 transition-all shadow-md shadow-emerald-500/10 active:scale-95"
          >
              Resume ↗
          </a>
          <a
              href="https://github.com/aeiouny"
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2.5 rounded-lg border border-slate-800 bg-slate-900/80 text-slate-300 hover:border-slate-700 hover:text-white hover:bg-slate-900 transition-all active:scale-95"
          >
              GitHub ↗
          </a>
          <a
              href="https://linkedin.com/in/johnnyxn"
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2.5 rounded-lg border border-slate-800 bg-slate-900/80 text-slate-300 hover:border-slate-700 hover:text-white hover:bg-slate-900 transition-all active:scale-95"
          >
              LinkedIn ↗
          </a>
          <a
              href="mailto:johnnyxn@outlook.com"
              className="px-4 py-2.5 rounded-lg border border-transparent text-slate-400 hover:text-slate-200 transition-colors"
          >
              Get in Touch
          </a>
        </div>
    </section>
  );
}