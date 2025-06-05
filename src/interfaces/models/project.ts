export type ProjectCategory = 'frontend' | 'backend' | 'blockchain' | 'all';

export type ProjectLinks = {
    demo?: string;
    github?: string;
};

export type ProjectTechnologies = string[];

export interface IProject {
    id: number;
    title: string;
    description: string;
    image: string;
    technologies: ProjectTechnologies;
    category: ProjectCategory;
    links: ProjectLinks;
}
