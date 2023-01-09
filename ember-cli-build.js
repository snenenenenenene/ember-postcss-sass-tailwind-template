// 'use strict';

// const EmberApp = require('ember-cli/lib/broccoli/ember-app');
const autoprefixer = require('autoprefixer');
const tailwind = require('tailwindcss');
const sass = require('@csstools/postcss-sass');
const { Webpack } = require('@embroider/webpack');
const EmberApp = require('ember-cli/lib/broccoli/ember-app');
// function isProduction() {
//   return EmberApp.env() === 'production';
// }

module.exports = function (defaults) {
  let app = new EmberApp(defaults, {
    // sassOptions: {
    //   extension: 'scss',
    //   includePaths: ['./app/assets'],
    //   modulePrefix: 'app',
    // },
    postcssOptions: {
      compile: {
        enabled: true,
        cacheExclude: [],
        cacheInclude: [
          /.*\.(css|scss|sass|less|hbs)$/,
          /.tailwind\/config\.js$/,
        ],
        plugins: [
          {
            module: autoprefixer,
            options: {},
          },
          {
            module: tailwind,
            options: {
              config: './app/styles/tailwind/tailwind.config.js',
            },
          },
          {
            module: sass,
            options: {
              includePaths: ['node_modules'],
            },
          },
        ],
      },
    },
  });

  function isProduction() {
    return EmberApp.env() === 'production';
  }

  return require('@embroider/compat').compatBuild(app, Webpack, {
    staticAddonTestSupportTrees: true,
    staticAddonTrees: true,
    staticHelpers: true,
    staticModifiers: true,
    staticComponents: true,
    splitAtRoutes: ['route1', 'route2'],
    packagerOptions: {
      // publicAssetURL is used similarly to Ember CLI's asset fingerprint prepend option.
      publicAssetURL: '/',
      // Embroider lets us send our own options to the style-loader
      cssLoaderOptions: {
        // don't create source maps in production
        sourceMap: isProduction() === false,
        // enable CSS modules
        modules: {
          // global mode, can be either global or local
          // we set to global mode to avoid hashing tailwind classes
          mode: 'global',
          // class naming template
          localIdentName: isProduction()
            ? '[sha512:hash:base64:5]'
            : '[path][name]__[local]',
        },
      },
      webpackConfig: {
        module: {
          rules: [
            {
              // When webpack sees an import for a CSS files
              test: /\.css$/i,
              exclude: /node_modules/,
              use: [
                {
                  // use the PostCSS loader addon
                  loader: 'postcss-loader',
                  options: {
                    sourceMap: isProduction() === false,
                    postcssOptions: {
                      config: './postcss.config.js',
                    },
                  },
                },
              ],
            },
          ],
        },
      },
    },
    extraPublicTrees: [],
  });
};
