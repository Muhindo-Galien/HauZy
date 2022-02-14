module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      fontFamily: {
        Mulish: ['Mulish', 'sans-serif'],
        Poppins: ['Poppins', 'sans-serif'],
      },
      screens: {
        'xsm': {'min':'300px', 'max':'399px'},
        'sm': {'min': '400px', 'max': '767px'},
        'md': { 'min': '768px', 'max': '1023px' },
        'lg': {'min': '1024px', 'max': '1279px'},
        'xl': { 'min': '1280px', 'max': '1535px' },
        '2xl': {'min': '1536px'},
      },
  }, },
  plugins: [],
}

