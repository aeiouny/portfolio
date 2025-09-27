import { SectionHeader } from "@/components/SectionHeader";
import StarIcon from "@/assets/icons/star.svg"

const techSkills = [
    {
        title: 'Python',
        icon: '',
    },
    {
        title: 'TypeScript',
        icon: '',
    },
    {
        title: 'Java',
        icon: '',
    },
    {
        title: 'SQL',
        icon: '',
    },
    {
        title: 'React',
        icon: '',
    },
    {
        title: 'Express.js',
        icon: '',
    },
    {
        title: 'FastAPI',
        icon: '',
    },
    {
        title: 'PostgreSQL',
        icon: '',
    },
    {
        title: 'MongoDB',
        icon: '',
    },
    {
        title: 'Kubernetes',
        icon: '',
    },
    {
        title: 'Docker',
        icon: '',
    }
]

export const About = () => {
    return (
        <div className="pb-96">
            <SectionHeader 
                label="About Me" 
                title="Peek Into My World" 
                description="Learn More About Me"
            />
            <div>
                {/* Card 1 */}
                <div>
                    <StarIcon/>
                    <h3>Hobby 1</h3>
                    <p>Description</p>
                    {/* Image */}
                </div>
                {/* Card 2 */}
                <div>
                    <StarIcon/>
                    <h3>Programming Languages</h3>
                    <p>Technologies and tools used to build applications.</p>
                </div>
                <div>

                </div>
            </div>
        </div>
    );
}