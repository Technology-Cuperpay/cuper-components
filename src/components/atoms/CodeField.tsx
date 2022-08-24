import React from "react";
import TextField from "@mui/material/TextField";
import { createTheme } from "../../theme";
import { ThemeProvider } from "@mui/material/styles";

export interface CodeFieldProps {
  label: string;
  variant: "filled" | "outlined" | "standard";
}
const CodeField = (props: CodeFieldProps) => {
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

        type="tel"
        label="Código"
        variant="outlined"
        fullWidth
        required
        
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
export default CodeField;
