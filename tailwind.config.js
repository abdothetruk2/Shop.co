// tailwind.config.js
module.exports = {
  content: [
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './app.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2DD4BF',   // custom example
        brand: '#1da1f2',
        mycustom: '#f9c846'
      },
    },
  },
  plugins: [    require('flowbite/plugin')],
}
