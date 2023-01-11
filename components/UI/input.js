import * as React from "react";
import { Typography, useTheme, TextField } from "@mui/material";

const CustomInput = (props) => {
  const theme = useTheme();
  const {
    id,
    customName,
    label,
    type,
    value,
    onChange,
    error,
    helperText,
    multiline,
    rows,
    extraStyles,
  } = props;

  return (
    <TextField
      id={id}
      name={customName}
      label={label}
      type={type}
      value={value}
      onChange={onChange}
      error={error}
      helperText={helperText}
      fullWidth
      multiline={multiline}
      rows={rows}
      sx={{
        fontSize: "1.1rem !important",
      }}
    />
  );
};

export default CustomInput;
