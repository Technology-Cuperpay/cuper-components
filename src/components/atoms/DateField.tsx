import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { createTheme } from "../../theme";
import { ThemeProvider } from "@mui/material/styles";
import { isValidDate } from "../../utils/dateUtils";
import { allowOnlyNumber } from "../../utils/formatUtil";

export interface TextFieldProps {
  id: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
}
const TextFieldText = (props: TextFieldProps) => {
  const { value, handleChange, id } = props;
  const [error, setError] = useState(false);

  const handleValidate = async (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value.length === 3 && !event.target.value.includes("/")) {
      event.target.value =
        event.target.value.substring(0, 2) +
        "/" +
        event.target.value.substring(2);
    } else {
      event.target.value = event.target.value;
    }

    if (
      event.target.value.length === 6 &&
      event.target.value.split("/").length - 1 === 1
    ) {
      event.target.value =
        event.target.value.substring(0, 5) +
        "/" +
        event.target.value.substring(5);
    } else {
      event.target.value = event.target.value;
    }
      

    const regex = /^([0-9]*)\/?([0-9]*)\/?([0-9]*)$/;
    if (event.target.value === "" || regex.test(event.target.value)) {
      setError(false);  
      handleChange(event);
    } else {
      setError(true);
    } 

    if(event.target.value.length === 10){
      if (
        isValidDate(
          parseInt(event.target.value.substring(0, 2)),
          parseInt(event.target.value.substring(3, 5)),
          parseInt(event.target.value.substring(5, 9))
        ) == false
      ) {
        setError(true);
        return;
      } 
    }
    
  };

  return (
    <ThemeProvider
      theme={createTheme({
        responsiveFontSizes: true,
        mode: "light",
      })}
    >
      <TextField
        id={id}
        label="Fecha de nacimiento"
        type="tel"
        value={value}
        onChange={handleValidate}
        error={error && !!"La Fecha de Nacimiento es inválida."}
        helperText={error && "La Fecha de Nacimiento es inválida."}
        inputProps={{
          maxLength: 10,
        }}
        placeholder="DD/MM/AAAA"
        fullWidth
        required
      />
    </ThemeProvider>
  );
};
export default TextFieldText;
