/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".maskImage": {
          maskImage: "linear-gradient(#171C22 60%, transparent)",
        },
      });
    },
  ],
};
