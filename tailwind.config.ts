/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#020203',
        secondary: "#000000",
        background: "#ECF0F1",
        foreground: "var(--foreground)",
        accent: "#a1a1aa",
        text: "#34495E",
      },
      scale: {
        '105': '1.05',
      },
      transitionProperty: {
        'size': 'transform, opacity',
      },
    },
  },
  plugins: [],
}