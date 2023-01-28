/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      sm: '375px',
      md: '992px',
      lg: '1440px',
    },
    colors: {
      'pale-blue': 'hsl(225, 100%, 94%)',
      'bright-blue': 'hsl(245, 75%, 52%)',
      'very-pale-blue': 'hsl(225, 100%, 98%)',
      'desaturated-blue': 'hsl(224, 23%, 55%)',
      'dark-blue': 'hsl(223, 47%, 23%)',
      'white': "#fff"
    },
    fontFamily: {
      custom: ['Montserrat', 'sans-serif']
    },
    extend: {
      backgroundImage: {
        'desktop': "url('src/images/pattern-background-desktop.svg')",
        'mobile': "url('src/images/pattern-background-mobile.svg')",
      },
    },
    plugins: [],
  };
