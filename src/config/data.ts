import { IData } from '@/interfaces/models/data';

export const data: IData = {
    name: 'Joel Orzet',
    email: 'joelorzt@gmail.com',
    profilePicture: '/profile.webp',
    address: 'Misiones, Argentina',
    social: {
        linkedin: 'https://linkedin.com/in/joelorzet',
        github: 'https://github.com/joelorzet',
        twitter: 'https://x.com/joelorzet',
    },
    navigation: {
        home: {
            label: 'Home',
            href: '#home',
        },
        about: {
            label: 'About',
            href: '#about',
        },
        skills: {
            label: 'Skills',
            href: '#skills',
        },
        projects: {
            label: 'Projects',
            href: '#projects',
        },
        experience: {
            label: 'Experience',
            href: '#experience',
        },
        contact: {
            label: 'Contact',
            href: '#contact',
        },
    },
    projects: [
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
    ],
    services: {
        frontend: {
            label: 'Frontend Development',
            description: 'Building responsive and user-friendly web applications using modern technologies.',
            callToAction:
                "Hi, I'm Paul, and I have a project that I'd like to discuss with you. I am looking for a front-end developer to assist me with it.",
        },
        backend: {
            label: 'Backend Development',
            description: 'Building robust and scalable server-side applications using modern technologies.',
            callToAction:
                "Hi, I'm Paul, and I have a project that I'd like to discuss with you. I'm developing a web solution and I already have the front end. I am looking for a back-end developer to help me with my project.",
        },
        fullstack: {
            label: 'FullStack Solutions',
            description: 'Building fullstack applications using modern technologies.',
            callToAction:
                "Hi, I'm Paul, and I have a project that I'd like to discuss with you. I'm developing a web solution for my business and I need a developer to assist me.",
        },
        blockchain: {
            label: 'Blockchain Development',
            description: 'Building decentralized applications using blockchain technologies.',
            callToAction:
                "Hi, I'm Paul, and I have a project that I'd like to discuss with you. I am looking for a developer to assist me with it. I'm building a blockchain project.",
        },
        smartcontract: {
            label: 'Smart Contract Development',
            description: 'Building smart contracts using modern technologies.',
            callToAction:
                "Hi, I'm Paul, and I have a project that I'd like to discuss with you. I am looking for a developer to assist me with it. I'm building a blockchain project and I need a smart contract.",
        },
        technicalConsulting: {
            label: 'Technical Consulting',
            description:
                'Providing technical consulting services to help businesses improve their technical capabilities.',
            callToAction:
                "Hi, I'm Paul, and I have a project that I'd like to discuss with you. I am looking for a technical consultant to assist me.",
        },
    },
};
