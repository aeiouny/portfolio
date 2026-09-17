

export default function Navbar() {
  return (
    <header className="bg-slate-950 border-b border-slate-800">
        <nav className="flex items-center justify-between">
          <div className="flex items-center gap-6">
            <a href='#about' className="hover:text-teal-400 transition-colors">
              About
            </a>
            <a href='#experience' className="hover:text-teal-400 transition-colors">
              Experience
            </a>
            <a href='#projects' className="hover:text-teal-400 transition-colors">
              Projects
            </a>
            <a href='#technologies' className="hover:text-teal-400 transition-colors">
              Technologies
            </a>
            <a href='#contact' className="hover:text-teal-400 transition-colors">
              Contact
            </a>
          </div>
            <a>Resume</a>
        </nav>
    </header>
  );
}