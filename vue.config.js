const Timestamp = new Date().getTime();
process.env.VUE_APP_VERSION = require('./package.json').version

module.exports = {
  publicPath:
    process.env.NODE_ENV === "production" ? "./" : "./",
  // 当运行 vue-cli-service build 时生成的生产环境构建文件的目录。html/annotation/
  // 注意目标目录在构建之前会被清除 (构建时传入 --no-clean 可关闭该行为)。
  // 默认值'dist'
  outputDir: "dist",
  // 放置生成的静态资源 (js、css、img、fonts) 的目录(相对于outputDir目录)。
  // 默认值''
  assetsDir: "assets",
  //指定生成的 index.html 的输出路径 (相对于 outputDir)。也可以是一个绝对路径。
  indexPath: "index.html",
  // 默认情况下，生成的静态资源在它们的文件名中包含了 hash 以便更好的控制缓存。
  filenameHashing: false,
  // 是否在开发环境下通过 eslint-loader 在每次保存时 lint 代码。这个值会在 @vue/cli-plugin-eslint 被安装之后生效。
  // lintOnSave: process.env.NODE_ENV !== "production",
  lintOnSave: false,
  //是否使用包含运行时编译器的 Vue 构建版本。设置为 true 后你就可以在 Vue 组件中使用 template 选项了，但是这会让你的应用额外增加 10kb 左右。
  runtimeCompiler: false,

  configureWebpack: {
    resolve: {
      alias: {
        vue$: "vue/dist/vue.esm.js",
      },
    },
    output: { // 输出重构  打包编译后的 文件名称  【模块名称.版本号.时间戳】
      filename: `[name].${process.env.VUE_APP_Version}.${Timestamp}.js`,
      chunkFilename: `[name].${process.env.VUE_APP_Version}.${Timestamp}.js`
    },

    //警告 webpack 的性能提示
    performance: {
      hints: 'warning',
      //入口起点的最大体积
      maxEntrypointSize: 50000000,
      //生成文件的最大体积
      maxAssetSize: 30000000,
      //只给出 js 文件的性能提示
      assetFilter: function (assetFilename) {
        return assetFilename.endsWith('.js');
      }
    }
  },
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/assets/scss/variables.scss";`,
      },
    },
  },
  // 如果你不需要生产环境的 source map，可以将其设置为 false 以加速生产环境构建。
  productionSourceMap: false,
  devServer: {
    host: "localhost",
    port: 8080, // 端口号
    https: false,
    open: true, //配置自动启动浏览器
    disableHostCheck: true,  // 域名开启代理
    proxy: {
      "/api": {
        target: "http://10.88.1.78:8090",//tagging.ai.sany.com
        // secure: false, // 如果是https接口，需要配置这个参数
        pathRewrite: {
          "^/api": "/",
        },
      },
      // "/bpi": {
      //   target: "http://auth.ai.com:8333",
      //   // secure: false, // 如果是https接口，需要配置这个参数
      //   changeOrigin: true, //允许跨域
      //   pathRewrite: {
      //     "^/bpi": "/",
      //   },
      // },
    },
  },
};
