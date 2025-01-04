"use client";

import { createTheme, responsiveFontSizes } from "@mui/material/styles";

let theme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: (themeParam) => ({
        body: {
          "::-webkit-scrollbar": {
            dispaly: "none",
          },
        },
      }),
    },
    MuiTypography: {
      defaultProps: {
        variantMapping: {
          subtitle1: "p",
          subtitle2: "p",
          subtitle3: "p",
          body1: "p",
          body2: "p",
          body3: "p",
          body4: "p",
          body5: "p",
          caption1: "p",
          caption2: "p",
        },
      },
    },
  },

  breakpoints: {
    values: {
      xs: 0,
      sm: 390,
      md: 640,
      lg: 768,
      xl: 1080,
      "2xl": 1280,
      "3xl": 1920,
    },
  },
  palette: {
    primary: {
      main: "#",
      50: "#",
      100: "#",
      200: "#",
      300: "#",
      400: "#",
      500: "#",
      600: "#",
      700: "#",
      800: "#",
      900: "#",
    },
    darkGray: {
      main: "#",
      50: "#",
      100: "#",
      200: "#",
      300: "#",
      400: "#",
      500: "#",
      600: "#",
      700: "#",
      800: "#",
      900: "#",
    },
  },
  typography: {
    fontFamily: "NotoSansKR",
    h1: {
      fontSize: 88,
      fontWeight: 700,
    },
    h2: {
      fontSize: 64,
      fontWeight: 700,
    },
    h3: {
      fontSize: 48,
      fontWeight: 700,
    },
    h4: {
      fontSize: 36,
      fontWeight: 700,
    },
    h5: {
      fontSize: 32,
      fontWeight: 700,
    },
    subtitle1: {
      fontSize: 30,
      fontWeight: 400,
      fontFamily: "AssacomFreeGothic",
    },
    subtitle2: {
      fontSize: 24,
      fontWeight: 700,
      fontFamily: "Pretendard",
    },
    subtitle3: {
      fontSize: 20,
      fontWeight: 400,
      fontFamily: "AssacomFreeGothic",
    },
    body1: {
      fontSize: 15,
      fontWeight: 400,
      fontFamily: "AssacomFreeGothic",
    },
    body2: {
      fontSize: 14,
      fontWeight: 400,
      fontFamily: "AssacomFreeGothic",
    },
    body3: {
      fontSize: 13,
      fontWeight: 400,
      fontFamily: "AssacomFreeGothic",
    },
    body4: {
      fontSize: 12,
      fontWeight: 400,
      fontFamily: "NotoSansKR",
    },
    body5: {
      fontSize: 10,
      fontWeight: 400,
      fontFamily: "NotoSansKR",
    },
    caption1: {
      fontSize: 12,
      fontWeight: 400,
      fontFamily: "NotoSansKR",
    },
    caption2: {
      fontSize: 11,
      fontWeight: 400,
      fontFamily: "AssacomFreeGothic",
    },
  },
});

export default theme;
