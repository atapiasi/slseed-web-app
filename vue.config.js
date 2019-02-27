const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const path = require('path');

const pkg = require('./package.json');
const cfg = require('./configs');

const { env } = process;

module.exports = {
  productionSourceMap: false,
  lintOnSave: true,
  integrity: true,

  outputDir: cfg.outputDir,

  configureWebpack: {
    devServer: cfg.devServer,
    devtool: false,

    resolve: {
      alias: {
        '@': cfg.sourceDir
      }
    },

    entry: {
      app: path.join(cfg.sourceDir, 'main.js')
    },

    plugins: [
      new FaviconsWebpackPlugin({
        logo: cfg.appIconPath,
        prefix: path.join(cfg.iconsDir, 'icons', '[hash].', ''),
        background: pkg.app.background,
        version: pkg.version,
        title: pkg.app.name,
        icons: {
          favicons: true,
          // The rest are generated by the PWA Manifest plugin
          appleStartup: false,
          appleIcon: false,
          opengraph: false,
          android: false,
          twitter: false,
          windows: false,
          yandex: false,
          coast: false
        }
      }),

      new WebpackPwaManifest({
        background_color: pkg.app.background,
        description: pkg.app.description,
        theme_color: pkg.app.color,
        short_name: pkg.app.short,
        display: pkg.app.display,
        version: pkg.version,
        name: pkg.app.name,
        lang: 'en-US',
        start_url: '/',
        ios: true,
        icons: [
          {
            src: cfg.appIconPath,
            destination: cfg.iconsDir,
            sizes: [192, 512]
          },
          {
            src: cfg.appIconPath,
            destination: cfg.iconsDir,
            sizes: [120, 152, 167, 180, 1024],
            ios: true
          }
        ]
      })
    ]
  },

  chainWebpack: config => {
    config.module
      .rule('i18n')
      .resourceQuery(/blockType=i18n/)
      .type('javascript/auto')
      .use('i18n')
      .loader('@kazupon/vue-i18n-loader');

    // Load index.pug instead of index.html
    config.plugin('html').tap(args => {
      args[0].template = `!!pug-loader!${path.join(cfg.sourceDir, 'index.pug')}`;
      args[0].package = pkg;
      args[0].env = env;

      return args;
    });
  }
};
