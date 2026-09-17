import ProjectCard from './ProjectCard'

const projects = [
    {
        title: '',
        description: '',
        techStack: [],
        githubUrl: '',
        liveUrl: ''
    },
    {
        title: '',
        description: '',
        techStack: [],
        githubUrl: '',
    },
    {
        title: '',
        description: '',
        techStack: [],
        githubUrl: '',
    }
    
];

export default function Projects() {
    return (
        <section id="projects" className="py-20">
            <div>
                <h2>Featured Projects</h2>
            </div>

            <div>
                {projects.map((project) => (
                    <ProjectCard key={project.title} {...project} />
                ))}
            </div>
        </section>
    )
}