import { ReactNode } from 'react';

import { Link } from '@/components/shared/link/Link';
import { Code, Database, ExternalLink, Github, Layers } from '@/assets/icons';
import { IProject, ProjectCategory } from '@/interfaces/models/project';

function getCategoryIcon(category: ProjectCategory): ReactNode {
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
}

function ProjectLinks({ links }: Pick<IProject, 'links'>) {
    return (
        <div className="flex gap-3 mt-4">
            {links.demo && (
                <Link
                    href={links.demo}
                    label="Demo"
                    icon={<ExternalLink className="w-4 h-4" />}
                    sameTab
                    className="flex items-center gap-1 px-0 text-sm text-indigo-400 bg-transparent hover:text-indigo-300 hover:bg-transparent"
                />
            )}
            {links.github && (
                <Link
                    href={links.github}
                    label="Repository"
                    icon={<Github className="w-4 h-4" />}
                    sameTab
                    className="flex items-center gap-1 px-0 text-sm text-indigo-400 bg-transparent hover:text-indigo-300 hover:bg-transparent"
                />
            )}
        </div>
    );
}

function ProjectTechnologies({ technologies }: Pick<IProject, 'technologies'>) {
    return (
        <div className="flex flex-wrap gap-2 mb-4">
            {technologies.map((tech, index) => (
                <span key={index} className="px-2 py-1 text-xs rounded bg-slate-700 text-slate-300">
                    {tech}
                </span>
            ))}
        </div>
    );
}

function ProjectImage({ image, title, category }: Pick<IProject, 'image' | 'title' | 'category'>) {
    return (
        <div className="relative h-48 overflow-hidden">
            <img
                src={image}
                alt={title}
                className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-70"></div>
            <div className="absolute flex items-center gap-1 px-3 py-1 text-xs rounded-full top-4 left-4 bg-indigo-600/80 backdrop-blur-sm">
                {getCategoryIcon(category)}
                <span>{category.charAt(0).toUpperCase() + category.slice(1)}</span>
            </div>
        </div>
    );
}

function ProjectBody({
    title,
    description,
    technologies,
    links,
}: Pick<IProject, 'title' | 'description' | 'technologies' | 'links'>) {
    return (
        <div className="p-6">
            <h3 className="mb-2 text-xl font-semibold transition-colors group-hover:text-indigo-400">{title}</h3>
            <p className="mb-4 text-sm text-slate-300">{description}</p>

            <ProjectTechnologies technologies={technologies} />

            <ProjectLinks links={links} />
        </div>
    );
}

export function ProjectCard({ title, description, image, technologies, category, links }: IProject) {
    return (
        <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl overflow-hidden group hover:transform hover:scale-[1.02] transition-all duration-300">
            <ProjectImage image={image} title={title} category={category} />

            <ProjectBody title={title} description={description} technologies={technologies} links={links} />
        </div>
    );
}
