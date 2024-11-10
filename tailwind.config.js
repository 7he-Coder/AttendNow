/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'headerBgcolor': '#161635',
        'countryBtn': '#323232',
        'lightPurple': '#ac3cf7',
        'darkBlue': '#4329ba',
        'heroBtn': '#7c69ba',
        'aboutPrice': '#e8e6e6',
        'priceBg': '##c7c7c7',
        'priceBtncolor': '#911dff',
      },
      fontSize: {
        'paraTextmd': '17px',
        'paraTextlg': '22px',
        'paraTextxl': '25px',
        'paraText2xl': '27px',
      },
      fontFamily: {
        futura: ["FuturaLig", "Futura Book", "sans-serif"],
        futuraLg: ["FuturaLig"],
        futuraBk: ["Futura Book"],
        futuraMd: ["Futura LT W01 Medium"],
      },
      backgroundImage: {
        'heroGradient': 'radial-gradient(circle at 94.35384114583333% 89.61588541666666%, #8786BE 0%, 20%, rgba(135, 134, 190, 0) 40%), radial-gradient(circle at 6.503906249999999% 88.037109375%, rgba(124, 105, 186, 0.99) 0%, 25%, rgba(124, 105, 186, 0) 50%), radial-gradient(circle at 6.165364583333333% 12.617187499999998%, #42419E 0%, 42%, rgba(66, 65, 158, 0) 70%), radial-gradient(circle at 93.6865234375% 11.42578125%, #9757BF 0%, 42%, rgba(151, 87, 191, 0) 70%), radial-gradient(circle at 48.9013671875% 49.521484375%, #FFFFFF 0%, 100%, rgba(255, 255, 255, 0) 100%)',
      }
    },
  },
  plugins: [],
}