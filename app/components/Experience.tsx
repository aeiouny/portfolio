
interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  description: string[];
}

const experiences: ExperienceItem[] = [
  {
    role: "Graduate Researcher",
    company: "San Jose State University",
    period: "August 2026 – Present",
    description: [
      "Co-design an end-to-end machine learning pipeline to predict dynamic BAC over static formulas",
      "Engineer structured data ingestion and validation to standardize biometric datasets for model training",
      "Implement Git version control, modular project architecture, and technical documentation across teams",
      "Develop automated benchmarking suites to evaluate non-linear regression models against baselines",
    ],
  },
  {
    role: "Technical Operations Intern",
    company: "Levy Operations",
    period: "September 2025 - February 2026",
    description: [
        "Resolved cross-functional technical inquiries while maintaining a 98%+ on-time SLA resolution rate",
        "Authored internal troubleshooting documentation to streamline onboarding and reduce ticket resolution times"
    ],
  },
  {
    role: "Software Engineer Intern",
    company: "San Jose State University",
    period: "June 2025 – August 2025",
    description: [
      "Built a URL shortening service using Python’s FastAPI library, SQLite, Nginx and Docker",
      "Leveraged the Python SQLite3 library to store URLs, returning an HTTP 302 redirect to the original link",
      "Added a feature to add expiration dates to URLs, managed data with React.js, TailwindCSS and DaisyUI",
      "Deployed the UI and backend with Docker and Nginx, monitored performance with Prometheus and Grafana",
    ],
  },
  {
    role: "Undergraduate Researcher",
    company: "San Jose State University",
    period: "August 2024 – May 2025",
    description: [
      "Architected a K3s PaaS on a 4-node Raspberry Pi cluster to automate multi-tenant Docker orchestration",
      "Built CI/CD build pipelines using custom GitHub Actions bots and self-hosted runners for remote builds",
      "Integrated Prometheus and Grafana telemetry with Next.js dashboards to monitor pod CPU and RAM",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="space-y-6 pt-6">
      <h2 className="font-mono text-xs font-semibold tracking-wider uppercase text-emerald-400">
        // Experience
      </h2>

      <div className="space-y-4">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="group rounded-2xl border border-slate-800/80 bg-slate-900/40 p-6 transition-all hover:border-slate-700 hover:bg-slate-900/70"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
              <h3 className="text-base font-semibold text-white group-hover:text-emerald-400 transition-colors">
                {exp.role}
              </h3>
              <span className="font-mono text-xs text-slate-500">
                {exp.period}
              </span>
            </div>

            <p className="text-xs font-medium text-emerald-400/90 mt-0.5">
              {exp.company}
            </p>

            <ul className="mt-4 space-y-2 text-xs sm:text-sm text-slate-400 leading-relaxed list-disc list-outside pl-4">
              {exp.description.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}