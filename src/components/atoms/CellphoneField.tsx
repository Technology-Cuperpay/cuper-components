import React from "react";
import { createTheme } from "../../theme";
import { ThemeProvider } from "@mui/material/styles";
import { InputAdornment, TextField } from "@mui/material";
import * as yup from "yup";

export interface TextFieldProps {
  id: string;
  value: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleBlur: any;
  helperText?: string;
  touched:boolean;
  sx?: any;
}
const CellphoneField = (props: TextFieldProps) => {
  const { id, value, handleChange, handleBlur, helperText, touched, sx } = props;
  const CHARACTER_LIMIT = 10;
  const [contador, setContador] = React.useState(value.length);
  const [isValid, setIsValid] = React.useState(false);
  const [error, setError] = React.useState("Este campo es obligatorio");

  const schema = yup.object().shape({
    phoneNumber: yup.string().required("Este campo es obligatorio").min(12, 'Tu número de teléfono debe estar conformado por 10 dígitos.'),
  });

  const handleValidate = async (event: React.ChangeEvent<HTMLInputElement>) => {
    if(event.target.value.length === 10 && ! event.target.value.includes("-")){
      event.target.value = event.target.value.substring(0, 2) + '-' + event.target.value.substring(2, 6) + '-' + event.target.value.substring(6, 10)
    } 

    if(event.target.value.length === 3 && ! event.target.value.includes("-")) {
      event.target.value = event.target.value.substring(0, 2) + '-' + event.target.value.substring(2)
    } else {
      event.target.value = event.target.value;
    }

    if(event.target.value.length === 8 && event.target.value.split("-").length - 1 === 1) {
      event.target.value = event.target.value.substring(0, 7) + "-" + event.target.value.substring(7);
    } else {
      event.target.value = event.target.value;
    }

    const regex = /^([0-9]*)\-?([0-9]*)\-?([0-9]*)$/;
    if (event.target.value === "" || regex.test(event.target.value)) {
      setIsValid(true);  
      setContador(event.target.value.replace(/[^0-9]/g, '').length);
      handleChange(event);
    } else {
      setIsValid(false);
      setError("Tu número de teléfono debe estar conformado por 10 dígitos.")
    }  

    await schema.validate({ phoneNumber: event.target.value })
    .then(() => {
        setIsValid(true);
    })
    .catch((err) => {
      setIsValid(false);
      setError(err.errors[0])
    });
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
        label="Número de teléfono celular"
        value={value}
        type="tel"
        onChange={handleValidate}
        onBlur={handleBlur}
        helperText={touched && !isValid ? error : helperText}
        error={touched && !isValid}
        inputProps={{
          maxLength: 12,
        }}
        InputProps={{
          endAdornment: <InputAdornment position="end">{`${contador}/${CHARACTER_LIMIT}`}</InputAdornment>,
        }}
        margin="normal"
        sx={sx}
        fullWidth
        required
        />
      </ThemeProvider>
  );
};
export default CellphoneField;
