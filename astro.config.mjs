import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';

export default defineConfig({
    site: 'https://joelorzet.dev',
    output: 'static',
    integrations: [tailwind(), sitemap()],
    adapter: vercel(),
    vite: {
        resolve: {
            alias: {
                '@/': '/src/',
            },
        },
    },
});
