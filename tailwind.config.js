module.exports = {
  content: ["./src/**/*.{njk,md}"],
  plugins: [
    require("@tailwindcss/typography"),
    function ({ addVariant }) {
      addVariant("child", "& > *");
      addVariant("child-hover", "& > *:hover");
    },
  ],
  darkMode: "class",
  theme: {
    extend: {
      screens: {
        print: { raw: "print" },
        noprint: { raw: "not print" },
      },
    },
    fontFamily: {
      mono: ["Fira Code", "monospace"],
    },
  },
};
