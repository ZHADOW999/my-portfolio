const flowbite = require("flowbite-react/tailwind");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      colors:{
        "dark-bg":"#0a0a0a",
        "dark-theme-textColor-1":"#ffffff",
        "dark-theme-textColor-2":"#c7c7c7",
        "accent-color":"d3e97a",
        "dark-theme-element-color":"#1a1a1a",
        "Light-bg":"#f2f2f2",
        "light-theme-textColor-1":"#0a0a0a",
        "light-theme-textColor-2":"#333333",
        "dark-mode-accent":"#D3E97A",
        "light-mode-accent":"#8CAF34",
        
      },
      
      fontFamily:{
        'main-header-font':'main-header-font',
        'small-text-font':'small-text-font',
        'sub-header-text-font':'sub-header-text-font',
        "button-font":"button-font"
      },
      
      fontSize:{
        'smaller':'0.7rem',
        1: '0.8rem',
        1.5:'0.9rem',
        2: '1rem',
        3: '1.125rem',
        4: '1.5rem',
        5: '2rem',
        6: '2.5rem',
        7:  '3rem',
        8: '3.5rem',

      },

      screens:{
        'sm': '480px',
        'md': '768px',
        'lg': '976px',
        'xl': '1024px',
        '2xl':'1250px',
        '3xl':'1440px',
      },
    },
    
    
  },
  plugins: [
    flowbite.plugin(),
  ],
}