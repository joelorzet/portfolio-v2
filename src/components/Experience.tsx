import { Calendar, Briefcase } from '@/assets/icons';

type ExperienceItem = {
    id: number;
    title: string;
    company: string;
    period: string;
    description: string;
    technologies: string[];
};

export const Experience = () => {
    const experiences: ExperienceItem[] = [
        {
            id: 1,
            title: 'Senior Blockchain Developer',
            company: 'DeFi Solutions',
            period: '2021 - Present',
            description:
                'Leading the development of decentralized finance applications on Ethereum and Stellar networks. Implementing smart contracts and designing secure architecture for financial protocols.',
            technologies: ['Ethereum', 'Solidity', 'Web3.js', 'Stellar', 'React'],
        },
        {
            id: 2,
            title: 'Full Stack Developer',
            company: 'Tech Innovations Inc.',
            period: '2019 - 2021',
            description:
                'Developed and maintained full-stack web applications using React for frontend and NestJS for backend services. Implemented CI/CD pipelines and containerized applications with Docker.',
            technologies: ['React', 'NestJS', 'TypeScript', 'PostgreSQL', 'Docker'],
        },
        {
            id: 3,
            title: 'Frontend Developer',
            company: 'Creative Solutions',
            period: '2017 - 2019',
            description:
                'Built responsive and interactive user interfaces using Angular and modern CSS techniques. Collaborated with UX designers to implement pixel-perfect designs and optimize user experience.',
            technologies: ['Angular', 'SCSS', 'JavaScript', 'RxJS', 'RESTful APIs'],
        },
        {
            id: 4,
            title: 'Junior Web Developer',
            company: 'Digital Agency',
            period: '2015 - 2017',
            description:
                'Started as a junior developer working on various client projects. Gained experience with JavaScript frameworks and backend development with Node.js and Express.',
            technologies: ['JavaScript', 'Node.js', 'Express', 'MongoDB', 'HTML/CSS'],
        },
    ];

    return (
        <section id="experience" className="py-20 bg-slate-800/50">
            <div className="container px-4 mx-auto sm:px-6 lg:px-8">
                <div className="mb-16 text-center">
                    <h2 className="mb-2 text-3xl font-bold">Professional Experience</h2>
                    <div className="w-20 h-1 mx-auto mb-6 bg-indigo-500"></div>
                    <p className="max-w-3xl mx-auto text-slate-300">
                        My professional journey through various roles and technologies.
                    </p>
                </div>

                <div className="relative">
                    {/* Timeline line */}
                    <div className="absolute left-0 w-1 h-full transform md:left-1/2 md:-translate-x-1/2 bg-indigo-500/30"></div>

                    <div className="space-y-12">
                        {experiences.map((exp, index) => (
                            <div key={exp.id} className="relative">
                                {/* Timeline dot */}
                                <div className="absolute left-0 z-10 w-4 h-4 transform -translate-x-1/2 bg-indigo-500 rounded-full md:left-1/2 -translate-y-1/3"></div>

                                <div
                                    className={`flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                                >
                                    {/* Timeline date */}
                                    <div className="flex items-start justify-start pb-8 md:w-1/2 md:pb-0 md:justify-end">
                                        <div className={`px-4 ${index % 2 === 0 ? 'md:pr-16' : 'md:pl-0 md:pr-16'}`}>
                                            <div className="flex items-center mb-1 text-indigo-400">
                                                <Calendar className="w-4 h-4 mr-2" />
                                                <span className="text-sm">{exp.period}</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Timeline content */}
                                    <div className="pl-8 md:w-1/2 md:pl-16">
                                        <div
                                            className={`bg-slate-800 p-6 rounded-lg border-l-4 border-indigo-500 shadow-md transform transition-transform duration-300 hover:-translate-y-1 ${index % 2 === 0 ? 'md:mr-16' : ''}`}
                                        >
                                            <div className="flex items-start mb-3">
                                                <div className="p-2 mr-4 rounded-md bg-indigo-500/10">
                                                    <Briefcase className="w-5 h-5 text-indigo-400" />
                                                </div>
                                                <div>
                                                    <h3 className="text-xl font-bold">{exp.title}</h3>
                                                    <p className="text-indigo-400">{exp.company}</p>
                                                </div>
                                            </div>

                                            <p className="mb-4 text-slate-300">{exp.description}</p>

                                            <div className="flex flex-wrap gap-2">
                                                {exp.technologies.map((tech, techIndex) => (
                                                    <span
                                                        key={techIndex}
                                                        className="px-2 py-1 text-xs rounded bg-slate-700 text-slate-300"
                                                    >
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
