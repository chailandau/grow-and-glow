import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/atoms/**/*.{js,ts,jsx,tsx,mdx}',
    './src/molecules/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './app/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        white: '#ffffff',
        offWhite: '#f9f9f7',
        darkGray: '#3b3b3d',
        gold: '#cb872c'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      },
      fontFamily: {
        sans: ['var(--font-montserrat)'],
        serif: ['var(--font-playfair)']
      },
      transitionProperty: {
        size: 'width, height',
        spacing: 'padding, margin'
      }
    }
  },
  plugins: []
};
export default config;
