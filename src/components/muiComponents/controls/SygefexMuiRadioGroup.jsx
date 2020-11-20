import React from "react";
import {
  FormLabel,
  Radio,
  RadioGroup as MuiRadioGroup,
  FormControl,
  FormControlLabel,
} from "@material-ui/core";

const SygefexMuiRadioGroup = (props) => {
  const { name, label, value, onChange, items } = props;

  return (
    <FormControl>
      <FormLabel>{label}</FormLabel>
      <MuiRadioGroup row name={name} value={value} onChange={onChange}>
        {items.map((item) => (
          <FormControlLabel
            value={item.id}
            control={<Radio />}
            label={item.title}
          />
        ))}
      </MuiRadioGroup>
    </FormControl>
  );
};

export default SygefexMuiRadioGroup;

// key={item.id}
