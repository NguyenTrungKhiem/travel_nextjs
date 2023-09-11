import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx}',
    "./node_modules/react-tailwindcss-datepicker/dist/index.esm.js"
  ],
  theme: {
    fontSize: {
      small: '12px',
      title: '14px',
      big: '18px',
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    container: {
      screens: {
        xs: '288px',
        sm: '728px',
        md: '1088px',
        lg: '1376px',
        xl: '1555px',
      },
    },

    // screens: {
    //   xs: { min: '200px', max: '560px' },

    //   sm: { min: '560px', max: '767px' },
    //   // => @media (min-width: 640px and max-width: 767px) { ... }

    //   md: { min: '768px', max: '1023px' },
    //   // => @media (min-width: 768px and max-width: 1023px) { ... }

    //   lg: { min: '1024px', max: '1279px' },
    //   // => @media (min-width: 1024px and max-width: 1279px) { ... }

    //   xl: { min: '1280px', max: '1535px' },
    //   // => @media (min-width: 1280px and max-width: 1535px) { ... }
    // },

    // colors: {
    //   transparent: 'transparent',
    //   'primary-red': '#E21948',
    //   white: '#ffffff',
    //   'background-footer': '#232F3E',
    //   background: '#F1F1F1',
    //   'background-slate-100': '#F1F5F9',
    //   'primary-blue': '#006BF0',
    //   'primary-yellow': '#E39D19',
    //   'primary-green': '#43B97F',
    //   'primary-dark-blue': '#0050AE',
    //   'secondary': '#295943',
    //   'title-color': '#3D3E48',
    //   'text-color': '#A8A7AB',
    // },
  },
  plugins: [],
}
export default config


