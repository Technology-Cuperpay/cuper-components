import React, { useState } from "react";
import { createTheme } from "../../theme";
import { ThemeProvider } from "@mui/material/styles";
import InputMask from 'react-input-mask';
import { InputAdornment, TextField } from "@mui/material";

export interface TextFieldProps {
  label: string;
  variant: "filled" | "outlined" | "standard";
  helperText: string;
  value: string;
  handleChange: () => {};
}
const TextFieldCellphone = (props: TextFieldProps) => {
  const { helperText, value } = props;
  const CHARACTER_LIMIT = 10;
  const [valueCellphone, setValues] = React.useState(value);
  const [contador, setContador] = React.useState(0);

  const handleChange = (event: { target: { value: string; }; }) => {
    setValues(event.target.value);
 
    const cellphone = event.target.value.replace(/[^0-9]+/g, "");
    setContador(cellphone.length)
  }; 

  return (
    <ThemeProvider
      theme={createTheme({
        responsiveFontSizes: true,
        mode: "light",
      })}
    >
      <InputMask
        mask="99-9999-9999"
        disabled={false}
        value={valueCellphone}
        onChange={handleChange}
      >
        <TextField 
        id="selector"
        label='Número de teléfono celular'
        type={'tel'}
        helperText={helperText}
        fullWidth
        required
        InputProps={{
          endAdornment: <InputAdornment position="end">{`${contador}/${CHARACTER_LIMIT}`}</InputAdornment>,
        }}
        margin="normal"/>
      </InputMask>
    </ThemeProvider>
  );
};
export default TextFieldCellphone;
