module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx}",
    "./src/components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'home': "url('/public/bg.jpg')",
      },
    }
  },
  plugins: [],
}
