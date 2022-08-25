import React, { useState } from "react";
import { createTheme } from "../../theme";
import { ThemeProvider } from "@mui/material/styles";
import InputMask from 'react-input-mask';
import { InputAdornment, TextField } from "@mui/material";

export interface TextFieldProps {
  helperText: string;
  value: any;
  handleChange: any;
  id: string;
}
const TextFieldCellphone = (props: TextFieldProps) => {
  const { helperText, value, handleChange, id } = props;
  const CHARACTER_LIMIT = 10;
  const [valueCellphone, setValues] = React.useState(value);
  const [contador, setContador] = React.useState(0);
  const [secondDivider, setSecondDivider] = React.useState(false);

  /* const handleChange = (event: { target: { value: string; }; }) => {
    setValues(event.target.value);
 
    const cellphone = event.target.value.replace(/[^0-9]+/g, "");
    setContador(cellphone.length)
  };  */

  return (
    <ThemeProvider
      theme={createTheme({
        responsiveFontSizes: true,
        mode: "light",
      })}
    >
      <TextField
        id={id}
        value={value}
        onChange={(e) => {
          let { value } = e.target;
          const divider = false;
          const numDividers = value.split('-').length - 1;
          setContador(value.length - numDividers)

          console.log('value',value)
          console.log('e',value.length)
          
          if(e.target.value.length === 3 && ! e.target.value.includes("-")) {
            e.target.value = e.target.value.substring(0, 2) + '-' + e.target.value.substring(2)
          } else {
            e.target.value = e.target.value;
          }

          if(e.target.value.length === 7 && !secondDivider) {
            setSecondDivider(true)
            e.target.value = e.target.value.substring(0, 7) + '-' + e.target.value.substring(7)
          } else {
            setSecondDivider(false)
            e.target.value = e.target.value;

          }

          const re = /^[0-9\b]+$/;
          if (e.target.value === '' || re.test(e.target.value)) {
            handleChange(e)
            console.log('re.test(e.target.value)',re.test(e.target.value))
          }
          //if (!value || regex.test(value.toString())) {
            //handleChange(e.target.value.replace(/[^0-9]/g, ''));
         // }                
        }}
        label='Número de teléfono celular'
        type={'tel'}
        helperText={helperText}
        fullWidth
        required
        inputProps={{
          maxLength: 10,
        }}
        InputProps={{
          endAdornment: <InputAdornment position="end">{`${contador}/${CHARACTER_LIMIT}`}</InputAdornment>,
        }}
        margin="normal"></TextField>
    </ThemeProvider>
  );
};
export default TextFieldCellphone;
