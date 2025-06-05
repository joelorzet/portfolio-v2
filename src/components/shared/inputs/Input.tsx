interface IInputProps {
    label: string;
    name: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder: string;
    props?: React.InputHTMLAttributes<HTMLInputElement>;
}

export function Input({ label, name, value, placeholder, onChange, ...props }: IInputProps) {
    return (
        <div>
            <label htmlFor={name} className="block mb-1 text-sm font-medium text-slate-300">
                {label}
            </label>
            <input
                type="text"
                id={name}
                name={name}
                value={value}
                onChange={onChange}
                required
                className="w-full px-4 py-2 text-white transition-colors border rounded-lg border-slate-600 bg-slate-700/50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                placeholder={placeholder}
                {...props}
            />
        </div>
    );
}
