// const withTM = require("next-transpile-modules")(["three"])
const { withPlaiceholder } = require("@plaiceholder/next")
module.exports = withPlaiceholder({
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.(glsl|vs|fs|vert|frag)$/,
      exclude: /node_modules/,
      use: [
        {
          loader: "raw-loader",
        },
      ],
    })
    return config
  },
  images: {
    domains: ["images.ctfassets.net", "images.unsplash.com"],
  },
})
