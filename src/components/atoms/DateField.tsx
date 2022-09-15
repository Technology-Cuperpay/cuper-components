import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { createTheme } from "../../theme";
import { ThemeProvider } from "@mui/material/styles";
import { isValidDate } from "../../utils/dateUtils";
import * as yup from "yup";

export interface TextFieldProps {
  id: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  handleBlur: any;
  helperText?: string;
  touched:boolean;
  sx?: any;
  disabled?: boolean;
}
const TextFieldText = (props: TextFieldProps) => {
  const { id, value, handleChange, handleBlur, helperText, touched, sx, disabled } = props;
  const [error, setError] = useState("");
  const [isValid, setIsValid] = React.useState(true);

  const schema = yup.object().shape({
    date: yup.string().required("Este campo es obligatorio").min(10, 'Debes seguir el formato DD/MM/AAAA'),
  });

  const validateSchema = async (value:string) => {
    await schema.validate({ date: value })
    .then(() => {
        setIsValid(true);
    })
    .catch((err) => {
      setIsValid(false);
      setError(err.errors[0])
    });
  }

  React.useEffect( () => {
    if(touched){
      validateSchema(value)
    }
    
  },[touched])

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
      setIsValid(true); 
      handleChange(event);
    } else {
      setIsValid(false);
      setError("Debes seguir el formato DD/MM/AAAA")
    } 

    if(event.target.value.length === 10){
      if (
        isValidDate(
          parseInt(event.target.value.substring(0, 2)),
          parseInt(event.target.value.substring(3, 5)),
          parseInt(event.target.value.substring(5, 9))
        ) == false
      ) {
        setIsValid(false);
        setError("Fecha de nacimiento invalida")
        return;
      } 
    }
    validateSchema(event.target.value)
    
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
        onBlur={handleBlur}
        error={touched && !isValid}
        helperText={touched && !isValid ? error : helperText}
        inputProps={{
          maxLength: 10,
        }}
        disabled={disabled}
        placeholder="DD/MM/AAAA"
        fullWidth
        required
      />
    </ThemeProvider>
  );
};
export default TextFieldText;
