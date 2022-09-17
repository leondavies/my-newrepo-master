/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./*.{html,js}"],
    theme: {
        colors: {
            black: "#212121",
            offwhite: "#FFF4CD",
            grey: "#BDBDBD",
        },
        extend: {
            fontFamily: {
                apercu: ["Apercu", "sans-serif"],
                kilimanjaroitalic: ["Kilimanjaroitalic", "sans-serif"],
                kilimanjaro: ["Kilimanjaro", "sans-serif"],

            },
        },
    },
    plugins: [],
};