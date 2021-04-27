module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          900: '#0E121D',
          800: '#17243E',
          700: '#1B3963',
          600: '#3A5176',
          500: '#58698A',
          400: '#76829E',
          300: '#949CB2',
          200: '#B1B6C6',
          100: '#CED1DB',
          50: '#EBECF0',
        },
      },
    },
  },
  variants: {},
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
  purge: {
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.js',
    ],
  },
}
