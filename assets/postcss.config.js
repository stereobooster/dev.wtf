//console.log("NODE_ENV", process.env.NODE_ENV);
module.exports = {
  plugins: [
    require("postcss-normalize")(),
    require("postcss-preset-env")(),
    require("autoprefixer")
  ]
};
