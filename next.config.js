// const withTM = require("next-transpile-modules")(["three"])
const { withPlaiceholder } = require("@plaiceholder/next")
module.exports = withPlaiceholder({
  images: {
    domains: ["images.ctfassets.net", "images.unsplash.com"],
  },
})
