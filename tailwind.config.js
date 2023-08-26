module.exports = {
  content: ["./src/**/*.{njk,md}"],
  plugins: [require("@tailwindcss/typography")],
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
