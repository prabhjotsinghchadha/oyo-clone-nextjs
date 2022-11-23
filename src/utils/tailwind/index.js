const YAML = require('./yaml');

const extensions = YAML.read('./elements/entensions.yaml');
const foundations = YAML.read('./elements/foundations.yaml');

module.exports = {
  content: [
    './public/**/*.html',
    './.storybook/**/*.{mdx,js,jsx,ts,tsx,vue,css,scss,yaml}',
    './src/**/*.{mdx,js,jsx,ts,tsx,vue,css,scss,yaml}',
    './src/**/**/*.{mdx,js,jsx,ts,tsx,vue,css,scss,yaml}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      ...foundations,
      ...extensions,
    },
  },
  plugins: [],
};
