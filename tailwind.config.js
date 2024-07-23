/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-pattern': "url('./public/fondo_superior_1.png')",
        'custom-pattern2': "url('./public/fondo_inferior_1.png')",
        'custom-pattern3': "url('./public/cintillo_ministerio.png')",
      },
    },
  },
  plugins: [],
}

