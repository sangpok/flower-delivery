/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#FFF",
        extraLight: "#F5F5F7",
        lightGray: "#D2D2D7",
        gray: "#808080",
        darkGray: "#424245",
        black: "#121212",
        succeess: "#32936F",
        error: "#F55F56",
      },
      fontFamily: {
        gilroy: "Gilroy",
      },
      screens: {
        mobile: "320px",
        tablet: "768px",
        desktop: "1440px",
      },
    },
  },
  plugins: [""],
};
