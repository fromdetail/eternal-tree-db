let markdown = require("markdown-it")({
  html: true,
});

module.exports = function (eleventyConfig) {
  // Copy Static Files to /_Site
  eleventyConfig.addPassthroughCopy({
    "./src/admin/config.yml": "./admin/config.yml",

    "./node_modules/alpinejs/dist/cdn.min.js": "./assets/js/alpine.js",
  });

  // Copy Image Folder to /_site
  eleventyConfig.addPassthroughCopy("./src/assets/img");

  eleventyConfig.addNunjucksShortcode(
    "markdown",
    (content) => `<div class="md-block">${markdown.render(content)}</div>`
  );

  return {
    dir: {
      input: "src",
      includes: "_includes",
      layouts: "_layouts",
    },
  };
};
