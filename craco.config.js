const path = require("path");
const CracoLessPlugin = require("craco-less");

const resolve = (pathname) => path.resolve(__dirname, pathname);

module.exports = {
  // less
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { "@primary-color": "#1DA57A" },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
  // webpack
  webpack: {
    alias: {
      "@": resolve("src"),
      components: resolve("src/components"),
      utils: resolve("src/utils"),
      // "@mui/styled-engine": "@mui/styled-engine-sc",
    },
    // 部署到自己的服务器上，前面带上/airbnb前缀时把下面的代码注释解开, 比如https://mundane.ink/airbnb
    // configure: (webpackConfig, { env, paths }) => {
    //   webpackConfig.output.publicPath = env === "production" ? "/airbnb/" : "/";
    //   return webpackConfig;
    // },
  },
};
