/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      minHeight: {
        "screen-130": "calc(100vh - 145px)",
      },
    },
  },
  plugins: [],
};
