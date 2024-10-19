/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Add this line to include all relevant React files
  ],
  theme: {
    extend: {
      boxShadow: {
        'even-3xl': '0 0 100px rgba(189, 128, 43, 0.7)', // Even shadow around all sides
        'sm-even-3xl': '0 0 100px rgba(189, 128, 43, 0.5)',
      },
      fontFamily: {
        Helvectica: ["Helvectica Nuel", "sans-serif"],
        sans: ['"Open Sans"', 'sans-serif'],
        roman: ['Cinzel', 'serif'], // Add your desired font here
        "OpenSans-Light": ["OpenSans-Light"],
        "OpenSans-Regular": ["OpenSans-Regular"],
        "OpenSans-Medium": ["OpenSans-Medium"],
        "OpenSans-Bold": ["OpenSans-Bold"],
        "OpenSans-ExtraBold": ["OpenSans-ExtraBold"],
        "HelveticaNeue-UltraLight": ["HelveticaNeue-UltraLight"],
        "HelveticaNeue-Thin": ["HelveticaNeue-Thin"],
        "HelveticaNeue-Regular": ["HelveticaNeue-Regular"],
        "HelveticaNeue-Medium": ["HelveticaNeue-Medium"],
        "HelveticaNeue-Bold": ["HelveticaNeue-Bold"],
        "HelveticaNeue-Heavy": ["HelveticaNeue-Heavy"],
        "HelveticaNeue-Black": ["HelveticaNeue-Black"],
        "Inter-Thin": ["Inter-Thin"],
        "Inter-Extralight": ["Inter-Extralight"],
        "Inter-Light": ["Inter-Light"],
        "Inter-Regular": ["Inter-Regular"],
        "Inter-Medium": ["Inter-Medium"],
        "Inter-Bold": ["Inter-Bold"],
        "Inter-Extrabold": ["Inter-Extrabold"],
        "Inter-Black": ["Inter-Black"],
      },
      colors: {
        PrimaryColor: {
          "950": "rgb(18, 13, 7)",
          "50": "rgb(248, 243, 237)",
          "500": "rgb(149, 111, 62)",
          "100": "rgb(240, 231, 219)",
          "200": "rgb(225, 207, 183)",
          "300": "rgb(210, 183, 147)",
          "400": "rgb(195, 159, 111)",
          "500": "rgb(149, 111, 62)",
          "600": "rgb(144, 108, 60)",
          "700": "rgb(108, 81, 45)",
          "800": "rgb(72, 54, 30)",
          "900": "rgb(36, 27, 15)"
        },
        SecondaryColor: {
          "950": "rgb(21, 15, 5)",
          "50": "rgb(250, 245, 234)",
          "500": "rgb(149, 111, 62)",
          "100": "rgb(245, 234, 214)",
          "200": "rgb(236, 214, 172)",
          "300": "rgb(226, 193, 131)",
          "400": "rgb(217, 172, 89)",
          // "500" : "rgb(217, 172, 89)",
          "600": "rgb(166, 121, 38)",
          "700": "rgb(124, 91, 29)",
          "800": "rgb(83, 61, 19)",
          "900": "rgb(41, 30, 10)"
        },
        BLACK: {
          "500": "rgb(77, 79, 74)",
        }
      },
      backgroundImage: {
        'countdown-bg': 'linear-gradient(135deg, #FFC250 0%, #9F6C2D 39%, #FFE69A 100%)',
        'roman-gradient': 'linear-gradient(to bottom, #BD802B 0%, #FFC250 90%)',
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
}

