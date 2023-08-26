const postcss = require("postcss");
const tailwindcss = require("tailwindcss");
const autoprefixer = require("autoprefixer");
const markdownIt = require("markdown-it");
const markdownItAttrs = require("markdown-it-attrs");

const markdownItOptions = {
  html: true,
  breaks: true,
  linkify: true,
};

const markdownLib = markdownIt(markdownItOptions).use(markdownItAttrs);

module.exports = (eleventyConfig) => {
  eleventyConfig.addNunjucksAsyncFilter("postcss", (cssCode, done) => {
    postcss([tailwindcss(require("./tailwind.config.js")), autoprefixer()])
      .process(cssCode)
      .then(
        (r) => done(null, r.css),
        (e) => done(e, null)
      );
  });

  eleventyConfig.setLibrary("md", markdownLib);

  eleventyConfig.addPassthroughCopy("src/scripts/toggle_theme.js");
  eleventyConfig.addPassthroughCopy("src/assets", "/assets");
  eleventyConfig.addPassthroughCopy("src/admin", "/admin");
  eleventyConfig.addWatchTarget("styles/**/*.css");
  return {
    dir: {
      input: "src",
      output: "dist",
    },
  };
};
