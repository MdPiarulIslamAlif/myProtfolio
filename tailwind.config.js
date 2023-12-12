/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        anton: "Anton",
        cursive: "Permanent Marker",
        noto: 'Noto Sans',
      },
    },
  },
  plugins: [require("daisyui")],
};
