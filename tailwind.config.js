/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundSize: {
      '16': '4rem',
    },
      backgroundImage: {
        "left-bg": "url('/images/main-bg-1.svg')",
        "right-bg": "url('/images/main-bg-2.svg')",
      },
      colors: {
        blue: {
          100: "#02073E",
          200: "#0F2137",
        },
        red: {
          100: "#EA3A60",
        },
      },
    },
  },
  plugins: [],
};

