// tailwind.config.js
export default {
content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#5CA191",
        background: "#E4EDEA",
        darkgreen: "#022F2E",
        highlightgreen: "#92E3A9",
        grey: "#626262",
        lightgreen: "#D0E8DB",
        lightred: "#E8D4D0",
        red: "#EA7368",
      },
      fontFamily: {
        header: ["Abhaya Libre", "sans-serif"],
        body: ["Roboto", "sans-serif"],
      },
      fontSize: {
        h1: [
          "32px",
          { fontWeight: "800", fontFamily: "header", color: "darkgreen" },
        ],
        h2: [
          "24px",
          { fontWeight: "700", fontFamily: "header", color: "darkgreen" },
        ],
        h3: ["20px", { fontWeight: "700", fontFamily: "header" }],
        h4: ["18px", { fontWeight: "700", fontFamily: "header" }],
        h5: ["18px", { fontWeight: "400", fontFamily: "header" }],
        paragraph: ["18px", { fontWeight: "400", fontFamily: "body" }],
        sub: ["16px", { fontWeight: "400", fontFamily: "body" }],
        placeholder: [
          "16px",
          { fontStyle: "italic", fontFamily: "body", color: "grey" },
        ],
        tagSelected: ["13px", { fontWeight: "700", fontFamily: "body" }],
        tag: ["13px", { fontWeight: "400", fontFamily: "body" }],
      },
      borderRadius: {
        rounded: "1.5rem",
        circular: "2rem",
        square: "0.25rem",
      },
      boxShadow: {
        cardshadow: "0px 4px 16px rgba(0, 0, 0, 0.05)",
        navbarshadow: "0px 4px 12px rgba(0, 0, 0, 0.03)",
      },
    },
  },
  plugins: [],
};
