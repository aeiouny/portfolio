

export default function Footer() {
    return (
        <footer className="mt-20 border-t border-slate-800/80 py-8">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-slate-500">
        
        <p>© 2026 Johnny Nguyen. All rights reserved.</p>

        <div className="flex items-center gap-4">
          <span className="text-slate-600">Built with Next.js & Tailwind</span>
          <a
            href="mailto:johnnyxn@outlook.com"
            className="hover:text-emerald-400 transition-colors"
          >
            Email ↗
          </a>
        </div>

      </div>
    </footer>
    )
}