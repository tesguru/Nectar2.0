/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        rubik: ["Gilroy-Regular", "sans-serif"],
        "gilroy-bold": ["Gilroy-Bold", "sans-serif"],
        "giloy-extrabold": ["Gilroy-ExtraBold", "sans-serif"],
        "gilroy-medium": ["Gilroy-Medium", "sans-serif"],
        "gilroy-semibold": ["Gilroy-SemiBold", "sans-serif"],
        "gilroy-light": ["Gilroy-Light", "sans-serif"],
      },
      colors: {
        primary: {
          100: "#53B175",
          300: "#0061FF",
        },
        info: {
          100: "#5383EC",
          200: "#4A66AC",
        },
        black: {
          DEFAULT: "#000000",
          100: "#828282",
          200: "#666876",
          300: "#191D31",
        },
        danger: "#F75555",
      },
    },
  },
  plugins: [],
};
