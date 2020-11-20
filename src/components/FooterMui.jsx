import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  toolbarMargin: "toolbar",
});
const HeaderMUI = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="title" color="inherit" className={classes.flex}>
            SYGEFEX-OBC
          </Typography>

          <Typography variant="title" color="inherit" className={classes.flex}>
            &#9400; Copyright
          </Typography>
          <Typography variant="title" color="inherit" className={classes.flex}>
            Contact
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};
export default HeaderMUI;
