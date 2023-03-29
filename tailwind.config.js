/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [],
  theme: {
    extend: {},
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
  purge: ["./src/**/*.{js,ts,jsx,tsx}"],
};
