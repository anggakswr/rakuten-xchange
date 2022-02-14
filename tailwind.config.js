module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        '7px': '7px',
        '17px': '17px',
        '18px': '18px',
        '19px': '19px',
        '29px': '29px',
        '34px': '34px',
        '38px': '38px',
        '50px': '50px',
        '115px': '115px',
        '145px': '145px',
        '150px': '150px',
      },
      colors: {
        'blue-brand': '#002d63',
        'gray-brand': '#dddddd',
        form: '#333333',
        night: '#757575',
      },
      borderRadius: {
        '3px': '3px',
        '5px': '5px',
      },
    },
  },
  variants: {
    extend: {
      // backgroundColor: ['checked'],
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
