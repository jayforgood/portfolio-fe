const CracoAlias = require("craco-alias");

module.exports = {
  plugins: [
    {
      plugin: CracoAlias,
      options: {
        source: "jsconfig",
        baseUrl: "./src",
        tsConfigPath: "./jsconfig.json",
      },
    },
  ],
  devServer: {
    proxy: {
      "/api": {
        target: "https://jlvadtrbkq.us16.qoddiapp.com",
        changeOrigin: true,
        pathRewrite: { "^/api": "" },
      },
    },
  },
};
