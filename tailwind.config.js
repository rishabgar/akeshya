/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        upDown: {
          "0%": {
            transform: `translateY(10px)`,
          },
          "100%": {
            transform: `translateY(-10px)`,
          },
        },
      },
      spacing: {
        "calc-50-minus-10": "calc(50% - 10px)",
        "calc-100-minus-20": "calc(100% - 20px)",
      },
      colors: {
        "custom-blue": "#14279B",
      },
      boxShadow: {
        "custom-light": "0px 2px 15px rgba(0, 0, 0, 0.1)",
        "footer-shadow": "0px 0px 12px 0px rgba(0, 0, 0, 0.1)",
        "navbar-shadow": "0px 2px 15px rgba(0, 0, 0, 0.1)",
      },
    },
  },
  plugins: [],
};
