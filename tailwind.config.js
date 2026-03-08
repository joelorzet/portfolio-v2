/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                base: {
                    100: 'rgb(var(--base-100) / <alpha-value>)',
                    200: 'rgb(var(--base-200) / <alpha-value>)',
                    300: 'rgb(var(--base-300) / <alpha-value>)',
                    400: 'rgb(var(--base-400) / <alpha-value>)',
                    500: 'rgb(var(--base-500) / <alpha-value>)',
                    600: 'rgb(var(--base-600) / <alpha-value>)',
                    700: 'rgb(var(--base-700) / <alpha-value>)',
                    800: 'rgb(var(--base-800) / <alpha-value>)',
                    900: 'rgb(var(--base-900) / <alpha-value>)',
                },
                accent: {
                    400: 'rgb(var(--accent-400) / <alpha-value>)',
                    500: 'rgb(var(--accent-500) / <alpha-value>)',
                    600: 'rgb(var(--accent-600) / <alpha-value>)',
                    700: 'rgb(var(--accent-700) / <alpha-value>)',
                },
            },
            animation: {
                blink: 'blink 1s step-end infinite',
            },
            keyframes: {
                blink: {
                    '0%, 100%': { opacity: '1' },
                    '50%': { opacity: '0' },
                },
            },
        },
    },
    plugins: [],
};
