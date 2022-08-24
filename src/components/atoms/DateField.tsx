import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { createTheme } from "../../theme";
import { ThemeProvider } from "@mui/material/styles";
import InputMask from 'react-input-mask';

export interface TextFieldProps {
  value: string;
  helperText: string;
  onChange: () => void;
}
const TextFieldText = (props: TextFieldProps) => {
  const { value, helperText, onChange } = props;
  const [localValue, setValue] = useState(value);
    
  const onChangeInput = (e:any) => {
    setValue(e.target.value);
    onChange();
  }
    
  return (
    <ThemeProvider
      theme={createTheme({
        responsiveFontSizes: true,
        mode: "light",
      })}
    >
      <InputMask
        mask="99/99/9999"
        disabled={false}
        value={localValue}
        onChange={onChangeInput}
      >
        <TextField 
        id="selector"
        label="Fecha de nacimiento"
        type="tel"
        helperText={helperText}
        fullWidth
        required/>
      </InputMask>
    </ThemeProvider>
  );
};
export default TextFieldText;
