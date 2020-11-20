import { createMuiTheme } from "@material-ui/core/styles";
import { blue, red, orange, grey } from "@material-ui/core/colors";

// Create a theme instance.
const SygefexTheme = createMuiTheme({
  palette: {
    primary: {
      // main: "#C28B2B",
      main: "#044562",
      light: "#f00",
      // main: "#0780b7",
    },
    secondary: {
      main: "#19857b",
      light: "#a2463c",
    },
    error: {
      main: red.A200,
    },
    background: {
      default: "#e2e7e8",
    },
  },
  typography: {
    fontFamily: ["Roboto", "sans-serif"].join(","),
    body2: {
      fontFamily: "Roboto",
      fontSize: "0.8rem",
    },
    body1: {
      fontFamily: "Roboto",
      fontSize: "1rem",
    },
    subTitle1: {
      fontFamily: "Roboto",
      fontSize: "0.7rem",
    },
    subTitle2: {
      fontFamily: "Roboto",
      fontSize: "0.5rem",
    },
    h6: {
      fontFamily: "Roboto",
      fontSize: "0.8rem",
    },
  },
  shape: {
    borderRadius: "0.4rem",
  },
  spacing: 2,
  overrides: {
    MuiToolbar: {
      regular: {
        minHeight: "1.5rem",
        maxHeight: "1.9rem",
      },
    },

    MuiButton: {
      root: {
        textTransform: "capitalize",
        marginTop: "0.5rem",
        marginBottom: "0.5rem",
        fontSize: "1.1rem",
        fontWeight: "bold",
        padding: "0.1rem",
        // margin: "1rem",
      },
    },
    MuiTableRow: {
      root: {
        // borderBottom: "0.113rem solid #fff",
        "&:nth-child(2n)": {
          // background: "#e2dd9f",
          background: "#faf0ff",
        },
        // "&:nth-child(2n+1)": {
        //   background: "#e4ebf8",
        // },

        "&:hover": {
          // backgroundColor: "#fff",
          backgroundColor: "#4523",
        },
      },
    },
    MuiTableHead: {
      root: {
        position: "sticky",
        top: 0,
        // zIndex: 1,
        paddingTop: "1rem",
        paddingBottom: "1rem",
        fontSize: "1.2rem",
      },
    },
    MuiIconButton: {
      root: {
        paddingTop: "0.2rem",
        paddingBottom: "0.2rem",
        fontSize: "0.9rem",
      },
    },
    MuiTableCell: {
      root: {
        paddingTop: "0.01rem",
        paddingBottom: "0.01rem",
        fontSize: "01rem",
      },
    },
    MuiFormControl: {
      root: {
        width: "90%",
        margin: "0.5rem",
        // backgroundColor: "#abcdef",
      },
    },
    MuiFormHelperText: {
      root: {
        color: orange[900],
        "&$error": {
          "&.MuiFormHelperText-root.Mui-error": {
            color: "#e65100",
          },
        },
      },
    },
  },
  props: {
    MuiButton: {
      variant: "outlined",
      color: "primary",
    },
    MuiTextField: {
      typography: {
        fontFamily: {
          fontFamily: "Comic Sans MS",
          fontSize: "0.9rem",
        },
      },
    },
    MuiInputLabel: {
      typography: {
        fontFamily: {
          fontFamily: "Comic Sans MS",
          fontSize: "0.7rem",
        },
      },
    },
    MuiPaper: {
      root: {
        minHeight: "100vh",
        backgroundColor: "#a2aabc",
      },
    },

    MuiGrid: {
      root: {
        display: "grid",
        placeItems: "center",
        direction: "column",
        alignItems: "center",
        justifyItems: "center",
      },
    },
    MuiMenuItem: {
      root: {
        fontFamily: "Comic Sans MS",
        fontSize: "0.9rem",
      },
    },
  },
});

export default SygefexTheme;
