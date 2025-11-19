/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          surface: '#0A0A0B',
          card: '#1A1A1D',
          control: '#2A2A2D',
          text: {
            primary: '#FFFFFF',
            secondary: '#8E8E93',
            muted: '#48484A',
          },
          border: '#3A3A3C',
        },
        accent: {
          red: '#FF3B30',
          alert: '#E63946',
          green: '#34C759',
          amber: '#FFD60A',
        },
      },
      fontFamily: {
        sans: [
          '"SF Pro Display"',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          'sans-serif',
        ],
      },
      boxShadow: {
        card: '0px 12px 24px rgba(0, 0, 0, 0.35)',
        inset: 'inset 0px 0px 0px 1px rgba(255, 255, 255, 0.04)',
      },
      borderRadius: {
        xl: '24px',
        '2xl': '32px',
      },
    },
  },
  plugins: [],
}

