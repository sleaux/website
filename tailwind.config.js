/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{html,js,svelte,ts}'],
    theme: {
        extend: {
            colors: {
                background: '#fafafa',
                light: 'rgba(255, 255, 255, 0.32)',
                border: 'rgba(33, 35, 36, 0.04)',
                bold: 'rgb(213, 199, 162)',
                text: '#2c2c2c'
            },
            fontFamily: {
                title: ['Reckless', 'serif'],
                text: ['DM Sans', 'sans-serif'],
                mono: ['PT Mono', 'monospace']
            }
        }
    },
    plugins: []
};
