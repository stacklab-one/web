/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{vue,ts}",
    "./components/**/*.{vue,ts}",
    "./layouts/**/*.{vue,ts}",
    "./plugins/**/*.{js,ts}",
  ],
  theme: {
    extend: {
        colors: {
            primary: {
                DEFAULT: "#FF6363",
                weak: "#FFA8A8"
            },
            secondary: {
                DEFAULT: "#5651DB",
                weak: "#9F7AEA"
            }
        }
    },
  },
  plugins: [],
}

