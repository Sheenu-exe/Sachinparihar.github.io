/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#2C7A7B',
                        'secondary': '#E6FFFA',
                        'accent': '#319795',
      },
    },
  },
  plugins: [],
}
