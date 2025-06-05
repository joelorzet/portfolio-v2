import { useState } from 'react';
import { Github } from '@/assets/icons';
import { data } from '@/config/data';
import { Link } from '../shared/link/Link';
import { ProjectCategory } from '@/interfaces/models/project';
import { ProjectCard } from './card/ProjectCard';

export function Projects() {
    const [activeFilter, setActiveFilter] = useState<ProjectCategory>('all');

    const filteredProjects =
        activeFilter === 'all' ? data.projects : data.projects.filter((project) => project.category === activeFilter);

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
                        <ProjectCard key={project.id} {...project} />
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <Link
                        href={data.social.github}
                        className="inline-flex items-center gap-2 px-6 py-3 text-white bg-indigo-600 rounded-lg hover:bg-indigo-700"
                        label="View More on GitHub"
                        icon={<Github className="w-5 h-5" />}
                    />
                </div>
            </div>
        </section>
    );
}
