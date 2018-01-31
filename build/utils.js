/**
 * Utils build module.
 *
 * @module build/utils
 */

const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');

const config = require('../config');

exports.assetsPath = p => path.posix.join(config.assetsSubDirectory, p);

exports.cssLoaders = opts => {
  const options = opts || {};

  const cssLoader = {
    loader: 'css-loader',
    options: {
      minimize: process.env.NODE_ENV === 'production',
      sourceMap: options.sourceMap
    }
  };

  // generate loader string to be used with extract text plugin
  const generateLoaders = (loader, loaderOptions) => {
    const loaders = [cssLoader];

    if (loader) {
      loaders.push({
        loader: `${loader}-loader`,
        options: Object.assign({}, loaderOptions, {
          sourceMap: options.sourceMap
        })
      });
    }

    // Extract CSS when that option is specified
    // (which is the case during production build)
    if (options.extract) {
      return ExtractTextPlugin.extract({
        fallback: 'vue-style-loader',
        use: loaders
      });
    }

    return ['vue-style-loader'].concat(loaders);
  };

  // https://vue-loader.vuejs.org/en/configurations/extract-css.html
  return {
    css: generateLoaders(),
    postcss: generateLoaders(),
    less: generateLoaders('less'),
    sass: generateLoaders('sass', { indentedSyntax: true }),
    scss: generateLoaders('sass'),
    stylus: generateLoaders('stylus'),
    styl: generateLoaders('stylus')
  };
};

// Generate loaders for standalone style files (outside of .vue)
exports.styleLoaders = options => {
  const loaders = exports.cssLoaders(options);
  const output = [];

  Object.keys(loaders).forEach(extension => {
    const loader = loaders[extension];

    output.push({
      test: new RegExp(`\\.${extension}$`),
      use: loader
    });
  });

  return output;
};