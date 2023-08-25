const postcss = require("postcss");
const tailwindcss = require("tailwindcss");
const autoprefixer = require("autoprefixer");

module.exports = (eleventyConfig) => {
  eleventyConfig.addNunjucksAsyncFilter("postcss", (cssCode, done) => {
    postcss([tailwindcss(require("./tailwind.config.js")), autoprefixer()])
      .process(cssCode)
      .then(
        (r) => done(null, r.css),
        (e) => done(e, null)
      );
  });
  eleventyConfig.addPassthroughCopy("src/scripts/toggle_theme.js");
  eleventyConfig.addPassthroughCopy("src/assets", "/assets");
  eleventyConfig.addWatchTarget("styles/**/*.css");
  return {
    dir: {
      input: "src",
      output: "dist",
    },
  };
};
