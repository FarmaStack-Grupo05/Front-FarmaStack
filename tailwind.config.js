/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {},
    colors: {
      'my-green': ' #59DE59',
    },
  },
  plugins: [('@tailwindcss/forms'),],
}


