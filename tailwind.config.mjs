/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            fontFamily: {
                display: ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
                sans: ['Inter', 'system-ui', 'sans-serif'],
            },
            letterSpacing: {
                tighter: '-0.03em',
                label: '0.15em',
                button: '0.08em',
            },
            lineHeight: {
                display: '1.1',
                heading: '1.3',
            },
        },
    },
    plugins: [],
}
