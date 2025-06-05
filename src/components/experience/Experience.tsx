import { Calendar, Briefcase } from 'lucide-react';
import {
    Timeline,
    TimelineItem,
    TimelineItemDate,
    TimelineItemHeader,
    TimelineItemBody,
} from '@/components/shared/timeline';

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
        <Timeline
            id="experience"
            title="Professional Experience"
            description="My professional journey through various roles and technologies."
        >
            {experiences.map((experience, index) => (
                <TimelineItem key={experience.id} index={index}>
                    <TimelineItemDate>
                        <div className="flex items-center mb-1 text-indigo-400">
                            <Calendar className="w-4 h-4 mr-2" />
                            <span className="text-sm">{experience.period}</span>
                        </div>
                    </TimelineItemDate>

                    <TimelineItemHeader>
                        <div className="flex items-start mb-3">
                            <div className="p-2 mr-4 rounded-md bg-indigo-500/10">
                                <Briefcase className="w-5 h-5 text-indigo-400" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold">{experience.title}</h3>
                                <p className="text-indigo-400">{experience.company}</p>
                            </div>
                        </div>
                    </TimelineItemHeader>

                    <TimelineItemBody>
                        <p className="mb-4 text-slate-300">{experience.description}</p>
                        <div className="flex flex-wrap gap-2">
                            {experience.technologies.map((tech, techIndex) => (
                                <span key={techIndex} className="px-2 py-1 text-xs rounded bg-slate-700 text-slate-300">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </TimelineItemBody>
                </TimelineItem>
            ))}
        </Timeline>
    );
};
