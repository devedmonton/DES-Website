import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#265DAD',
        secondary: '#37C5F0',
      },
    },
  },
}
