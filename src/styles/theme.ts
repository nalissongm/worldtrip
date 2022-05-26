import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  fonts: {
    heading: "Poppins",
    body: "Poppins",
    card: "'Barlow', sans-serif",
  },
  colors: {
    gray: {
      "900": "#000000",
      "700": "#47585B",
      "500": "#999999",
      "400": "rgba(153, 153, 153, 0.5)",
      "300": "#DADADA",
      "200": "#F5F8FA",
      "100": "#ffffff",
    },
    yellow: {
      "900": "#FFBA08",
      "350": "rgba(255, 186, 8, 0.5)",
    },
  },
  styles: {
    global: {
      body: {
        bg: "gray.200",
        color: "gray.700",
      },
    },
  },
});
