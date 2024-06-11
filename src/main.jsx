import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const colors = {
  brand: {
    900: "#1a365d",
    800: "#153e75",
    700: "#2a69ac",
  },
  background: {
    light: "#f0f0f0", // Light background color similar to Financial Times
    dark: "#dcdcdc",  // Darker shade for contrast if needed
  },
};

const theme = extendTheme({
  colors,
  styles: {
    global: {
      "html, body": {
        backgroundColor: colors.background.light,
      },
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
