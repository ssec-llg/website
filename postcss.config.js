// using cssnano
const cssnano = require("cssnano")({
  preset: "default"
})


// only needed if you want to purge
const purgecss = require("@fullhuman/postcss-purgecss")({
  content: ["./src/**/*.svelte", "./src/**/*.html", "./node_modules/**/*.svelte"],
  whitelistPatterns: [/svelte-/],
  defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || []
});

module.exports = {
  plugins: [
    require("tailwindcss"),
    require('postcss-nested'),

    // only needed if you want to purge
    ...(process.env.NODE_ENV === "production" ? [purgecss, cssnano] : [])
  ]
};