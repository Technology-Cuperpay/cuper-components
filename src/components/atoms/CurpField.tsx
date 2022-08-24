import React from "react";
import TextField from "@mui/material/TextField";
import { createTheme } from "../../theme";
import { ThemeProvider } from "@mui/material/styles";
import { InputAdornment } from "@mui/material";

export interface TextFieldProps {
  helperText: string;
}
const TextFieldText = (props: TextFieldProps) => {
  const { helperText } = props;
  const CHARACTER_LIMIT = 18;
  const [contador, setContador] = React.useState(0);

  const handleChange = (event: any) => {
    const value = event.target.value;
    setContador(value.length);
  }; 

  return (
    <ThemeProvider
      theme={createTheme({
        responsiveFontSizes: true,
        mode: "light",
      })}
    >
       <TextField
        label='CURP'
        type="text"
        onChange={handleChange}
        helperText={helperText}
        fullWidth
        required
        inputProps={{
          maxLength: 18,
        }}
        InputProps={{
          endAdornment: <InputAdornment position="end">{`${contador}/${CHARACTER_LIMIT}`}</InputAdornment>,
        }}
        />
    </ThemeProvider>
  );
};
export default TextFieldText;
