/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "200px",
      },
      colors: {
        primary: {
          100: "#7D97FF",
          150: "#CED6F7",
        },
        secondary: {
          100: "#282828",
        },
        neutral: {
          100: "#B1B7D6",
        },
        bgColor: {
          100: "#F8F8FB",
        },
        error: {
          100: "#FF4E4E",
        },
      },
      font: {
        dmSans: ["DM Sans"],
      },
      borderRadius: {
        "rounded-xl": "10px",
      },
    },
  },
  plugins: [],
};
