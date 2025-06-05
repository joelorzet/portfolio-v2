import { Github, Linkedin, Twitter } from '@/assets/icons';
import { data } from '@/config/data';

interface SocialLinksProps {
    className?: string;
    iconClassName?: string;
}

export function SocialLinks({ className = '', iconClassName = '' }: SocialLinksProps) {
    return (
        <div className={`flex space-x-4 ${className}`}>
            <a
                href={data.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2 transition-colors rounded-full bg-slate-700 text-slate-300 hover:text-white hover:bg-blue-600 ${iconClassName}`}
            >
                <Github className="w-5 h-5" />
            </a>
            <a
                href={data.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2 transition-colors rounded-full bg-slate-700 text-slate-300 hover:text-white hover:bg-blue-500 ${iconClassName}`}
            >
                <Linkedin className="w-5 h-5" />
            </a>
            <a
                href={data.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2 transition-colors rounded-full bg-slate-700 text-slate-300 hover:text-white hover:bg-blue-500 ${iconClassName}`}
            >
                <Twitter className="w-5 h-5 transition-colors" />
            </a>
        </div>
    );
}
