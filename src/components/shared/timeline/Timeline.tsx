import { ReactNode } from 'react';

interface ITimelineProps {
    children: ReactNode;
    title?: string;
    description?: string;
    id?: string;
}

export function Timeline({ children, title, description, id }: ITimelineProps) {
    return (
        <section id={id} className="py-20 bg-slate-800/50">
            <div className="container px-4 mx-auto sm:px-6 lg:px-8">
                {(title || description) && (
                    <div className="mb-16 text-center">
                        {title && <h2 className="mb-2 text-3xl font-bold">{title}</h2>}
                        <div className="w-20 h-1 mx-auto mb-6 bg-indigo-500"></div>
                        {description && <p className="max-w-3xl mx-auto text-slate-300">{description}</p>}
                    </div>
                )}

                <div className="relative">
                    <div className="absolute left-0 w-1 h-full transform md:left-1/2 md:-translate-x-1/2 bg-indigo-500/30"></div>

                    <div className="space-y-12">{children}</div>
                </div>
            </div>
        </section>
    );
}
