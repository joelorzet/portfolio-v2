export type ThemeName = 'indigo' | 'emerald' | 'cyan' | 'rose' | 'amber' | 'violet';

interface ThemePalette {
    '400': string;
    '500': string;
    '600': string;
    '700': string;
    hex: string;
}

const palettes: Record<ThemeName, ThemePalette> = {
    indigo: { '400': '129 140 248', '500': '99 102 241', '600': '79 70 229', '700': '67 56 202', hex: '#6366f1' },
    emerald: { '400': '52 211 153', '500': '16 185 129', '600': '5 150 105', '700': '4 120 87', hex: '#10b981' },
    cyan: { '400': '34 211 238', '500': '6 182 212', '600': '8 145 178', '700': '14 116 144', hex: '#06b6d4' },
    rose: { '400': '251 113 133', '500': '244 63 94', '600': '225 29 72', '700': '190 18 60', hex: '#f43f5e' },
    amber: { '400': '251 191 36', '500': '245 158 11', '600': '217 119 6', '700': '180 83 9', hex: '#f59e0b' },
    violet: { '400': '167 139 250', '500': '139 92 246', '600': '124 58 237', '700': '109 40 217', hex: '#8b5cf6' },
};

const themeName = ((import.meta.env.PUBLIC_THEME as ThemeName) || 'indigo');

export const theme = palettes[themeName] ?? palettes.indigo;
export const currentTheme: ThemeName = themeName in palettes ? themeName : 'indigo';
