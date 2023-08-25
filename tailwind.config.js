module.exports = {
  content: ["./src/**/*.{njk,md}"],
  plugins: [require("@tailwindcss/typography")],
  darkMode: "class",
  theme: {
    fontFamily: {
      mono: ["Fira Code", "monospace"],
    },
  },
};
