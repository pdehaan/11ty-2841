/**
 * @param {import("@11ty/eleventy/src/UserConfig")} eleventyConfig
 * @returns {ReturnType<import("@11ty/eleventy/src/defaultConfig")>}
 */
module.exports = function (eleventyConfig) {
  eleventyConfig.addFilter("foo", function (arr = []) {
    return `foo=${JSON.stringify(arr)}`;
  });

  eleventyConfig.addNunjucksFilter("fooNjk", function (arr = [], prop2) {
    // Global data is available via `this.ctx` for Nunjucks.
    const { site, title } = this.ctx;
    return `
      site.author=${site.author};
      title=${title};
      arr=${JSON.stringify(arr)};
      prop2=${prop2};
    `;
  });

  eleventyConfig.addLiquidFilter("fooLiquid", function (arr = [], prop2) {
    // Global data is available via `this.context.environments` for LiquidJS.
    const { site, title } = this.context.environments;
    return `
      site.author=${site.author};
      title=${title};
      arr=${JSON.stringify(arr)};
      prop2=${prop2};
    `;
  });

  eleventyConfig.addJavaScriptFunction("fooJs", function (arr = [], prop2, site, title) {
    // Couldn't find global data when using JavaScript functions (via .11ty.js templates),
    // but they were available via data cascade, so I passed them from my .11ty.js file.
    return `
      site.author=${site.author};
      title=${title};
      arr=${JSON.stringify(arr)};
      prop2=${prop2};
    `;
  });

  return {
    dir: {
      input: "src",
      output: "www",
    }
  };
};
