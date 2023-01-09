const path = require('node:path');
// const defaultTheme = require('tailwindcss/defaultTheme');
const appEntry = path.join(__dirname, 'app');
const relevantFilesGlob = '**/*.{html,js,ts,hbs,gjs,gts}';

module.exports = {
  content: [path.join(appEntry, relevantFilesGlob)],
  content: ['./app/**/*.hbs'],
  theme: {
    extend: {
      text: {
        h1: '4.4 rem',
      },
      boxShadow: {
        input: 'inset 0 0 0 .2rem',
      },
      colors: {
        au: {
          white: '#FFFFFF',
          gray: {
            100: '#F7F9FC',
            200: '#e8ebee',
            300: '#CFD5DD',
            500: '#8695A8',
            700: '#687483',
            900: '#333332',
            1000: '#000000',
          },
          blue: {
            200: '#E4EBF5',
            300: '#B2CCEF',
            500: '#5990DE',
            700: '#0055CC',
            900: '#003B8E',
          },
          yellow: {
            300: '#FFE615',
          },
          orange: {
            200: '#fff9e8',
            300: '#FFEEB9',
            400: '#FFE49C',
            500: '#FFA10A',
            600: '#D07B06',
            700: '#9F5804',
          },
          red: {
            200: '#FBEDED',
            300: '#F4C8C9',
            400: '#F1AEAE',
            600: '#D2373C',
            700: '#AA2729',
          },
          green: {
            200: '#ecf6ee',
            300: '#C5E5CC',
            400: '#b1dcbb',
            500: '#009E47',
            700: '#007A37',
          },
        },
        vl: {
          lime: {
            100: '#A3CC00',
            120: '#6F8B00',
          },
          brick: {
            100: '#D53D5E',
            120: '#85273B',
          },
          chocolate: {
            100: '#D26E25',
            120: '#904E1D',
          },
          picton: {
            100: '#32B1E9',
            120: '#16465B',
          },
        },
      },
    },
  },
  plugins: [],
};
