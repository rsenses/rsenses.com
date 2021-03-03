const pluginRss = require("@11ty/eleventy-plugin-rss");

module.exports = function(eleventyConfig) {
  eleventyConfig.addPlugin(pluginRss);

  eleventyConfig.addPassthroughCopy({"src/assets": "assets"});
  eleventyConfig.addPassthroughCopy({"src/home/**.*": "./"});
  eleventyConfig.addWatchTarget("./src/scss/");

  eleventyConfig.setUseGitIgnore(false);

  // You can return your Config object (optional).
  return {
    dir: {
      output: "public"
    }
  };
};
