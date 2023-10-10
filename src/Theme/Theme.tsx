import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: "Arial, sans-serif",
    
    h1: {
      fontSize: 25,
      fontWeight: 900,
    },
    h3: {
      fontSize: 1,
      fontWeight: 600,
    },
    subtitle1: {
      fontSize: 12,
    },
    body1: {
      fontWeight: 500,
    },
    body2: {
      textDecoration: "underline",
    },
    button: {
      fontStyle: "italic",
    },
  },
});


export default theme;
