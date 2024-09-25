/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".mask-gradient": {
          maskImage: "linear-gradient(#171C22 70%, transparent)",
        },
      });
    },
  ],
};
