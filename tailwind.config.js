/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                overpass: ["Overpass", "sans-serif"],
            },
            colors: {
                orange: "hsl(25, 97%, 53%)",
                white: "hsl(0, 0%, 100%)",
                lightGray: "hsl(217, 12%, 63%)",
                darkGray: "hsl(216, 12%, 54%)",
                darkBlue: "hsl(213, 19%, 18%)",
                veryDarkBlue: "hsl(216, 12%, 8%)",
            },
        },
    },
    plugins: [],
};
