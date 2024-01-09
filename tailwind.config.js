/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        main1: '#062139',
        main2: '#29DDF6',
        sub1: '#FFEC3E',
        sub2: 'FF2167',
        gray1: '#f8f8f8',
        gray2: '#ededed',
        gray3: '#d7d7d7',
        gray4: '#888',
        gray5: '#5e5e5e',
        gray6: '#38393C',
        gray7: '#1E1E1E',
        red: '#FF0F00',
      },
    },
  },
  plugins: [],
};
