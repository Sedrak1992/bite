import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider, createTheme } from "@material-ui/core/styles";
import "./index.css";
import App from "./App";

const theme = createTheme({
  palette: {
    primary: {
      main: "#5326D4",
    },
    text: {
      primary: "#172345",
      secondary: "#fff",
    },
  },
  overrides: {
    MuiButton: {
      root: {
        borderRadius: "50px",
      },
      outlinedPrimary: {
        border: " 3px solid #4144BF",
        background: "#fff",
        "&:hover": {
          border: " 3px solid #4144BF",
          background: "#fff",
        },
      },
    },
  },
  typography: {
    fontFamily: "Roboto",
    h1: {
      fontSize: 62,
    },
    body1: {
      fontSize: 29,
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
