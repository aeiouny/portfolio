

interface ProjectProps {
    title: string;
    description: string;
    techStack: string[];
    githubUrl: string;
    liveUrl?: string;
    imageUrl?: string;
}

export default function ProjectCard({
  title,
  description,
  techStack,
  githubUrl,
  liveUrl,
  imageUrl,
}: ProjectProps) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-slate-800/80 bg-slate-900/40 transition-all hover:border-slate-700 hover:bg-slate-900/70 flex flex-col justify-between">
      <div>
        <div className="relative aspect-video w-full overflow-hidden border-b border-slate-800/80 bg-slate-950">
          {imageUrl ? (
            <img
              src={imageUrl}
              alt={title}
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-slate-950/60 font-mono text-xs text-slate-600">
              [Preview Placeholder]
            </div>
          )}
        </div>

        <div className="p-6 space-y-2">
          <h3 className="text-base font-semibold text-white group-hover:text-emerald-400 transition-colors">
            {title}
          </h3>
          <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
            {description}
          </p>
        </div>
      </div>

      <div className="p-6 pt-0 space-y-4">
        <div className="flex flex-wrap gap-2 font-mono text-[11px] pt-3 border-t border-slate-800/60">
          {techStack.map((tech) => (
            <span
              key={tech}
              className="rounded-md border border-slate-800 bg-slate-950/70 px-2 py-0.5 text-slate-300"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-4 font-mono text-xs">
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noreferrer"
              className="text-slate-400 hover:text-emerald-400 transition-colors"
            >
              GitHub ↗
            </a>
          )}

          {Boolean(liveUrl) && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noreferrer"
              className="text-emerald-400 hover:text-emerald-300 transition-colors font-semibold"
            >
              Live Demo ↗
            </a>
          )}
        </div>

      </div>
    </article>
  );
}