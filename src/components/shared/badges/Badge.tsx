type BadgeColor = 'indigo' | 'blue' | 'purple' | 'green' | 'red' | 'yellow' | 'orange' | 'pink' | 'gray';

interface BadgeProps {
    text: string;
    color: BadgeColor;
}

export function Badge({ text, color }: BadgeProps) {
    return (
        <div className="inline-flex items-center justify-center p-2 mb-6 rounded-full bg-slate-800/50 backdrop-blur-sm">
            <span className={`px-4 text-sm font-medium text-${color}-400`}>{text}</span>
        </div>
    );
}
