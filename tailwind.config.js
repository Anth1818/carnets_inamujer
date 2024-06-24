/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-pattern': "url('./public/fondo_superior.png')",
        'custom-pattern2': "url('./public/fondo_inferior.png')",
        'custom-pattern3': "url('./public/cintillo_ministerio.png')",
      },
    },
  },
  plugins: [],
}

