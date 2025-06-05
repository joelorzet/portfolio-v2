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
            title: 'Blockchain Developer',
            company: 'Bigger',
            period: 'Dec 2024 – Present',
            description:
                'Participated in blockchain projects using Stellar and Ethereum, contributing to smart contract integration and mentoring teams during the Stellar blockchain bootcamp. Supported feature planning, sprint workflows, and cross-team collaboration as part of the delivery team.',
            technologies: ['Stellar', 'Ethereum', 'Solidity', 'NestJS', 'Agile'],
        },
        {
            id: 2,
            title: 'Software Developer Semi Senior',
            company: 'Bigger',
            period: 'June 2023 – Dec 2024',
            description:
                'Designed scalable backend services with NestJS and TypeORM, led E2E testing with Cypress, and integrated external APIs. Contributed to blockchain-based solutions using Stellar and Ethereum smart contracts.',
            technologies: ['NestJS', 'TypeORM', 'Cypress', 'Stellar', 'Ethereum', 'Docker'],
        },
        {
            id: 3,
            title: 'Software Developer Jr.',
            company: 'Bigger',
            period: 'Dec 2022 – June 2023',
            description:
                'Developed and maintained full-stack features using Angular and NestJS. Participated in agile ceremonies, enhanced code stability, and collaborated in code reviews.',
            technologies: ['Angular', 'NestJS', 'Git', 'Jest', 'Agile'],
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
