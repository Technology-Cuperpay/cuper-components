import React from "react";
import TextField from "@mui/material/TextField";
import { createTheme } from "../../theme";
import { ThemeProvider } from "@mui/material/styles";

export interface TextFieldProps {
  label: string;
  variant: "filled" | "outlined" | "standard";
  //errorMessage: string;
}
const TextFieldText = (props: TextFieldProps) => {
  const { label, variant } = props;
  return (
    <ThemeProvider
      theme={createTheme({
        responsiveFontSizes: true,
        mode: "light",
      })}
    >
      <TextField
        onChange={(e) => {
          const { value } = e.target;
          return e;
        }}
        //required
        //type={"text"}
        label={label}
        //fullWidth
        variant="outlined"
        //error={!!fieldState.error}
        //helperText={errorMessage}
        //inputProps={{
        //pattern: "[0-9]*",
        //maxLength: 10,
        //form: { autocomplete: "off" },
        //}}
      />
    </ThemeProvider>
  );
};
export default TextFieldText;
