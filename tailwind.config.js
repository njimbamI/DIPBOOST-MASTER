module.exports = {
  content: ["./src/**/*.{html,js}",
  'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
],
  theme: {

    extend: {
      animation :{
       popup: 'popup 6s ease forwards',
      } ,
      keyframes: {
       popup:  {
        transform: 'scale(1)',
       } ,
      },
    },
    screens: {
      'xs': '480px',
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}