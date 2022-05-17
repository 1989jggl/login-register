module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        home: "url('/src/assets/img/bg/bg-home.webp')"
      },
      colors: {
        'transparent-custom': 'rgba(255, 255, 255, 0.02)',
        'primary-custom': '#3699ff',
        'danger-custom': '#f64e60'
      }
    }
  },
  plugins: []
}
