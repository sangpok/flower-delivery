import plugin from "tailwindcss";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#FFF",
        extralight: "#F5F5F7",
        lightgray: "#D2D2D7",
        gray: "#808080",
        darkgray: "#424245",
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
        pointerhover: {
          raw: "(hover: hover) and (pointer: fine)",
        },
      },
      spacing: {
        // Mobile
        m4: "1.25vw",
        m8: "2.50vw",
        m12: "3.75vw",
        m14: "4.37vw",
        m16: "5.00vw",
        m24: "7.50vw",
        m32: "10.00vw",
        m40: "12.50vw",
        m48: "15.00vw",
        m64: "20.00vw",
        m80: "25.00vw",

        // Tablet
        t4: "0.52vw",
        t8: "1.04vw",
        t12: "1.56vw",
        t14: "1.82vw",
        t16: "2.08vw",
        t24: "3.13vw",
        t32: "4.17vw",
        t40: "5.21vw",
        t48: "6.25vw",
        t64: "8.33vw",
        t80: "10.42vw",

        // Desktop
        d4: "0.27vw",
        d8: "0.56vw",
        d12: "0.83vw",
        d14: "0.97vw",
        d16: "1.11vw",
        d24: "1.67vw",
        d32: "2.22vw",
        d40: "2.78vw",
        d48: "3.33vw",
        d64: "4.44vw",
        d80: "5.56vw",
      },
      fontSize: {
        // Mobile
        m40: "12.50vw",
        m34: "10.63vw",
        m26: "8.13vw",
        m22: "6.88vw",
        m18: "5.63vw",
        m16: "5.00vw",
        m14: "4.38vw",
        m12: "3.75vw",

        // Tablet
        t67: "8.72vw",
        t50: "6.51vw",
        t38: "4.95vw",
        t28: "3.65vw",
        t21: "2.73vw",
        t18: "2.34vw",
        t16: "2.08vw",
        t14: "1.82vw",
        t12: "1.56vw",

        // Desktop
        d67: "4.65vw",
        d50: "3.47vw",
        d38: "2.64vw",
        d28: "1.94vw",
        d21: "1.46vw",
        d18: "1.25vw",
        d16: "1.11vw",
        d14: "0.97vw",
        d12: "0.83vw",
      },
      lineHeight: {
        140: "140%",
        120: "120%",
        100: "100%",
      },
      borderWidth: {
        m1: "0.31vw",
        t1: "0.13vw",
        d1: "0.06vw",
      },
    },
  },
  plugins: [
    // plugin(function ({ addVariant }) {
    //   addVariant("supportsnotaspectratio", "@supports not (asepct-ratio:1/1)");
    //   addVariant("hocus", ["&:hover", "&:focus"]);
    //   addVariant("inverted-colors", "@media (inverted-colors: inverted)");
    // }),
  ],
};
