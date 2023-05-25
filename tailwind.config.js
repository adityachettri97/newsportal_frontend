/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      scale: {
        '175': '1.75',
        '200': '2.75',
        '300': '3.75',
      }
    },
    colors: {
      skyblue: "#4db2ec",
      brightskyblue: "#5ebaf0",
      blue:"#2874FC",
      offblue:"#417096",
      brightblue:"#0693e3",
      purple:"#6850e0",
      pinkishpurple:"#8954c1",
      brightpurple:"#735ddf",
      white: "#ffffff",
      black: "#000000",
      black2:"#222222",
      transblack:"#0000007A",
      transblack2:"#000000B3",
      darkgrey:'#444444',
      lightgrey: "#747474",
      thingrey:"#a9b8c350",
      bluishgrey:"#5d7987",
      red:"#cf2e2e",
      brightred:"#f74a4a",
      pink:"#f78da7",
      pinkish:"#e8436c",
      darkpink:"#ce2d70",
      facebook:"#516eab",
      twitter:"#29c5f6",
      pinterest:"#ca212a",
      whatsapp:"#7bbf6a",
      youtube:"#e14e42",
      transparentgrey:"#00000080",
      orange:"#f96945",
      orangered:"#f24d4d",
      goldenyellow:"#f9c100",
      leafgreen:"#3a863d",
     
    },
  },
  plugins: [],
}