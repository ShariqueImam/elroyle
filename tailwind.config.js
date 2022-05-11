module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './node_modules/flowbite/**/*.js'

  ],
  theme: {
    screens: {
      'sm': '550px',
      'md': '1024px',
      'lg': '1400px',
      'xl': '1800px',
    },
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ]

}
