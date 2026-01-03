/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // Custom breakpoints for responsive padding
      screens: {
        '350': '350px',
        '480': '480px',
        '650': '650px',
        '1300': '1300px',
        '1400': '1400px',
        '1500': '1500px',
        '1600': '1600px',
      },
      // Colors extracted from Figma design
      colors: {
        'pevona-dark': '#002F57',
        'pevona-green': '#29902E',
        'pevona-blue': '#0073B5',
        'pevona-bg': '#FAFAFA',
        'pevona-text': '#333333',
        'pevona-text-light': '#666666',
        'pevona-white': '#FFFFFF',
        'pevona-border': 'rgba(0, 0, 0, 0.12)',
        'pevona-overlay': 'rgba(0, 0, 0, 0.69)',
      },
      // Font families from Figma
      fontFamily: {
        'crimson': ['Crimson Text', 'serif'],
        'manrope': ['Manrope', 'sans-serif'],
      },
      // Font sizes from Figma design
      fontSize: {
        'xs': ['14px', { lineHeight: '24px' }],
        'sm': ['16px', { lineHeight: '26px' }],
        'base': ['18px', { lineHeight: '28px' }],
        'lg': ['20px', { lineHeight: '30px' }],
        'xl': ['22px', { lineHeight: '32px' }],
        '2xl': ['26px', { lineHeight: '36px' }],
        '3xl': ['40px', { lineHeight: '40px' }],
        '4xl': ['42px', { lineHeight: '52px' }],
        '5xl': ['56px', { lineHeight: '56px' }],
        '6xl': ['66px', { lineHeight: '66px' }],
      },
      // Font weights from Figma
      fontWeight: {
        'light': '300',
        'normal': '400',
        'medium': '500',
        'semibold': '600',
        'bold': '700',
      },
      // Spacing values from Figma design
      spacing: {
        '2px': '2px',
        '8px': '8px',
        '10px': '10px',
        '16px': '16px',
        '26px': '26px',
        '36px': '36px',
        '37px': '37px',
        '60px': '60px',
        '98px': '98px',
        '113px': '113px',
        '131px': '131px',
        '135px': '135px',
        '139px': '139px',
        '150px': '150px',
        '176px': '176px',
        '200px': '200px',
        '204px': '204px',
        '217px': '217px',
        '223px': '223px',
        '225px': '225px',
        '240px': '240px',
        '333px': '333px',
        '451px': '451px',
        '480px': '480px',
        '562px': '562px',
        '653px': '653px',
        '670px': '670px',
        '800px': '800px',
        '826px': '826px',
        '896px': '896px',
        '1182px': '1182px',
        '1336px': '1336px',
        '1560px': '1560px',
      },
      // Border radius from Figma
      borderRadius: {
        '8px': '8px',
        '10px': '10px',
        '12px': '12px',
        '16px': '16px',
        '26px': '26px',
        '36px': '36px',
        '100px': '100px',
      },
      // Letter spacing from Figma
      letterSpacing: {
        'tight': '-1.68px',
        'tighter': '-1.98px',
      },
      // Opacity values
      opacity: {
        '12': '0.12',
        '20': '0.20',
        '60': '0.60',
        '69': '0.69',
        '80': '0.80',
      },
    },
  },
  plugins: [],
}
