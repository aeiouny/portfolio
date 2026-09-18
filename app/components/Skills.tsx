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
    <section id="skills" className="space-y-6 pt-6">
      <h2 className="font-mono text-xs font-semibold tracking-wider uppercase text-emerald-400">
        // Technical Skills
      </h2>

      <div className="space-y-4">
        {skillData.map((group) => (
          <div
            key={group.category}
            className="rounded-2xl border border-slate-800/80 bg-slate-900/40 p-5 transition-all hover:border-slate-700/80 flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-6"
          >
            <div className="sm:w-32 flex-shrink-0">
              <h3 className="font-mono text-xs font-semibold uppercase tracking-wider text-slate-400 sm:pt-1.5">
                {group.category}
              </h3>
            </div>

            <div className="flex flex-wrap gap-2 flex-grow">
              {group.items.map((skill) => (
                <div
                  key={skill.name}
                  className="flex items-center gap-2 rounded-xl border border-slate-800 bg-slate-950/70 px-3 py-1.5 text-xs text-slate-300 transition-colors hover:border-slate-700 hover:text-white"
                >
                  <span className="flex-shrink-0">{skill.icon}</span>
                  <span className="font-mono text-[11px] font-medium">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}