import ProjectCard from './ProjectCard'

const projects = [
    {
        title: 'SeekPoint',
        description: 'Asynchronous video processing pipeline that ingests media, generates audio waveforms via FFmpeg, and monitors task queues with Redis Streams.',
        techStack: ['FastAPI', 'Redis Streams', 'FFmpeg', 'AWS S3', 'Prometheus', 'Grafana'],
        githubUrl: 'https://github.com/aeiouny/seekpoint',
        liveUrl: ''
    },
    {
        title: 'Template 1',
        description: '',
        techStack: [],
        githubUrl: '',
    },
    {
        title: 'Template 2',
        description: '',
        techStack: [],
        githubUrl: '',
    },
    {
        title: 'Campus Marketplace',
        description: 'Peer-to-peer student marketplace featuring listing content moderation and a chat bot powered by OpenAI API and AWS S3 file hosting.',
        techStack: ['Spring Boot', 'PostgreSQL', 'Next.js', 'AWS S3', 'JWT', 'OpenAI API'],
        githubUrl: '',
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