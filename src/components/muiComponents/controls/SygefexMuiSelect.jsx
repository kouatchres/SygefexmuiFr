import React from "react";
import { TextField } from "formik-material-ui";
import { Field } from "formik";
import { MenuItem } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(1),
  },
}));
const SygefexMuiSelect = (props) => {
  const classes = useStyles();
  const { name, label, options, variant = "outlined", helperText } = props;

  return (
    <Field
      variant={variant}
      component={TextField}
      fullWidth
      name={name}
      label={label}
      select
      className={classes.root}
      helperText={helperText}
    >
      {options &&
        options.map((item) => (
          <MenuItem value={item.value} key={item.value}>
            {item.label}
          </MenuItem>
        ))}
    </Field>
  );
};

export default SygefexMuiSelect;
