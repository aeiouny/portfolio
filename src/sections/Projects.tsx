import ArrowUpRight from "@/assets/icons/arrow-up-right.svg"

const projects = [
    {
        title: "Koob.io",
        tech: "Python, FastAPI, Next.js, React, PostgreSQL, Docker, Kubernetes",
        year: "2025",
        description: [
            { text: "a" },
            { text: "b" },
            { text: "c" },
        ],
        link: ""
    },
    {
        title: "Fren2Meet",
        tech: "React, Node.js, Express.js, MongoDB, Mongoose, JWT",
        year: "2024",
        description: [
            { text: "a" },
            { text: "b" },
            { text: "c" },
        ],
        link: ""
    },
    {
        title: "Venue",
        tech: "Flutter, Dart, Google APIs, Firebase",
        year: "2024",
        description: [
            { text: "a" },
            { text: "b" },
            { text: "c" },
        ],
        link: ""
    },
    {
        title: "BugTracker",
        tech: "JavaFX, Java, SQLite",
        year: "2023",
        description: [
            { text: "a" },
            { text: "b" },
            { text: "c" },
        ],
        link: ""
    },
    {
        title: "EmToCha",
        tech: "Python, Flask, HTML, CSS, Bootstrap, SQLAlchemy, SQLite",
        year: "2023",
        description: [
            { text: "a" },
            { text: "b" },
            { text: "c" },
        ],
        link: ""
    }
]

export const Projects = () => {
    return (
        <div>
            <div className="container">
                <div className="flex justify-center">
                    <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 bg-clip-text text-transparent">
                        Real-World Results
                    </p>
                </div>
                <h2 className="mt-6 font-calis text-3xl text-center ">Featured Projects</h2>
                <p className="text-center text-white/60">See how I transformed concepts 
                    into engaging digital experiences.
                </p>
                <div className="flex flex-col mt-10">
                    {projects.map(project => (
                        <div key={project.title} className="p-8 bg-gray-800 rounded-3xl relative z-0 after:z-10 
                        overflow-hidden after:content-[''] after:absolute after:inset-0 after:outline-2 after:outline 
                        after:-outline-offset-2 after:rounded-3xl after:outline-white/20">
                            <div>
                                <div className="inline-flex gap-2 uppercase tracking-widest font-bold text-smbg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text">
                                    <span>{project.tech}</span>
                                    <span>&bull;</span>
                                    <span>{project.year}</span>
                                </div>
                            </div>
                            <h3 className="mt-2 font-calis text-2xl ">{project.title}</h3>
                            <hr className="mt-4 border-t-2 border-white/5"/>
                            <ul className="flex flex-col gap-4 mt-4">
                                {project.description.map((desc) => (
                                    <li className="flex gap-2 text-sm text-white/50">
                                        <span>{desc.text}</span>
                                    </li>
                                ))}
                            </ul>
                            <a href={project.link}>
                                <button className="inline-flex items-center justify-center gap-2 mt-8 h-12 w-full rounded-xl bg-white text-gray-950 font-semibold">
                                    <span>Github Repo</span>
                                    <ArrowUpRight className="size-4"/>
                                </button>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}