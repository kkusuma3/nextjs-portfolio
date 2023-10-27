module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
        fontFamily: {
            'bebas': ['Bebas Neue', 'sans-serif'],
            'catamaran': ['Catamaran', 'sans-serif'],
            'jakarta-sans': ['Plus Jakarta Sans', 'sans-serif'],
        },
        colors: {
            'accent-1': '#333',
            'maroon': '#612C42',
            'pale-cyan': '#EAF2EF',
            'blue-sapphire': '#28536B',
            'light-blue-sapphire': '#66A6CA',
            'yellow-crayola': '#FFEB85',
        },
    },
  },
  variants: {},
  plugins: [],
  darkMode: 'class'
}
