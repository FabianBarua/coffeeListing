/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        'coffee-black-primary': '#1B1D1F',
        'coffee-black-bg': '#111315',
        'coffee-gray': '#6F757C',
        'coffee-cyan': '#BEE3CC',
        'coffee-white': '#FEF7EE',
        'coffee-yellow': '#F6C768',
        'coffee-red': '#ED735D'
      },
      backgroundImage: {
        'coffee-bg-image': "url('/bg-cafe.jpg')"
      },
      fontFamily: {
        DM: ['DM-REGULAR']
      }
    }
  },
  plugins: []
}
