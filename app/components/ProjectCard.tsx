

interface ProjectProps {
    title: string;
    description: string;
    techStack: string[];
    githubUrl: string;
    liveUrl?: string;
}

export default function ProjectCard({
    title,
    description,
    techStack,
    githubUrl,
    liveUrl,
}: ProjectProps) {
    return (
        <article>
            <div>
                <h3>{title}</h3>
                <p>{description}</p>
            </div>

            <div>
                <div>
                    {techStack.map((tech) => (
                        <span key={tech}>{tech}</span>
                    ))}
                </div>

                <div>
                    <a 
                        href={githubUrl}
                        target="_blank"
                        rel="noreferrer"
                    >
                        GitHub
                    </a>
                    {liveUrl && (
                        <a
                            href={liveUrl}
                            target="_blank"
                            rel="noreferrer"
                        >
                            Live Demo
                        </a>
                    )}
                </div>
            </div>
        </article>
    )
}