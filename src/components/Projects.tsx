import { useState } from 'react';
import { ExternalLink, Github, Layers, Code, Database } from '@/assets/icons';

type Project = {
    id: number;
    title: string;
    description: string;
    image: string;
    technologies: string[];
    category: 'frontend' | 'backend' | 'blockchain' | 'all';
    links: {
        demo?: string;
        github?: string;
    };
};

export const Projects = () => {
    const [activeFilter, setActiveFilter] = useState<'all' | 'frontend' | 'backend' | 'blockchain'>('all');

    const projects: Project[] = [
        {
            id: 1,
            title: 'Crypto Portfolio Tracker',
            description:
                'A full-stack application for tracking cryptocurrency investments with real-time price updates and performance analytics.',
            image: 'https://images.pexels.com/photos/844124/pexels-photo-844124.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            technologies: ['React', 'Node.js', 'Express', 'MongoDB'],
            category: 'frontend',
            links: {
                demo: 'https://example.com',
                github: 'https://github.com',
            },
        },
        {
            id: 2,
            title: 'NFT Marketplace',
            description:
                'A decentralized marketplace for NFTs built on the Ethereum blockchain with MetaMask integration.',
            image: 'https://images.pexels.com/photos/8370752/pexels-photo-8370752.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            technologies: ['React', 'Solidity', 'Web3.js', 'IPFS'],
            category: 'blockchain',
            links: {
                demo: 'https://example.com',
                github: 'https://github.com',
            },
        },
        {
            id: 3,
            title: 'E-commerce API',
            description:
                'A robust backend API for e-commerce platforms with authentication, payment processing, and order management.',
            image: 'https://images.pexels.com/photos/5935794/pexels-photo-5935794.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            technologies: ['NestJS', 'PostgreSQL', 'TypeORM', 'JWT'],
            category: 'backend',
            links: {
                github: 'https://github.com',
            },
        },
        {
            id: 4,
            title: 'Stellar Payment Gateway',
            description:
                'A payment gateway built on the Stellar network for cross-border transactions with minimal fees.',
            image: 'https://images.pexels.com/photos/6771607/pexels-photo-6771607.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            technologies: ['Node.js', 'Stellar SDK', 'Express', 'MongoDB'],
            category: 'blockchain',
            links: {
                demo: 'https://example.com',
                github: 'https://github.com',
            },
        },
        {
            id: 5,
            title: 'Admin Dashboard',
            description:
                'A feature-rich admin dashboard for managing users, content, and analytics with dark mode support.',
            image: 'https://images.pexels.com/photos/4383298/pexels-photo-4383298.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            technologies: ['Angular', 'TypeScript', 'Chart.js', 'NgRx'],
            category: 'frontend',
            links: {
                demo: 'https://example.com',
                github: 'https://github.com',
            },
        },
        {
            id: 6,
            title: 'Microservices Architecture',
            description:
                'A scalable microservices architecture for a large-scale application with service discovery and API gateway.',
            image: 'https://images.pexels.com/photos/1148820/pexels-photo-1148820.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            technologies: ['NestJS', 'Docker', 'Kubernetes', 'RabbitMQ'],
            category: 'backend',
            links: {
                github: 'https://github.com',
            },
        },
    ];

    const filteredProjects =
        activeFilter === 'all' ? projects : projects.filter((project) => project.category === activeFilter);

    const getCategoryIcon = (category: string) => {
        switch (category) {
            case 'frontend':
                return <Code className="w-5 h-5" />;
            case 'backend':
                return <Database className="w-5 h-5" />;
            case 'blockchain':
                return <Layers className="w-5 h-5" />;
            default:
                return null;
        }
    };

    return (
        <section id="projects" className="py-20 bg-gradient-to-b from-slate-800 to-slate-900">
            <div className="container px-4 mx-auto sm:px-6 lg:px-8">
                <div className="mb-16 text-center">
                    <h2 className="mb-2 text-3xl font-bold">My Projects</h2>
                    <div className="w-20 h-1 mx-auto mb-6 bg-indigo-500"></div>
                    <p className="max-w-3xl mx-auto mb-8 text-slate-300">
                        Explore a selection of my projects, showcasing my skills across different domains.
                    </p>

                    <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
                        {(['all', 'frontend', 'backend', 'blockchain'] as const).map((filter) => (
                            <button
                                key={filter}
                                onClick={() => setActiveFilter(filter)}
                                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                                    activeFilter === filter
                                        ? 'bg-indigo-600 text-white'
                                        : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                                }`}
                            >
                                {filter.charAt(0).toUpperCase() + filter.slice(1)}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {filteredProjects.map((project) => (
                        <div
                            key={project.id}
                            className="bg-slate-800/50 backdrop-blur-sm rounded-xl overflow-hidden group hover:transform hover:scale-[1.02] transition-all duration-300"
                        >
                            <div className="relative h-48 overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-70"></div>
                                <div className="absolute flex items-center gap-1 px-3 py-1 text-xs rounded-full top-4 left-4 bg-indigo-600/80 backdrop-blur-sm">
                                    {getCategoryIcon(project.category)}
                                    <span>{project.category.charAt(0).toUpperCase() + project.category.slice(1)}</span>
                                </div>
                            </div>

                            <div className="p-6">
                                <h3 className="mb-2 text-xl font-semibold transition-colors group-hover:text-indigo-400">
                                    {project.title}
                                </h3>
                                <p className="mb-4 text-sm text-slate-300">{project.description}</p>

                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.technologies.map((tech, index) => (
                                        <span
                                            key={index}
                                            className="px-2 py-1 text-xs rounded bg-slate-700 text-slate-300"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex gap-3 mt-4">
                                    {project.links.demo && (
                                        <a
                                            href={project.links.demo}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-1 text-sm text-indigo-400 hover:text-indigo-300"
                                        >
                                            <ExternalLink className="w-4 h-4" />
                                            Demo
                                        </a>
                                    )}
                                    {project.links.github && (
                                        <a
                                            href={project.links.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-1 text-sm text-indigo-400 hover:text-indigo-300"
                                        >
                                            <Github className="w-4 h-4" />
                                            Repository
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <a
                        href="https://github.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 font-medium text-white transition-colors duration-300 bg-indigo-600 rounded-lg hover:bg-indigo-700"
                    >
                        <Github className="w-5 h-5" />
                        View More on GitHub
                    </a>
                </div>
            </div>
        </section>
    );
};
