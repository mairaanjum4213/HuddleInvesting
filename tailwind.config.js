/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {


  


    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },

      colors: {
        primary: "#377E31",
        mist: "#647959",
        epsilon: "#50CC4D",
        alpha: '#E7FFE6',
        lambda: '#337E31',
        zeta: "#004700",
        theta: "#647959",
        iota: "#F3FFF3",
        light: "#777777",
        inputFields: '#0B0B0B',
        lightBg: '#C4FFC3',
        lightEpsilon: '#F0FFF0',
        lightBackground: '#F5F5F5',
        Green3:'#F4FFF4',
        Green200:'#4EC24C',
        Green300:'#00A961',
        Green400:'#129F58',
        Green450:'#0C9955',
        Green475:'#005B2F',
        Green500:'#004700',
        Green600:'#002500',
   
        Green100:'#DCFFDC',

      },

      fontFamily: {
        "Satoshi-Black": ["Satoshi-Black", "sans-serif"],
        "NunitoSans-Regular": ["NunitoSans-Regular", "sans-serif"],
        'Lexend-Regular': ['Lexend-Regular', "sans-serif"],
        "Poppins-Regular": ["Poppins-Regular", "sans-serif"],
        "NunitoSans-Regular": ["NunitoSans-Regular", "sans-serif"],
      }
    },
  },
  plugins: [],
};
