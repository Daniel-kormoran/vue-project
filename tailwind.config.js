/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
     "./node_modules/flowbite/**/*.js"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors:{
        currentColor:'var(--currentColor)',
        primary: 'var(--primary)',
        secondary: 'var(--secondary)',
        tertiary:  'var(--tertiary)',
        error:     'var(--error)' ,
        background:'var(--background)' ,
        shadow:    'var(--shadow)',
        flame:     'var( --flame)',
        coral:      'var(--coral)',
        ivory:     'var(--ivory)',
        indigo50:   'var(--indigo50)',
        indigo600:  'var(--indigo600)',
        silver_lake:'var(--silver-lake:)',
        silver:     'var(--silver)',
        delft_blue: 'var(--delft-blue)',
        amber500:   'var(--amber500)'
        
        

      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

