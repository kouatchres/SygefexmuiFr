import React, { Component } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Meta from "./Meta";
import "fontsource-roboto";
import {
  makeStyles,
  MuiThemeProvider,
  createMuiTheme,
} from "@material-ui/core/styles";
import { orange, green } from "@material-ui/core/colors";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    // fontSize: 100,
  },

  allControls: {
    display: "flex",
    flexDirection: "column",
  },
});

const MUITheme = createMuiTheme({
  typography: {
    h4: {
      fontSize: 25,
    },
    fontSize: 20,
  },
  palette: {
    primary: {
      main: orange[500],

      // light: "#757ce8",
      // main2: "#3f50b5",
      // main: "#0780b7",
      // dark: "#002884",
      // contrastText: "#fff",
    },
    secondary: {
      main: orange[500],
      // light: "#ff7961",
      // dark: "#f44336",
      // main: "#ba000d",
      // contrastText: "#000",
    },
  },
});

const classes = useStyles();
const GenPage = styled.div`
  /* padding-top:4rem; */
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  min-height: 100vh;
  background: ${(props) => props.theme.lightBlues[4]};
`;

const Inner = styled.div`
  position: relative;
  margin: 0 auto;
  padding: 2rem;
`;

const Containers = styled.div`
  display: grid;
  grid-template-areas: "Headers" "Mains" "Footers";
  grid-template-columns: 1fr;
  grid-template-rows: 3.5rem 1fr 3.5rem;
  height: 100vh;
  background: ${(props) => props.theme.pureWhite};
  padding: 1rem 0;
`;

const Headers = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr;
  align-items: right;
  grid-area: Headers;
  position: fixed;
  height: 3.5rem;
  z-index: 10;
  border-bottom: 0.2rem solid inset 0.1rem 0.05rem 0.5rem rgba(0, 0, 0.8, 0.5);
`;

const Footers = styled.div`
  grid-area: Footers;
  display: flex;
  justify-content: center;
  background-color: black;
  align-items: center;
  font-size: 1.9rem;
  color: white;
  padding-left: 2rem;
  padding-right: 2rem;
`;

const Mains = styled.div`
  grid-area: Mains;
  padding-left: auto;
  padding-top: 1rem;
  padding-right: auto;
`;

class Page extends Component {
  render() {
    return (
      <MuiThemeProvider theme={MUITheme}>
        <Containers>
          <Meta />
          <Headers>
            <Header />
          </Headers>
          <Mains>
            <Inner>{this.props.children}</Inner>
          </Mains>
          <Footers>
            <Footer />
          </Footers>
        </Containers>
      </MuiThemeProvider>
    );
  }
}

export default Page;
