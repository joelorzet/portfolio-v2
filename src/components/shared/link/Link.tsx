import { ReactNode } from 'react';

import { cn } from '@/utils/styles';

interface ILinkProps {
    href: string;
    label?: string;
    icon?: ReactNode;
    sameTab?: boolean;
    className?: string;
}

export function Link({ href, label, icon, sameTab = false, className }: ILinkProps) {
    return (
        <a
            href={href}
            target={sameTab ? '_self' : '_blank'}
            rel="noopener noreferrer"
            className={cn(
                'p-2 transition-colors rounded-full bg-slate-800 text-slate-400 hover:text-white hover:bg-indigo-600',
                className,
            )}
        >
            {icon && icon}
            {label && label}
        </a>
    );
}
