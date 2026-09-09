/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#0A1B3A",
          950: "#060F24",
          900: "#0A1B3A",
          800: "#0F2A56",
          700: "#153A75",
        },
        blue: {
          brand: "#1E5AFF",
          soft: "#4E7CFF",
          mist: "#EAF1FF",
        },
        ink: "#0B1526",
        slate: {
          soft: "#5B6B8C",
        },
        cloud: "#F6F8FC",
      },
      fontFamily: {
        display: [
          '"Space Grotesk"',
          '"Plus Jakarta Sans"',
          "-apple-system",
          '"Segoe UI"',
          "Inter",
          '"Helvetica Neue"',
          "sans-serif",
        ],
        body: [
          '"Plus Jakarta Sans"',
          "-apple-system",
          '"Segoe UI"',
          "Inter",
          '"Helvetica Neue"',
          "sans-serif",
        ],
        mono: ["Roboto", "system-ui", "sans-serif"],
      },
      maxWidth: {
        content: "1240px",
      },
      boxShadow: {
        card: "0 24px 48px -24px rgba(10, 27, 58, 0.28)",
        lift: "0 12px 32px -12px rgba(10, 27, 58, 0.35)",
      },
      keyframes: {
        marqueeX: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        marqueeY: {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(-50%)" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(14px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "marquee-x": "marqueeX 28s linear infinite",
        "marquee-y": "marqueeY 22s linear infinite",
        "fade-up": "fadeUp 0.7s ease-out forwards",
      },
    },
  },
  plugins: [],
};
