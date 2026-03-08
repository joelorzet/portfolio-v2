export interface ISocial {
    linkedin: string;
    github: string;
    twitter: string;
}

export interface INavigationItem {
    label: string;
    href: string;
}

export interface INavigation {
    home: INavigationItem;
    about: INavigationItem;
    skills: INavigationItem;
    experience: INavigationItem;
    contact: INavigationItem;
    services: INavigationItem;
}

export interface IService {
    label: string;
    description: string;
    callToAction: string;
}

export interface IServiceGroup {
    frontend: IService;
    backend: IService;
    fullstack: IService;
    blockchain: IService;
    technicalConsulting: IService;
    landingPages: IService;
}

export interface ExperienceItem {
    id: number;
    title: string;
    company: string;
    period: string;
    description: string;
    technologies: string[];
}

export interface IData {
    name: string;
    email: string;
    profilePicture: string;
    address: string;
    social: ISocial;
    navigation: INavigation;
    services: IServiceGroup;
    experiences: ExperienceItem[];
}
