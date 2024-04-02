/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      backgroundImage : {
        'hero-img-1' : "url('/assets/artur-aldyrkhanov-_omYGHPwGEU-unsplash.jpg')",
        'hero-img-2' : "url('/assets/paul-kansonkho-9xjHQvdMi4c-unsplash.jpg')",

      }
    },
  },
  plugins: [],
}

