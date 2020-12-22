import { createMuiTheme } from "@material-ui/core/styles";
import { red, orange } from "@material-ui/core/colors";

// Create a theme instance.
const SygefexTheme = createMuiTheme({
  palette: {
    primary: {
      // main: "#2c5f2d",
      main: "#829079",
      // main: "#044562",
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
      // default: "#e7e8d1",
      // default: "#cbce91ff",
      default: "#ede6b9",
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
    MuiSelect: {
      root: {
        fontSize: "1.1rem",
        paddingBottom: "0.5rem",
        height: "1.3rem",
      },
      // nativeInput: {
      //   fontSize: "0.5rem",
      // },
    },

    MuiTypography: {
      // root: {
      //   // marginBottom: "1rem",
      // },
      // body1: {
      //   fontSize: "0.8rem",
      // },
      // h6: {
      //   fontFamily: "Roboto",
      //   fontSize: "1.2rem",
      // },
    },
    MuiOutlinedInput: {
      input: {
        height: "1.2rem",
        fontSize: "1rem",
        paddingBottom: "0.5rem",
        // marginBottom: "0.5rem",
      },
      // MuiFormInputLabel: {
      //   formControl: {
      //     margin: "0.4rem",
      //   },
      //   root: {
      //     fontSize: "0.6rem",
      //   },
      // },

      // MuiMenuItem: {
      //   root: {
      //     fontSize: "0.8rem",
      //   },
      // },
    },
    MuiButton: {
      root: {
        textTransform: "capitalize",
        marginTop: "0.5rem",
        marginBottom: "0.5rem",
        fontSize: "1.1rem",
        fontWeight: "bold",
        padding: "0.1rem",
        // minWidth: "40%",
        margin: "1rem",
        // backgroundColor: "rgba(255, 125, 0, 0.65)",
      },
    },
    MuiTableRow: {
      root: {
        // borderBottom: "0.113rem solid #fff",
        "&:nth-child(2n)": {
          backgroundColor: "#e6f4dd",
        },
        // "&:nth-child(2n+1)": {
        //   background: "#e4ebf8",
        // },

        "&:hover": {
          backgroundColor: "#829079",
          color: "#ede6b9",
        },
      },
    },
    MuiTableHead: {
      root: {
        position: "sticky",
        top: 0,
        // zIndex: 1,
        // paddingTop: "1rem",
        // paddingBottom: "1rem",
        // fontSize: "1.2rem",
        // backgroundColor: "#abb",
      },
    },

    MuiFormControl: {
      root: {
        color: "#044562",
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
        fontSize: "0.8rem",
      },
      marginNormal: {
        margin: "0.5rem",
        marginTop: 0,
        marginBottom: "0.3rem",
      },
    },

    MuiPickersToolbar: {
      toolbar: {
        backgroundColor: "#829079",
        color: "#ede6b9",
      },
    },

    MuiTypography: {
      alignCenter: {
        fontSize: "1.1rem",
      },
    },
    MuiPickersCalendarHeader: {
      transitionContainer: {
        height: "2.5rem",
      },
      iconButton: {
        height: "2rem",
      },
    },
    MuiToolbar: {
      regular: {
        maxHeight: "3rem",
        minHeight: "3rem",
      },
    },
    MuiPickersToolbarText: {
      toolbarTxt: {
        fontSize: "1.3rem",
        padding: "0.5rem",
      },
    },
    MuiPickersDatePickerRoot: {
      toolbar: {
        flexDirection: "row",
        alignItems: "center",
      },
    },
    MuiPickersCalendarHeader: {
      daysHeader: {
        fontSize: "1.3rem",
      },
    },
    MuiAppBar: {
      colorPrimary: {
        color: "#ff0212",
        // backGroundColor: "primary",
      },
    },
    MuiPaper: {
      root: {
        // minHeight: "100vh",
        borderTop: "0.3rem solid #829079",
        borderBottom: "0.3rem solid #b9925e",
        borderRadius: "0.5rem",
      },
    },
    MuiInputBase: {
      root: {
        // width: "50%",
      },
    },
    MuiButtonBase: {
      root: {
        // width: "5rem",
      },
    },
    MuiSvgIcon: {
      root: {
        width: "2rem",
        fontSize: "1rem",
        backgroundColor:"#ede6b9",
        borderRadius:"0.2rem",
      },
    },
    MTableToolbar: {
      actions: {
        color: "#000",
        fontSize: "2rem",
        backgroundColor: "#fff",
        borderRadius: "0.3rem",
      },
      title: {
        width: "40%",
        overflow: "none",
      },
      searchField: {
        maxWidth: "15rem",
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
    MuiTableHead: {
      root: {
        position: "sticky",
        top: 0,
        // zIndex: 1,
        paddingTop: "1rem",
        paddingBottom: "1rem",
        fontSize: "1.2rem",
        // backgroundColor: "#abb1",
      },
    },
    MuiTableToolbar: {
      root: {
        // backgroundColor: "#4a8ba8",
      },
    },
    // MTableToolbar: {
    //   actions: {
    //     color: "#000",
    //     fontSize: "2rem",
    //     backgroundColor: "#fff",
    //     borderRadius: "0.3rem",
    //   },
    //   title: {
    //     width: "40%",
    //     overflow: "none",
    //   },
    //   searchField: {
    //     // width: "50%",
    //     maxWidth: "50%",
    //   },
    // },
    MuiGrid: {
      root: {
        display: "grid",
        placeItems: "center",
        direction: "column",
        alignItems: "center",
        justifyItems: "center",
      },
    },
  },
});

export default SygefexTheme;
