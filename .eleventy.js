const postcss = require("postcss");
const tailwindcss = require("tailwindcss");
const autoprefixer = require("autoprefixer");
const markdownIt = require("markdown-it");
const markdownItAttrs = require("markdown-it-attrs");
const markdownItAnchor = require("markdown-it-anchor");

const markdownItOptions = {
  html: true,
  breaks: true,
  linkify: true,
};

const markdownLib = markdownIt(markdownItOptions)
  .use(markdownItAttrs)
  .use(markdownItAnchor, {});

module.exports = (eleventyConfig) => {
  eleventyConfig.addNunjucksAsyncFilter("postcss", (cssCode, done) => {
    postcss([tailwindcss(require("./tailwind.config.js")), autoprefixer()])
      .process(cssCode)
      .then(
        (r) => done(null, r.css),
        (e) => done(e, null)
      );
  });

  eleventyConfig.addPlugin(require("eleventy-plugin-nesting-toc"), {
    tags: ["h2", "h3", "h4"], // Which heading tags are selected (headings must each have an ID attribute)
    ignoredElements: [], // Elements to ignore when constructing the label for every header (useful for ignoring permalinks, must be selectors)
    wrapper: "nav", // Element to put around the root `ol`
    wrapperClass: "toc", // Class for the element around the root `ol`
    headingText: "", // Optional text to show in heading above the wrapper element
    headingTag: "h2", // Heading tag when showing heading above the wrapper element
  });

  eleventyConfig.setLibrary("md", markdownLib);

  eleventyConfig.addPassthroughCopy("src/scripts/toggle_theme.js");
  eleventyConfig.addPassthroughCopy("src/assets", "/assets");
  eleventyConfig.addWatchTarget("src/styles");
  return {
    dir: {
      input: "src",
      output: "dist",
    },
  };
};
