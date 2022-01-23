module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
      fontFamily:{
        Poppins: ['Poppins', 'sans-serif'],
      },
    extend: {
            backgroundImage: {        
              'hero': "url('/hero.jpg')"    
             }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
