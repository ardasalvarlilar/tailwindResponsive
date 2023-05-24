/** @type {import('tailwindcss').Config} */
module.exports = {
  mode:'jit',
  content: ['index.html'],
  theme: {
    extend: {
      colors:{
        'burlywood':'#DEB786',
        'bootstrap':'#6D2BF0',
        'tailwind':' #37BCF8',
        'scss': '#CD679A',
        'css': '#0074D9',
        'html':'#808080',
        'javascript':'#FFD700',
        'react':' #61DAFB'
      },
      spacing: {
        '700': '43rem'
    },
  },
  plugins: [],
}
}