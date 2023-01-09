const env = process.env.EMBER_ENV || 'development';

const plugins = [
  require('tailwindcss/nesting'),
  require('tailwindcss')({ config: './styles/tailwind/tailwind.config.js' }),
  require('@csstools/postcss-sass'),
  require('autoprefixer'),
];

if (env === 'production') {
  plugins.push(
    require('cssnano')({
      preset: 'default',
    })
  );
}

module.exports = {
  plugins,
};
