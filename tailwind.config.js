/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        brown: {
          "100": "#a41d23",
          "200": "rgba(164, 29, 35, 0.65)",
          "300": "rgba(164, 29, 35, 0.76)",
        },
        black: "#000",
        gainsboro: "#d9d9d9",
        gray: {
          "100": "#f9fcfd",
          "200": "rgba(0, 0, 0, 0.65)",
          "300": "rgba(0, 0, 0, 0.38)",
          "400": "rgba(0, 0, 0, 0.66)",
          "500": "rgba(0, 0, 0, 0.5)",
        },
        whitesmoke: "#f4f4f4",
        steelblue: "#00598b",
        darkslategray: {
          "100": "rgba(62, 62, 62, 0.66)",
          "200": "rgba(62, 62, 62, 0.8)",
        },
      },
      spacing: {},
      fontFamily: {
        inter: "Inter",
        harmattan: "Harmattan",
        heavitas: "Heavitas",
      },
      borderRadius: {
        "21xl": "40px",
        "11xl": "30px",
        "3xl": "22px",
        "31xl": "50px",
        "7xl": "26px",
      },
    },
    fontSize: {
      "7xl": "26px",
      "2xl": "21px",
      "12xl": "31px",
      "6xl": "25px",
      lgi: "19px",
      "43xl": "62px",
      "31xl": "50px",
      "18xl": "37px",
      base: "16px",
      xl: "20px",
      "11xl": "30px",
      "3xl": "22px",
      lg: "18px",
      "41xl": "60px",
      "29xl": "48px",
      "17xl": "36px",
      "51xl": "70px",
      "37xl": "56px",
      "23xl": "42px",
      sm: "14px",
      "30xl": "49px",
      "20xl": "39px",
      "10xl": "29px",
      "5xl": "24px",
      mini: "15px",
      "4xl": "23px",
      inherit: "inherit",
    },
    screens: {
      mq1425: {
        raw: "screen and (max-width: 1425px)",
      },
      mq1400: {
        raw: "screen and (max-width: 1400px)",
      },
      lg: {
        max: "1200px",
      },
      mq825: {
        raw: "screen and (max-width: 825px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
