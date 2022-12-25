/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/components/**/*.{js,jsx}",
        "./public/**/*.html",
        "./src/**/*.js",
    ],
    theme: {
        extend: {},
        screens: {
            mobile: { max: "1000px" },
        },
    },
    plugins: [],
};
