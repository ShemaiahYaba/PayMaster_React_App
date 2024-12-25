/** @type {import('tailwindcss').Config} */
import { fontFamily as _fontFamily } from "tailwindcss/defaultTheme";

export const content = [
  "./src/**/*.{js,jsx,ts,tsx}", // Updated to capture all subfolders and js/jsx/ts/tsx files
  "./index.html", // Adjust path if this is not in the project root
];
export const theme = {
  extend: {
    fontFamily: {
      sans: ["Poppins", "Inter var", ..._fontFamily.sans],
    },
  },
};
export const important = true;
import forms from "@tailwindcss/forms";

export const plugins = [
  forms, // Adds the Tailwind forms plugin
];
