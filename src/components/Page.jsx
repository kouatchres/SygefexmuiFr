import React from "react";
import Meta from "./Meta";
import { makeStyles, MuiThemeProvider } from "@material-ui/core/styles";
import SygefexTheme from "./utils/SygefexTheme";
import LayoutDrawer from "./layout/LayoutDrawer";


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
    // gridTemplate: "auto 1fr  ",
    background: "white",
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
    <LayoutDrawer>
      <MuiThemeProvider theme={SygefexTheme}>
        <Meta />
        <div className={classes.root}>
          <div className={classes.mains}>
            <div className={classes.inner}>{props.children}</div>
          </div>
        </div>
      </MuiThemeProvider>
    </LayoutDrawer>
  );
};

export default Page;
// <div className={classes.headers}>
//   <HeaderMUI />
// </div>
