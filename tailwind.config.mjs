
/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./app/**/*.{js,jsx}', './components/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: { sf: { primary: '#6a11cb', secondary: '#2575fc', accent: '#ffb703' } },
      boxShadow: { soft: '0 12px 28px rgba(0,0,0,.08)' },
      borderRadius: { '2xl': '1.25rem' }
    }
  },
  plugins: []
}
