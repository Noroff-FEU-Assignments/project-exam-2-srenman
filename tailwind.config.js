module.exports = {
  theme: {
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
    },
    extend: {
      colors: {
        primary: {
          900: '#424947',
          800: '#5C6663',
          700: '#6A7472',
          600: '#778380',
          500: '#84918E',
          400: '#9DA7A5',
          300: '#B5BDBB',
          200: '#CED3D2',
          100: '#E6E9E8',
        },
        secondary: {
          900: '#575453',
          800: '#837E7C',
          700: '#999391',
          600: '#C4BDBA',
          500: '#DAD2CF',
          400: '#E1DBD9',
          300: '#EDE9E7',
          200: '#F4F2F1',
          100: '#FBFBFA',
        },
      },
      fontFamily: {
        cormorant: ['Cormorant Garamond', 'serif'],
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
