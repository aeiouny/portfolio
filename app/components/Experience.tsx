
interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  skills: string[];
  description: string[];
}

const experiences: ExperienceItem[] = [
  {
    role: "Graduate Researcher",
    company: "San Jose State University",
    period: "August 2026 – Present",
    skills: ["Python", "Machine Learning", "Data Pipelines", "Benchmarking", "Git"],
    description: [
      "Building data pipelines to clean and validate biometric datasets for dynamic BAC ML models.",
      "Writing automated benchmark suites to compare regression models against standing baselines.",
    ],
  },
  {
    role: "Technical Operations Intern",
    company: "Levy Operations",
    period: "September 2025 - February 2026",
    skills: ["Technical Support", "SLA Resolution", "Internal Docs", "Troubleshooting"],
    description: [
        "Handled technical support tickets across teams while keeping a 98%+ on-time SLA resolution rate.",
        "Wrote internal troubleshooting guides to help onboard new team members and speed up ticket resolution."
    ],
  },
  {
    role: "Software Engineer Intern",
    company: "San Jose State University",
    period: "June 2025 – August 2025",
    skills: ["FastAPI", "Python", "SQLite", "Docker", "Nginx", "React.js", "TailwindCSS", "Prometheus", "Grafana"],
    description: [
      "Built a URL shortening service with FastAPI, SQLite, and React, packaged using Docker and Nginx.",
      "Added URL expiration logic and set up Prometheus and Grafana dashboards to monitor server metrics.",
    ],
  },
  {
    role: "Undergraduate Researcher",
    company: "San Jose State University",
    period: "August 2024 – May 2025",
    skills: ["K3s", "Kubernetes", "Raspberry Pi", "Docker", "GitHub Actions", "Prometheus", "Grafana", "Next.js"],
    description: [
      "Set up a K3s Kubernetes cluster on 4 Raspberry Pis to host multi-tenant Docker apps.",
      "Configured CI/CD deployment workflows with GitHub Actions and tracked cluster CPU/RAM in Next.js.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="space-y-6 pt-6">
      <h2 className="font-mono text-xs font-semibold tracking-wider uppercase text-emerald-400">
        // Experience
      </h2>

      <div className="relative border-l border-slate-800/80 ml-2 pl-4 sm:pl-6 space-y-6">
        {experiences.map((exp, index) => (
          <div key={index} className="relative group">
            <div className="absolute -left-[21px] sm:-left-[29px] top-1.5 h-2.5 w-2.5 rounded-full border border-emerald-400/80 bg-slate-950 group-hover:bg-emerald-400 transition-colors"/>
            
            <div className="rounded-2xl border border-slate-800/80 bg-slate-900/40 p-5 sm:p-6 transition-all hover:border-slate-700 hover:bg-slate-900/70 space-y-3">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                <div>
                  <h3 className="text-base font-semibold text-white group-hover:text-emerald-400 transition-colors">
                    {exp.role}
                  </h3>
                  <p className="text-xs font-medium text-emerald-400/90 mt-0.5">
                    {exp.company}
                  </p>
                </div>
                <span className="font-mono text-xs text-slate-500 self-start sm:self-auto">
                  {exp.period}
                </span>
              </div>

              <ul className="space-y-2 text-xs sm:text-sm text-slate-400 leading-relaxed list-disc list-outside pl-4">
                {exp.description.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
              
              <div>
                {exp.skills.map((skill, sIndex) => (
                  <span
                    key={sIndex}
                    className="text-[11px] font-mono px-2 py-0.5 mx-1 rounded bg-slate-800/60 text-slate-300 border border-slate-700/50"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            
          </div>
        ))}
      </div>
    </section>
  );
}