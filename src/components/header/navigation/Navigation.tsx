import { data } from '@/config/data';

const navigation = Object.entries(data.navigation).map(([key, value]) => ({
    key,
    ...value,
}));

export function Navigation() {
    return (
        <nav className="hidden md:space-x-8 md:flex">
            {navigation.map(({ key, label, href }) => (
                <a key={key} href={href} className="transition-colors text-slate-300 hover:text-indigo-400">
                    {label}
                </a>
            ))}
        </nav>
    );
}

export function MobileNavigation() {
    return (
        <nav className="flex flex-col space-y-4">
            {navigation.map(({ key, label, href }) => (
                <a key={key} href={href} className="transition-colors text-slate-300 hover:text-indigo-400">
                    {label}
                </a>
            ))}
        </nav>
    );
}
