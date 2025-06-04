import { Code, Database, Layers } from '@/assets/icons';

export function Stack() {
    return (
        <div className="flex flex-wrap justify-center gap-8 mt-8">
            <div className="flex flex-col items-center">
                <Code className="w-10 h-10 mb-2 text-indigo-400" />
                <span className="text-slate-300">Frontend</span>
            </div>
            <div className="flex flex-col items-center">
                <Database className="w-10 h-10 mb-2 text-blue-400" />
                <span className="text-slate-300">Backend</span>
            </div>
            <div className="flex flex-col items-center">
                <Layers className="w-10 h-10 mb-2 text-purple-400" />
                <span className="text-slate-300">Blockchain</span>
            </div>
        </div>
    );
}
