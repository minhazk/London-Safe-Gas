import type { Config } from 'tailwindcss';

const config: Config = {
    content: ['./src/pages/**/*.{js,ts,jsx,tsx,mdx}', './src/**/**/*.{js,ts,jsx,tsx,mdx}', './src/app/**/*.{js,ts,jsx,tsx,mdx}'],
    theme: {
        extend: {
            colors: {
                primary: '#0B3078',
                secondary: '#FF6412',
            },
        },
    },
    plugins: [],
};
export default config;
