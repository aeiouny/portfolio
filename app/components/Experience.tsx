
interface ExperienceItem {
    role: string;
    company: string;
    period: string;
    description: string[];
}

const experiences: ExperienceItem[] = [
    {
        role: 'Graduate Researcher',
        company: 'San Jose State University',
        period: 'August 2026 -- Present',
        description: [
            'Worked with academic advisors and researchers to translate scientific domain requirements into software architectures and models',
            'Implemented software engineering version control, code design, and technical documentation ensuring project reproducibility and maintainability',
            'Designed end-to-end pipelines to normalize and validate complex datasets used for algorithm training and evaluation',
            'Conducted iterative testing and benchmarking on predictive algorithms to measure and improve model performance'
        ],
    },
    {
        role: 'Software Engineer Intern',
        company: 'San Jose State University',
        period: 'June 2025 -- August 2025',
        description: [
            'Developed a production-ready URL shortening tool using technologies including FastAPI, SQLite, Nginx, and Docker, supporting proper handling of redirects using HTTP 302 code',
            'Implemented URL expiration feature using a React.js and Tailwind CSS-based UI where users can manage their link lifecycles properly',
            'Deployed Prometheus and Grafana tools to continuously analyze server performance and availability, enabling proactive issue detection',
            'Created CI/CD pipeline for continuous integration and delivery through GitHub actions, reducing manual and tedious work'
        ],
    },
    {
        role: 'Undergraduate Researcher',
        company: 'San Jose State University',
        period: 'August 2024 -- May 2025',
        description: [
            'Developed a PaaS where users can run Dockerized applications on their own Kubernetes cluster with live monitoring',
            'Set up GitHub OAuth for accessing repositories and Cloudflare Tunnel to route externally without compromising any infrastructure',
            'Configured Prometheus and Grafana for observability of the Kubernetes cluster and built monitoring dashboards using Next.js'
        ],
    }  
]


export default function Experience() {
    return (
        <section id="experience" className="py-20">
            <h2>Experience</h2>
            <div>
                {experiences.map((exp, index) => (
                    <div key={index}>
                        <div>
                            <h3>{exp.role} · {exp.company}</h3>
                            <p>{exp.period}</p>
                            <ul>
                                {exp.description.map((item, i) => (
                                    <li key={i}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}