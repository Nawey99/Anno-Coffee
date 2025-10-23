/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#08775f',
                    50: '#f0fdf4',
                    100: '#dcfce7',
                    200: '#bbf7d0',
                    300: '#86efac',
                    400: '#4ade80',
                    500: '#22c55e',
                    600: '#16a34a',
                    700: '#15803d',
                    800: '#166534',
                    900: '#14532d',
                    950: '#052e16',
                },
                secondary: {
                    DEFAULT: '#DEB887',
                    50: '#fefdfb',
                    100: '#fdf9f3',
                    200: '#faf1e1',
                    300: '#f5e5c7',
                    400: '#edd4a3',
                    500: '#DEB887',
                    600: '#d4a574',
                    700: '#c89661',
                    800: '#b8854e',
                    900: '#a6743b',
                    950: '#8f5f28',
                },
                accent: {
                    DEFAULT: '#c6a86d',
                    50: '#faf9f7',
                    100: '#f4f1ea',
                    200: '#e8e1d3',
                    300: '#d9cdb6',
                    400: '#c6a86d',
                    500: '#b8965a',
                    600: '#a88447',
                    700: '#987234',
                    800: '#886021',
                    900: '#784e0e',
                    950: '#683c00',
                }
            },
            fontFamily: {
                'primary': ['Raleway', 'ui-sans-serif', 'system-ui', 'sans-serif'],
                'secondary': ['Lato', 'ui-sans-serif', 'system-ui', 'sans-serif'],
            },
            backdropBlur: {
                'xs': '2px',
            },
            animation: {
                'slideIn': 'slideIn 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                'slideDown': 'slideDown 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            },
            keyframes: {
                slideIn: {
                    'from': {
                        transform: 'scaleX(0)',
                        opacity: '0',
                    },
                    'to': {
                        transform: 'scaleX(1)',
                        opacity: '1',
                    },
                },
                slideDown: {
                    'from': {
                        opacity: '0',
                        transform: 'translateY(-10px)',
                    },
                    'to': {
                        opacity: '1',
                        transform: 'translateY(0)',
                    },
                },
            },
        },
    },
    plugins: [],
}

