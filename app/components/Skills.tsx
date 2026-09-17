import {
    SiPython, SiJavascript, SiTypescript, SiReact, SiNextdotjs, SiTailwindcss, SiBootstrap,
    SiExpress, SiNodedotjs,
    SiSqlalchemy, SiMysql, SiPostgresql, SiMongodb,
    SiGit, SiDocker, SiKubernetes, SiNginx, SiPostman, SiCloudflare, SiPrometheus, SiGrafana
} from 'react-icons/si'

interface SkillItem {
    name: string;
    icon: React.ReactNode;
}

interface SkillCategory {
    category: string;
    items: SkillItem[];
}

const skillData: SkillCategory[] = [
    {
        category: 'FRONTEND',
        items: [
            { name: 'JavaScript', icon: <SiJavascript className="text-yellow-400 text-xl"/>},
            { name: 'TypeScript', icon: <SiTypescript className="text-blue-500 text-xl"/>},
            { name: 'React', icon: <SiReact className="text-cyan-400 text-xl"/>},
            { name: 'Next.Js', icon: <SiNextdotjs className="text-white text-xl"/>},
            { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-teal-400 text-xl"/>},
            { name: 'Bootstrap', icon: <SiBootstrap className="text-purple-600 text-xl"/>}
        ],
    },
    {
        category: 'BACKEND',
        items: [
            { name: 'Express.JS', icon: <SiExpress className="text-white text-xl"/>},
            { name: 'Node.JS', icon: <SiNodedotjs className="text-green-500 text-xl"/>},
        ],
    },
    {
        category: 'DATABASE',
        items: [
            { name: 'MongoDB', icon: <SiMongodb className="text-emerald-500 text-xl"/>},
            { name: 'MySQL', icon: <SiMysql className="text-blue-400 text-xl"/>},
            { name: 'PostgresSQL', icon: <SiPostgresql className="text-sky-500 text-xl"/>},
            { name: 'SQLAlchemy', icon: <SiSqlalchemy className="text-red-600 text-xl"/>},
        ],
    },
    {
        category: 'TOOLS',
        items: [
            { name: 'Cloudflare', icon: <SiCloudflare className="text-orange-500 text-xl"/>},
            { name: 'Docker', icon: <SiDocker className="text-blue-500 text-xl"/>},
            { name: 'Git', icon: <SiGit className="text-orange-500 text-xl"/>},
            { name: 'Grafana', icon: <SiGrafana className="text-orange-600 text-xl"/>},
            { name: 'Kubernetes', icon: <SiKubernetes className="text-blue-600 text-xl"/>},
            { name: 'Nginx', icon: <SiNginx className="text-emerald-600 text-xl"/>},
            { name: 'Postman', icon: <SiPostman className="text-orange-500 text-xl"/>},
            { name: 'Prometheus', icon: <SiPrometheus className="text-orange-600 text-xl"/>},
        ],
    },
]

export default function Skills() {
    return (
        <section>
            <div>
                <h2 className="text-red-400">Technologies Learned</h2>
            </div>
            
            <div>
                {skillData.map((group) => (
                    <div key={group.category}>
                        {/* Left Side */}
                        <div>
                            <h3>{group.category}</h3>
                        </div>

                        {/* Right Side */}
                        <div>
                            {group.items.map((skill) => (
                                <div key={skill.name}>
                                    <span>{skill.icon}</span>
                                    <span>{skill.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

        </section>
    )
}