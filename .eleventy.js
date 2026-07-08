const baseline = require("@apleasantview/eleventy-plugin-baseline").default;

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(baseline);
  eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data"
    }
  };
};
