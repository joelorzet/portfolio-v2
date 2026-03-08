import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import astro from 'eslint-plugin-astro';

export default tseslint.config(
    { ignores: ['dist', '.astro', '.vercel', 'node_modules'] },
    {
        extends: [js.configs.recommended, ...tseslint.configs.recommended],
        files: ['**/*.ts'],
        languageOptions: {
            ecmaVersion: 2020,
            globals: globals.browser,
        },
    },
    ...astro.configs.recommended,
);
