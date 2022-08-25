import React from "react";
import TextField from "@mui/material/TextField";
import { createTheme } from "../../theme";
import { ThemeProvider } from "@mui/material/styles";
import { InputAdornment } from "@mui/material";

export interface TextFieldProps {
  helperText: string;
  id: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
}
const TextFieldText = (props: TextFieldProps) => {
  const { helperText, id, handleChange, value } = props;
  const CHARACTER_LIMIT = 18;
  const [contador, setContador] = React.useState(0);


  return (
    <ThemeProvider
      theme={createTheme({
        responsiveFontSizes: true,
        mode: "light",
      })}
    >
       <TextField
        id={id}
        label='CURP'
        type="text"
        value={value}
        onChange={(e) => {
          const value = e.target.value;
          setContador(value.length);
          handleChange(e)
        }}
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
