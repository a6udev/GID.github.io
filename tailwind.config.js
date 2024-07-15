/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"], // Specifies where Tailwind should look for HTML and JavaScript/TypeScript files to generate utility classes
  theme: {
    container: {
      center: true, // Centers the container horizontally using mx-auto utility class
      screens: {
        sm: "100%", // Full width on small screens
        md: "100%", // Full width on medium screens
        lg: "1140px", // Maximum width of 1140px on large screens
        xl: "1140px", // Maximum width of 1140px on extra large screens
        "2xl": "1700px", // Maximum width of 1650px on 2xl screens
      },
    },
  },
  plugins: [], // Any additional plugins you might want to add go here
};
