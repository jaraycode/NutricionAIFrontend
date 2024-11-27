module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          darkGreen: '#32794F',
        },
        secondary: {
          mediumGreen: '#BEEBC2',
          lightGreen: '#DDF7E3',
          red: '#DC2F39',
        },
        black: {
          white: '#FFFFFF',
          black: '#000000',
          100: '#F5F5F5',
          200: '#E0E0E0',
          300: '#BDBDBD',
          500: '#757575',
          600: '#616161',
          800: '#252525',
        },
      },
      fontFamily: {
        openSans: ['Open Sans', 'sans-serif'],
      },
      fontSize: {
        'p1-regular': ['1.25rem', '1.6875rem'], // 20px, 27px
        'p1-bold': ['1.25rem', '1.6875rem'],   // 20px, 27px
        'p2-bold': ['1.125rem', '1.5625rem'],  // 18px, 25px
        'p2-regular': ['1.125rem', '1.5625rem'], // 18px, 25px
        'p3-regular': ['1.5rem', '2.0625rem'], // 24px, 33px
        'p4-regular': ['0.875rem', '1.1875rem'], // 14px, 19px
        'p5-regular': ['1rem', '1.375rem'],    // 16px, 22px
        'h3-bold': ['1.75rem', '2.375rem'],    // 28px, 38px
        'h2-bold': ['3.625rem', '2.375rem'],   // 58px, 38px
      },
      fontWeight: {
        normal: '400',
        bold: '700',
      },
    },
  },
  plugins: [],
}