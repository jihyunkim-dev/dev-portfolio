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
      main: "#9E6BCE",
      50: "#FAF5FF",
      100: "#F3E8FF",
      200: "#E0CCF6",
      300: "#CBAAED",
      400: "#BD92E8",
      500: "#9E6BCE",
      600: "#7D48AC",
      700: "#6B2DA0",
      800: "#572084",
      900: "#45156A",
    },
    gray: {
      main: "#78716C",
      50: "#FAFAF9",
      100: "#F5F5F4",
      200: "#E7E5E4",
      300: "#D6D3D1",
      400: "#A8A29E",
      500: "#78716C",
      600: "#57534E",
      700: "#44403C",
      800: "#292524",
      900: "#1C1917",
    },
    darkGray: {
      main: "#6B7280",
      50: "#F9FAFB",
      100: "#F3F4F6",
      200: "#E5E7EB",
      300: "#D1D5DB",
      400: "#9CA3AF",
      500: "#6B7280",
      600: "#4B5563",
      700: "#374151",
      800: "#1F2937",
      900: "#111827",
    },
    sageGreen: {
      main: "#859080",
      50: "#F7F7F3",
      100: "#E9EDE4",
      200: "#D1DBCC",
      300: "#B8C5B1",
      400: "#9CAA93",
      500: "#859080",
      600: "#6B7568",
      700: "#555F52",
      800: "#404840",
      900: "#2C322B",
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
