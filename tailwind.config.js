/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";

export default {
  // Where Tailwind should look for class names
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Updated to capture all subfolders and js/jsx/ts/tsx files
    "./index.html", // Adjust path if this is not in the project root
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "Inter var", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  important: true, // Makes Tailwind's styles take priority
  plugins: [
    import("@tailwindcss/forms"), // Adds the Tailwind forms plugin
  ],
};
