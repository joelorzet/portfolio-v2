import { data } from '@/config/data';

export function CallToAction() {
    return (
        <div className="flex flex-wrap justify-center gap-4 mb-12">
            <a
                href={data.navigation.contact.href}
                className="px-8 py-3 font-medium text-white transition-colors duration-300 bg-indigo-600 rounded-full hover:bg-indigo-700"
            >
                Get in Touch
            </a>
            <a
                href={data.navigation.projects.href}
                className="px-8 py-3 font-medium transition-colors duration-300 bg-transparent border rounded-full border-slate-600 hover:border-indigo-400 text-slate-200 hover:text-indigo-400"
            >
                View My Work
            </a>
        </div>
    );
}
