// postcss.config.js

const autoprefixer = require('autoprefixer');
const cssnanoConfig = {
    autoprefixer: false,
    discardComments: {removeAll: true},
    svgo: true
};
const cssnano = require('cssnano')({
  preset: ['default', { cssnanoConfig }]
});

const purgecss = require('@fullhuman/postcss-purgecss')({
  content: [
    './_site/**/*.html'
    './_site/*.html'
    './_site/assets/**/*.js'
    './**/**/*.html',
    './**/**/*.svg',
    './**/**/*.md',
    './**/**/*.jS',
    './_includes/**/*.html',
    './_includes/**/*.svg', 
    './_layouts/**/*.html', 
    './pages/**/*.md', 
    './pages/**/*.html'
  ],
  css: ['city.css'],
  safelist: ['::-webkit-scrollbar', '::-webkit-scrollbar-thumb', '::-webkit-scroll-track']
});

module.exports = {
  plugins: [
    autoprefixer,
    ...(process.env.NODE_ENV === "production" ? [cssnano, purgecss] : [])
  ],
};
