import { Github, Linkedin, Twitter } from '@/assets/icons';
import { data } from '@/config/data';
import { DevPortfolio } from './shared/dev-portfolio/DevPortfolio';
import { Link } from './shared/link/Link';
import { useService } from '@/hooks/useService';

export const Footer = () => {
    const currentYear = new Date().getFullYear();
    const { setCurrentService } = useService();

    return (
        <footer className="py-10 border-t bg-slate-900 border-slate-800">
            <div className="container px-4 mx-auto sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
                    <div className="md:col-span-2">
                        <DevPortfolio spacing="medium" />
                        <p className="max-w-md mb-6 text-slate-400">
                            Building exceptional digital experiences with modern technologies. Specializing in frontend,
                            backend, and blockchain development.
                        </p>
                        <div className="flex space-x-4">
                            <Link href={data.social.github} label="GitHub" icon={<Github className="w-5 h-5" />} />
                            <Link
                                href={data.social.linkedin}
                                label="LinkedIn"
                                icon={<Linkedin className="w-5 h-5" />}
                            />
                            <Link href={data.social.twitter} label="Twitter" icon={<Twitter className="w-5 h-5" />} />
                        </div>
                    </div>

                    <div>
                        <h3 className="mb-4 text-lg font-semibold text-white">Quick Links</h3>
                        <ul className="space-y-2">
                            {['Home', 'About', 'Skills', 'Projects', 'Experience', 'Contact'].map((item) => (
                                <li key={item}>
                                    <a
                                        href={`#${item.toLowerCase()}`}
                                        className="transition-colors text-slate-400 hover:text-indigo-400"
                                    >
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="mb-4 text-lg font-semibold text-white">Services</h3>
                        <ul className="space-y-2">
                            {Object.entries(data.services).map(([key, value]) => (
                                <li key={key}>
                                    <a
                                        href="#contact"
                                        className="transition-colors text-slate-400 hover:text-indigo-400"
                                        onClick={() => setCurrentService(value)}
                                    >
                                        {value.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="flex flex-col items-center justify-between pt-6 mt-10 border-t border-slate-800 sm:flex-row">
                    <p className="mb-4 text-sm text-slate-500 sm:mb-0">
                        &copy; {currentYear} {data.name}. All rights reserved.
                    </p>
                    <p className="text-sm text-slate-500">
                        Designed and built with <span className="text-red-500">♥</span> by{' '}
                        <span className="text-indigo-400">{data.name}</span>
                    </p>
                </div>
            </div>
        </footer>
    );
};
