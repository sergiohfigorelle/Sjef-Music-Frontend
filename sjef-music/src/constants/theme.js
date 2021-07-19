import { createTheme } from "@material-ui/core/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#0099FF",
      dark: "#008AE6",
      contrastText: "#fff",
    },
    secondary: {
      main: "#FF0000",
      dark: "#E60000",
      contrastText: "#fff",
    },
  },

  overrides: {
    MuiButton: {
      root: {
        borderRadius: 9999,
        textTransform: "none",
      },
    },

    MuiInputBase: {
      input: {
        backgroundColor: "white",
      },
    },
  },
});

export default theme;
