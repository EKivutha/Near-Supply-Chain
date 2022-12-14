/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('https://mdbcdn.b-cdn.net/img/new/slides/146.webp')",
      },
    },
  },
  plugins: [],
};
