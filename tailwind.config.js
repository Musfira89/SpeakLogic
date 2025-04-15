/** @type {import('tailwindcss').Config} */
const config = {
    content: [
      "./app/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        fontFamily: {
          sora: ["Sora", "sans-serif"],
        },
        animation: {
            'bounce-slow': 'bounce 3s infinite ease-in-out',
          },
          colors: {
            primary: '#47be07',
            'light-green': '#d1f7c4',
            'dark-green': '#41aa09', 
          },
          animation: {
            'float': 'float 6s ease-in-out infinite',
            'float-slow': 'float 10s ease-in-out infinite',
            'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
          },
          keyframes: {
            float: {
              '0%, 100%': { transform: 'translateY(0)' },
              '50%': { transform: 'translateY(-20px)' },
            },
          }
      },
    },
    plugins: [],
  };
  
  export default config;
  