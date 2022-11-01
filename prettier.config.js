module.exports = {
  semi: true,
  singleQuote: true,
  arrowParens: 'avoid',
  trailingComma: 'all',
  endOfLine: 'auto',
  plugins: [require('prettier-plugin-tailwindcss')],
  tailwindConfig: './tailwind.config.js',
};
