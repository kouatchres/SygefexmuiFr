import React from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Page from "../src/components/Page";
import theme from "./theme";
import { ApolloProvider } from "react-apollo";
import { ApolloProvider as ApolloHooksProvider } from "@apollo/react-hooks";
import withData from "../lib/withData";

const MyApp = (props) => {
  const { Component, pageProps, apollo } = props;

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <React.Fragment>
      <Head>
        <title>My page</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <ThemeProvider theme={theme}>
        <ApolloProvider client={apollo}>
          <ApolloHooksProvider client={apollo}>
            {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
            <Page>
              <CssBaseline />
              <Component {...pageProps} />
            </Page>
          </ApolloHooksProvider>
        </ApolloProvider>
      </ThemeProvider>
    </React.Fragment>
  );
};

// MyApp.propTypes = {
//   Component: PropTypes.elementType.isRequired,
//   pageProps: PropTypes.object.isRequired,
// };
export default withData(MyApp);
