const yaml = require("js-yaml");
const markdownIt = require("markdown-it");
const pluginRss = require("@11ty/eleventy-plugin-rss");
const baseline = require("@apleasantview/eleventy-plugin-baseline").default;

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(baseline);
  eleventyConfig.addPlugin(pluginRss); // Menambahkan plugin RSS
  
  eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });
  eleventyConfig.addDataExtension("yaml", (contents) => yaml.load(contents));
  
  const md = new markdownIt({ html: true });
  eleventyConfig.addFilter("markdown", (content) => md.render(content));
  eleventyConfig.addFilter("md", (content) => md.render(content));
  
  eleventyConfig.addCollection("bookCrate", 
    function (collectionApi) {
    return collectionApi
      .getFilteredByTag("book-crate")
      .sort((a, b) => b.date - a.date);
  });

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data"
    }
  };
};