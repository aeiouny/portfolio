

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
    
}