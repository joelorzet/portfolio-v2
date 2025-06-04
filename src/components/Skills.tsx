import {
    Hexagon,
    Layout,
    Server,
    Globe,
    ReactIcon,
    AngularIcon,
    TailwindIcon,
    TypeScriptIcon,
    NestJSIcon,
    NodeJSIcon,
    ExpressIcon,
    EthereumIcon,
    StellarIcon,
    AptosIcon,
    DockerIcon,
    CICDIcon,
    GitHubIcon,
    ORMIcon,
    CypressIcon,
} from '@/assets/icons';

type Skill = {
    label: string;
    icon: React.ReactNode;
};

type SkillCategory = {
    name: string;
    icon: React.ReactNode;
    skills: Skill[];
};

export function Skills() {
    const iconSize = 32;
    const skillCategories: SkillCategory[] = [
        {
            name: 'Frontend',
            icon: <Layout className="w-6 h-6 text-indigo-400" />,
            skills: [
                { label: 'React', icon: <ReactIcon className="w-6 h-6" width={iconSize} height={iconSize} /> },
                { label: 'Angular', icon: <AngularIcon className="w-6 h-6" width={iconSize} height={iconSize} /> },
                {
                    label: 'Tailwind CSS',
                    icon: <TailwindIcon className="w-6 h-6" width={iconSize} height={iconSize} />,
                },
                {
                    label: 'TypeScript',
                    icon: <TypeScriptIcon className="w-6 h-6" width={iconSize} height={iconSize} />,
                },
            ],
        },
        {
            name: 'Backend',
            icon: <Server className="w-6 h-6 text-blue-400" />,
            skills: [
                { label: 'NestJS', icon: <NestJSIcon className="w-6 h-6" width={iconSize} height={iconSize} /> },
                { label: 'Node.js', icon: <NodeJSIcon className="w-6 h-6" width={iconSize} height={iconSize} /> },
                { label: 'Express', icon: <ExpressIcon className="w-6 h-6" width={iconSize} height={iconSize} /> },
                { label: 'TypeORM', icon: <ORMIcon className="w-6 h-6" width={iconSize} height={iconSize} /> },
            ],
        },
        {
            name: 'Blockchain',
            icon: <Hexagon className="w-6 h-6 text-purple-400" />,
            skills: [
                { label: 'Ethereum', icon: <EthereumIcon className="w-6 h-6" width={iconSize} height={iconSize} /> },
                { label: 'Stellar', icon: <StellarIcon className="w-6 h-6" width={iconSize} height={iconSize} /> },
                { label: 'Aptos', icon: <AptosIcon className="w-6 h-6" width={iconSize} height={iconSize} /> },
            ],
        },
        {
            name: 'Other',
            icon: <Globe className="w-6 h-6 text-green-400" />,
            skills: [
                { label: 'Git/GitHub', icon: <GitHubIcon className="w-6 h-6" width={iconSize} height={iconSize} /> },
                { label: 'Docker', icon: <DockerIcon className="w-6 h-6" width={iconSize} height={iconSize} /> },
                { label: 'CI/CD', icon: <CICDIcon className="w-6 h-6" width={iconSize} height={iconSize} /> },
                {
                    label: 'E2E Testing',
                    icon: <CypressIcon className="w-6 h-6" width={iconSize} height={iconSize} />,
                },
            ],
        },
    ];

    return (
        <section id="skills" className="py-20 bg-gradient-to-b from-slate-900 to-slate-800">
            <div className="container px-4 mx-auto sm:px-6 lg:px-8">
                <div className="mb-16 text-center">
                    <h2 className="mb-2 text-3xl font-bold">My Skills</h2>
                    <div className="w-20 h-1 mx-auto mb-6 bg-indigo-500"></div>
                    <p className="max-w-3xl mx-auto text-slate-300">
                        I've worked with a wide range of technologies throughout my career, from frontend frameworks to
                        backend solutions and blockchain development.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
                    {skillCategories.map((category, index) => (
                        <div
                            key={index}
                            className="p-6 transition-all duration-300 border bg-slate-800/80 backdrop-blur-sm rounded-xl border-slate-700 hover:border-indigo-500/50"
                        >
                            <div className="flex items-center mb-6">
                                <div className="p-3 mr-4 rounded-lg bg-slate-700">{category.icon}</div>
                                <h3 className="text-xl font-semibold">{category.name}</h3>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                {category.skills.map((skill, skillIndex) => (
                                    <div
                                        key={skillIndex}
                                        className="flex flex-col items-center p-4 transition-colors rounded-lg bg-slate-700/50 hover:bg-slate-700 group"
                                    >
                                        <div className="w-12 h-12 p-2 mb-2 transition duration-300 rounded-lg bg-slate-800 group-hover:bg-indigo-500/10 hover:scale-110">
                                            {skill.icon}
                                        </div>
                                        <span className="text-sm text-slate-300">{skill.label}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* TODO: Add Carousel motion component for the technologies I work with */}
                {/* Technology Icons Section */}
                {/* <div className="pt-10 mt-16 border-t border-slate-700">
                    <h3 className="mb-10 text-xl font-semibold text-center">Technologies I work with</h3>
                    <div className="flex flex-wrap justify-center gap-8 sm:gap-10 md:gap-12">
                        {['React', 'Angular', 'Node.js', 'NestJS', 'TypeScript', 'Ethereum', 'Stellar', 'Aptos'].map(
                            (tech, index) => (
                                <div key={index} className="flex flex-col items-center group">
                                    <div className="flex items-center justify-center w-16 h-16 mb-2 transition-colors border bg-slate-800 rounded-2xl border-slate-700 group-hover:border-indigo-500">
                                        <span className="font-mono text-sm text-indigo-400">
                                            {tech.substring(0, 2)}
                                        </span>
                                    </div>
                                    <span className="text-sm transition-colors text-slate-400 group-hover:text-slate-200">
                                        {tech}
                                    </span>
                                </div>
                            ),
                        )}
                    </div>
                </div> */}
            </div>
        </section>
    );
}
