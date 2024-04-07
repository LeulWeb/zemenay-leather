import withMT from "@material-tailwind/react/utils/withMT";
 
export default withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  
  theme: {
    fontFamily: {
      sans: [
        "Poppins",
        "Helvetica",
        "Arial",
        "sans-serif",
      ],
  
    },
    extend: {
      colors:{
        "primary": "#964B00",
        'secondary': "#e3bc9a"
      },
      fontFamily:{
         'athena': ['Athena of the Ocean', 'serif'],
      }
      
    },
    backgroundImage: {
      "hero-background" : "url('./brown_bg.jpg')",
      "bag-1": "url('./two_bag_remove_bg.png')"
    }
  },
  plugins: [],
});