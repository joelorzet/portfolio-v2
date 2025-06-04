import { ChevronDown } from '@/assets/icons';

export function ScrollIndicator() {
    return (
        <div className="absolute transform -translate-x-1/2 bottom-4 left-1/2 animate-bounce">
            <ChevronDown className="w-8 h-8 text-slate-400" />
        </div>
    );
}
