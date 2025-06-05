import { cn } from '@/utils/styles';
import { Code } from '@/assets/icons';

type Spacing = 'none' | 'small' | 'medium' | 'large';

interface DevPortfolioProps {
    spacing?: Spacing;
}

export function DevPortfolio({ spacing = 'small' }: DevPortfolioProps) {
    const spacingClasses = {
        none: 'mb-0',
        small: 'mb-2',
        medium: 'mb-4',
        large: 'mb-6',
    };

    return (
        <div className={cn('flex items-center', spacingClasses[spacing] || spacingClasses.small)}>
            <Code className="w-8 h-8 text-indigo-500" />
            <span className="ml-2 text-xl font-bold">
                Dev<span className="text-indigo-500">Portfolio</span>
            </span>
        </div>
    );
}
