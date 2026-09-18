import ProjectCard from './ProjectCard'

const projects = [
    {
        title: 'SeekPoint',
        description: 'Media Processing Pipeline',
        techStack: ['FastAPI', 'Redis Streams', 'FFmpeg', 'AWS S3', 'Prometheus', 'Grafana'],
        githubUrl: 'https://github.com/aeiouny/seekpoint',
        liveUrl: ''
    },
    {
        title: 'Calibre',
        description: 'Collaborative Workspace',
        techStack: ['TypeScript', 'Node.js', 'WebSockets', 'Next.js', 'Redis Pub/Sub', 'PostgreSQL'],
        githubUrl: 'https://github.com/aeiouny/calibre',
    },
    {
        title: 'Allot',
        description: 'Campus Resource Scheduling Platform',
        techStack: ['Spring Boot, PostgreSQL, Redis, Next.js, Docker'],
        githubUrl: '',
    },
    {
        title: 'Campus Marketplace',
        description: 'E-Commerce Platform for Students',
        techStack: ['Spring Boot', 'PostgreSQL', 'Next.js', 'AWS S3', 'JWT', 'OpenAI API'],
        githubUrl: '',
    },
    {
        title: 'Fren2Meet',
        description: 'Collaborative Group Scheduling Platform',
        techStack: ['React', 'Node.js', 'Express.js', 'MongoDB', 'JWT'],
        githubUrl: '',
    },
    {
        title: 'EmToCha',
        description: '',
        techStack: [],
        githubUrl: 'https://github.com/aeiouny/EMTOCHA',
    }
    
];

export default function Projects() {
  return (
    <section id="projects" className="space-y-6 pt-6">
      <h2 className="font-mono text-xs font-semibold tracking-wider uppercase text-emerald-400">
        // Featured Projects
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
}