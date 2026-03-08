export type ThemeName = 'midnight' | 'forest' | 'cherry' | 'ocean' | 'sand' | 'ember' | 'lavender' | 'arctic';

interface ThemePalette {
    base: Record<'100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900', string>;
    accent: Record<'400' | '500' | '600' | '700', string>;
    accentHex: string;
}

// For DARK themes: 900=darkest (background), 100=lightest (text)
// For LIGHT themes: 900=lightest (background), 100=darkest (text) — scale is inverted

const palettes: Record<ThemeName, ThemePalette> = {
    // ── DARK THEMES ──
    midnight: {
        // Slate base + Indigo accent
        base: {
            '100': '241 245 249', '200': '226 232 240', '300': '203 213 225',
            '400': '148 163 184', '500': '100 116 139', '600': '71 85 105',
            '700': '51 65 85', '800': '30 41 59', '900': '15 23 42',
        },
        accent: { '400': '129 140 248', '500': '99 102 241', '600': '79 70 229', '700': '67 56 202' },
        accentHex: '#6366f1',
    },
    forest: {
        // Zinc base + Emerald accent
        base: {
            '100': '244 244 245', '200': '228 228 231', '300': '212 212 216',
            '400': '161 161 170', '500': '113 113 122', '600': '82 82 91',
            '700': '63 63 70', '800': '39 39 42', '900': '24 24 27',
        },
        accent: { '400': '52 211 153', '500': '16 185 129', '600': '5 150 105', '700': '4 120 87' },
        accentHex: '#10b981',
    },
    ocean: {
        // Gray base + Cyan accent
        base: {
            '100': '243 244 246', '200': '229 231 235', '300': '209 213 219',
            '400': '156 163 175', '500': '107 114 128', '600': '75 85 99',
            '700': '55 65 81', '800': '31 41 55', '900': '17 24 39',
        },
        accent: { '400': '34 211 238', '500': '6 182 212', '600': '8 145 178', '700': '14 116 144' },
        accentHex: '#06b6d4',
    },

    // ── LIGHT THEMES (scale inverted: 900=lightest, 100=darkest) ──
    cherry: {
        // Warm light base + Rose accent
        base: {
            '100': '35 25 30',     '200': '70 55 60',     '300': '110 90 95',
            '400': '150 130 135',  '500': '180 165 170',  '600': '210 200 205',
            '700': '230 222 225',  '800': '248 244 245',  '900': '255 251 252',
        },
        accent: { '400': '225 29 72', '500': '190 18 60', '600': '159 18 57', '700': '136 19 55' },
        accentHex: '#e11d48',
    },
    sand: {
        // Warm cream base + Amber accent
        base: {
            '100': '32 28 20',     '200': '65 58 45',     '300': '100 92 78',
            '400': '140 132 118',  '500': '175 168 156',  '600': '208 203 195',
            '700': '232 228 222',  '800': '247 245 240',  '900': '255 253 248',
        },
        accent: { '400': '234 135 20', '500': '217 119 6', '600': '180 83 9', '700': '154 62 4' },
        accentHex: '#d97706',
    },
    ember: {
        // Neutral warm base + Orange-red accent
        base: {
            '100': '245 245 245', '200': '229 229 229', '300': '212 212 212',
            '400': '163 163 163', '500': '115 115 115', '600': '82 82 82',
            '700': '64 64 64', '800': '38 38 38', '900': '23 23 23',
        },
        accent: { '400': '248 113 113', '500': '239 68 68', '600': '220 38 38', '700': '185 28 28' },
        accentHex: '#ef4444',
    },

    // ── LIGHT THEMES (continued) ──
    lavender: {
        // Cool light base + Violet accent
        base: {
            '100': '30 25 40',     '200': '60 52 75',     '300': '100 90 115',
            '400': '140 132 155',  '500': '175 168 185',  '600': '210 205 218',
            '700': '230 226 235',  '800': '245 243 248',  '900': '252 250 255',
        },
        accent: { '400': '167 139 250', '500': '139 92 246', '600': '124 58 237', '700': '109 40 217' },
        accentHex: '#8b5cf6',
    },
    arctic: {
        // Blue-white base + Sky blue accent
        base: {
            '100': '25 35 45',     '200': '50 65 80',     '300': '85 100 118',
            '400': '130 145 160',  '500': '170 180 192',  '600': '208 216 225',
            '700': '228 234 240',  '800': '243 247 250',  '900': '250 253 255',
        },
        accent: { '400': '56 189 248', '500': '14 165 233', '600': '2 132 199', '700': '3 105 161' },
        accentHex: '#0ea5e9',
    },
};

export const allPalettes = palettes;

const defaultTheme: ThemeName = 'forest';
const themeName = defaultTheme;

export const theme = palettes[themeName] ?? palettes.forest;
export const currentTheme: ThemeName = themeName in palettes ? themeName : 'forest';
