import { IProject } from './project';

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
    projects: INavigationItem;
    experience: INavigationItem;
    contact: INavigationItem;
}

export interface IService {
    label: string;
    description: string;
}

export interface IServiceGroup {
    frontend: IService;
    backend: IService;
    fullstack: IService;
    blockchain: IService;
    smartcontract: IService;
    technicalConsulting: IService;
}

export interface IData {
    name: string;
    email: string;
    profilePicture: string;
    address: string;
    social: ISocial;
    navigation: INavigation;
    projects: IProject[];
    services: IServiceGroup;
}
