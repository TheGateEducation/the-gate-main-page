/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
     
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        customOrange: '#EDA74C',
        customOrangeHover: '#d99530',
        customPurple: '#5F338B',
        customMint: '#699984',
        whiteNotWhite: '#FCFBF8',
        whiteNotWhiteHover: '#F0EFEA',
        textGray: '#535353',
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      spacing: {
        '100': '30rem',
        '128': '32rem'
      },
      
      margin: {
        "30": "7.5rem",
        "40": "10rem"
      },
      fontFamily: {
        poppins: ["var(--font-poppins)", "Poppins", "sans-serif"],
        Montserrat: ["Montserrat", "sans-serif"],
      },
      animation: {
        'infinite-scroll': 'infinite-scroll 70s linear infinite',
        'img-cycle': 'img-cycle 4.5s ease-in-out infinite',
      },
      keyframes: {
        'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-20%)' },
        },
        'img-cycle': {
          '0%, 28%': { opacity: '1' },
          '33%, 95%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      boxShadow: {
        pill:'0 4px 4px rgba(0,0,0,0.25)',
      },    
    },
  },
  plugins: [require("tailwindcss-animate")],
};
