/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
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
          150: "#54545499",
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
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      boxShadow: {
        onboardingCard: "0px 4px 20px 0px #7D97FF33",
      },
    },
  },
  plugins: [],
};
