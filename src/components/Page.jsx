import React from "react";
import HeaderMUI from "./HeaderMUI";
import Meta from "./Meta";
import { makeStyles, MuiThemeProvider } from "@material-ui/core/styles";
import { orange, green, blue } from "@material-ui/core/colors";
import SygefexTheme from "./utils/SygefexTheme";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
  },

  allControls: {
    display: "flex",
    flexDirection: "column",
  },
  wholeApp: {
    display: "grid",
    gridTemplate: "auto 1fr auto",
    background: "white",
  },
  headers: {
    display: "grid",
    gridTemplateColumns: "1fr 4fr",
    alignItems: "right",
    gridArea: "Headers",
    position: "fixed",
    height: "1rem",
    zIndex: "10",
    borderBottom: "0.2rem solid  0.1rem 0.05rem 0.5rem rgba(0, 0, 0.8, 0.5)",
  },
  mains: {
    gridArea: "mains",
    paddingLeft: "auto",
    display: "grid",
    gridTemplateRows: "auto 1fr",
    paddingTop: "1rem",
    paddingRight: "auto",
  },
  footers: {
    gridArea: "Footers",
    display: "grid",
    gridTemplateColumns: "1fr 4fr",
    alignItems: "right",
    gridArea: "Headers",
    position: "fixed",
    height: "1rem",
    zIndex: "10",
    borderBottom: "0.2rem solid  0.1rem 0.05rem 0.5rem rgba(0, 0, 0.8, 0.5)",
  },
  inner: {
    // placeItems: "center",
    padding: "2rem",
  },
});

const Page = (props) => {
  const classes = useStyles();
  return (
    <MuiThemeProvider theme={SygefexTheme}>
      <Meta />
      <div className={classes.root}>
        <div className={classes.headers}>
          <HeaderMUI />
        </div>
        <div className={classes.mains}>
          <div className={classes.inner}>{props.children}</div>
        </div>
      </div>
    </MuiThemeProvider>
  );
};

export default Page;

// const MuiTheme = createMuiTheme({
//   typography: {
//     h4: {
//       fontSize: 15,
//     },
//     fontSize: 12,
//   },
//   palette: {
//     primary: {
//       main: blue[700],
//     },
//     secondary: {
//       main: orange[200],
//     },
//     fontFamily: ["Roboto", "sans-serif"].join(","),
//   },
// });
