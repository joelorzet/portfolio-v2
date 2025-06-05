import { data } from '@/config/data';
import { Twitter, Linkedin, Github } from '@/assets/icons';

export function SocialLinks() {
    return (
        <div className="items-center hidden space-x-4 md:flex">
            <a
                href={data.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors text-slate-400 hover:text-white"
            >
                <Github className="w-5 h-5" />
            </a>
            <a
                href={data.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors text-slate-400 hover:text-white"
            >
                <Linkedin className="w-5 h-5" />
            </a>
            <a
                href={data.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors text-slate-400 hover:text-white"
            >
                <Twitter className="w-5 h-5 transition-colors text-slate-400 hover:text-white" />
            </a>
        </div>
    );
}

export function MobileSocialLinks() {
    return (
        <div className="flex items-center pt-4 mt-4 space-x-4 border-t border-slate-700">
            <a
                href={data.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors text-slate-400 hover:text-white"
            >
                <Github className="w-5 h-5" />
            </a>
            <a
                href={data.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors text-slate-400 hover:text-white"
            >
                <Linkedin className="w-5 h-5" />
            </a>
            <a
                href={data.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors text-slate-400 hover:text-white"
            >
                <Twitter className="w-5 h-5" />
            </a>
        </div>
    );
}
