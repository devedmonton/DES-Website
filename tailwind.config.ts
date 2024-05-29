import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#265DAD',
        secondary: '#37C5F0',
        primaryWithOpacity: 'rgba(38,93,173,0.5)',
        secondaryWithOpacity: 'rgba(55,197,240,0.5)',
      },
    },
  },
}
