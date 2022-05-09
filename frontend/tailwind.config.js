module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#31cfda',
      },
      backgroundImage: {
        main: 'linear-gradient(122deg, #317bda -6%, #33c3c8);',
        offer: "url('/src/assets/offer-background.svg')",
      },
    },
  },
  plugins: [],
};
