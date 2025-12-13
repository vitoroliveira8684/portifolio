// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}', // Make sure it includes your src directory[
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',

  ],
  theme: {
    extend: {
      // ... your custom theme extensions
    },
  },
  plugins: [
    // ... any Tailwind plugins you are using
  ],
}