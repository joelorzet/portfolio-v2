export interface SEOProps {
    title: string;
    description: string;
    canonicalUrl?: string;
    ogImage?: string;
    ogType?: string;
    twitterCard?: 'summary' | 'summary_large_image';
    jsonLd?: Record<string, unknown>;
}

export const defaultSEO: SEOProps = {
    title: 'Joel Orzet | Full Stack Developer & Blockchain Engineer',
    description:
        'Full Stack Developer specializing in React, NestJS, and blockchain technologies. Building modern web applications and decentralized solutions.',
    ogImage: '/og-image.png',
    ogType: 'website',
    twitterCard: 'summary_large_image',
};

export const servicesSEO: SEOProps = {
    title: 'Work With Me | Joel Orzet',
    description:
        'Hire Joel Orzet for frontend, backend, fullstack, and blockchain development. Clear process, quality delivery, and ongoing support.',
    ogImage: '/og-image.png',
    ogType: 'website',
    twitterCard: 'summary_large_image',
    jsonLd: {
        '@context': 'https://schema.org',
        '@type': 'Service',
        provider: {
            '@type': 'Person',
            name: 'Joel Orzet',
            url: 'https://joelorzet.dev',
        },
        hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: 'Development Services',
            itemListElement: [
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Frontend Development' } },
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Backend Development' } },
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'FullStack Solutions' } },
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Blockchain Development' } },
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Smart Contract Development' } },
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Technical Consulting' } },
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Landing Pages' } },
            ],
        },
    },
};

export const personJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Joel Orzet',
    url: 'https://joelorzet.dev',
    email: 'info@joelorzet.dev',
    jobTitle: 'Full Stack Developer & Blockchain Engineer',
    address: {
        '@type': 'PostalAddress',
        addressLocality: 'Misiones',
        addressCountry: 'AR',
    },
    sameAs: ['https://linkedin.com/in/joelorzet', 'https://github.com/joelorzet', 'https://x.com/joelorzet'],
};
