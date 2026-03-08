import type { IData } from '@/interfaces/models/data';

export const data: IData = {
    name: 'Joel Orzet',
    email: 'info@joelorzet.dev',
    profilePicture: '/profile.webp',
    address: 'Misiones, Argentina',
    social: {
        linkedin: 'https://linkedin.com/in/joelorzet',
        github: 'https://github.com/joelorzet',
        twitter: 'https://x.com/joelorzet',
    },
    navigation: {
        home: { label: 'Home', href: '#home' },
        about: { label: 'About', href: '#about' },
        skills: { label: 'Skills', href: '#skills' },
        experience: { label: 'Experience', href: '#experience' },
        contact: { label: 'Contact', href: '#contact' },
        services: { label: 'Work with me', href: '/services' },
    },
    services: {
        frontend: {
            label: 'Frontend Development',
            description: 'Building responsive and user-friendly web applications using modern technologies.',
            callToAction:
                "Hi Joel, I have a project I'd like to discuss with you. I'm looking for a frontend developer to build a responsive and modern web application.",
        },
        backend: {
            label: 'Backend Development',
            description: 'Building robust and scalable server-side applications using modern technologies.',
            callToAction:
                "Hi Joel, I have a project I'd like to discuss with you. I already have a frontend and I'm looking for a backend developer to help build the server-side solution.",
        },
        fullstack: {
            label: 'FullStack Solutions',
            description: 'Building fullstack applications using modern technologies.',
            callToAction:
                "Hi Joel, I have a project I'd like to discuss with you. I'm looking for a fullstack developer to build my web application from end to end.",
        },
        blockchain: {
            label: 'Blockchain & Smart Contracts',
            description:
                'Building decentralized applications and smart contracts on Ethereum, Stellar, and other chains.',
            callToAction:
                "Hi Joel, I have a project I'd like to discuss with you. I'm building a blockchain project and need a developer with Web3 and smart contract experience.",
        },
        technicalConsulting: {
            label: 'Technical Consulting',
            description:
                'Providing technical consulting services to help businesses improve their technical capabilities.',
            callToAction:
                "Hi Joel, I'd like to schedule a consultation. I'm looking for technical guidance on my project's architecture and technology choices.",
        },
        landingPages: {
            label: 'Landing Pages',
            description:
                'High-converting, performant landing pages designed to showcase your product or service effectively.',
            callToAction:
                "Hi Joel, I need a landing page for my product/service. I'm looking for a fast, modern, and conversion-focused design.",
        },
    },
    experiences: [
        {
            id: 1,
            title: 'Backend Developer',
            company: 'TechOps Services',
            period: 'Jan 2026 – Present',
            description:
                'Build and maintain full-stack Web3 applications on Ethereum and other blockchains. Design responsive interfaces for web and mobile, create wireframes and prototypes.',
            technologies: ['Ethereum', 'Web3', 'React', 'TypeScript', 'UI/UX'],
        },
        {
            id: 2,
            title: 'Blockchain Mentor',
            company: 'Aptos Foundation',
            period: 'Jul 2025 – Feb 2026',
            description:
                'Mentored startup teams at early and advanced stages, validated ideas through technical guidance. Reviewed technical documentation, assessed feasibility, and collaborated with other mentors.',
            technologies: ['Aptos', 'Move', 'Blockchain', 'Mentoring'],
        },
        {
            id: 3,
            title: 'Delivery Lead',
            company: 'Bigger',
            period: 'Dec 2024 – Dec 2025',
            description:
                'Translated business requirements into technical specs, coordinated cross-team priorities. Participated in architectural decisions and contributed to blockchain initiatives.',
            technologies: ['Stellar', 'Ethereum', 'NestJS', 'Agile', 'Delivery'],
        },
        {
            id: 4,
            title: 'Blockchain Mentor',
            company: 'Stellar Development Foundation',
            period: 'Oct 2024 – Jul 2025',
            description:
                'Mentored 60+ projects during Stellar Kickstart Week (578+ applicants globally). Advised on Stellar and Soroban tools, contributed to 4.8/5 satisfaction score.',
            technologies: ['Stellar', 'Soroban', 'Blockchain', 'Mentoring'],
        },
        {
            id: 5,
            title: 'Software Developer Semi Senior',
            company: 'Bigger',
            period: 'Jun 2023 – Dec 2024',
            description:
                'Designed scalable backend services with NestJS and TypeORM, led E2E testing with Cypress, and integrated external APIs. Contributed to blockchain-based solutions using Stellar and Ethereum smart contracts.',
            technologies: ['NestJS', 'TypeORM', 'Cypress', 'Stellar', 'Ethereum', 'Docker'],
        },
        {
            id: 6,
            title: 'Software Developer Junior',
            company: 'Bigger',
            period: 'Dec 2022 – Jun 2023',
            description:
                'Developed and maintained full-stack features using Angular and NestJS. Participated in agile ceremonies, enhanced code stability, and collaborated in code reviews.',
            technologies: ['Angular', 'NestJS', 'Git', 'Jest', 'Agile'],
        },
    ],
};
