import { extendTheme } from "native-base";

export const theme = extendTheme({
  colors: {
    primary: {
      100: "#C6DCF8",
      200: "#90B8F1",
      300: "#5585D6",
      400: "#2B57AD",
      500: "#002577",
      600: "#001C66",
      700: "#001555",
      800: "#000E45",
      900: "#000A39",
    },
    gray: {
      light: "#CCC",
    },
  },
  fontConfig: {
    Montserrat: {
      100: {
        normal: "Montserrat_100Thin",
      },
      200: {
        normal: "Montserrat_200ExtraLight",
      },
      300: {
        normal: "Montserrat_300Light",
      },
      400: {
        normal: "Montserrat_400Regular",
      },
      500: {
        normal: "Montserrat_500Medium",
      },
      600: {
        normal: "Montserrat_600SemiBold",
      },
      700: {
        normal: "Montserrat_700Bold",
      },
      800: {
        normal: "Montserrat_800ExtraBold",
      },
      900: {
        normal: "Montserrat_900Black",
      },
    },
  },

  fonts: {
    heading: "Montserrat",
    body: "Montserrat",
    mono: "Montserrat",
  },

  components: {
    FormControlLabel: {
      baseStyle: { _text: { fontFamily: "Montserrat_700Bold" } },
    },
  },
});
