/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#fffaef",
        secondary: "#e34625",
        tccred: "#E34625",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimOrange: "rgb(248,231,226)",
      },
      fontFamily: {
        poppins: ["Helvetica", "Arial", "sans-serif"],
        rye: ["rye", "serif"],
        wellfleet: ["wellfleet", "serif"],
        lobster:["lobster", "serif"],
        stint:['Stint Ultra Expanded', 'sans-serif']
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};