const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Prompt', ...defaultTheme.fontFamily.sans],
      }
    },
  },
  plugins: [],
}
