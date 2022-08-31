import React from "react";
import { createTheme } from "../../theme";
import { ThemeProvider } from "@mui/material/styles";
import { TextField } from "@mui/material";
import * as yup from "yup";

export interface TextFieldProps {
  id: string;
  value: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleBlur: any;
  helperText?: string;
  touched?:boolean;
  sx?: any;
}

const EmailField = (props: TextFieldProps) => {
  const { id, value, handleChange, handleBlur, helperText, touched, sx } = props;
  const [isValid, setIsValid] = React.useState(false);
  const [error, setError] = React.useState("Este campo es obligatorio");

  const schema = yup.object().shape({
    email: yup.string().email("Por favor verifica tu correo electrónico").required("Este campo es obligatorio"),
  });

  const handleValidate = async (event: React.ChangeEvent<HTMLInputElement>) => {
    handleChange(event)
    await schema.validate({ email: event.target.value })
    .then(() => {
        setIsValid(true);
    })
    .catch((err) => {
      setIsValid(false);
      setError(err.errors[0])
      console.log('catch',err.errors[0])
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
        label="Correo Electrónico"
        value={value}
        type="email"
        onChange={handleValidate}
        onBlur={handleBlur}
        helperText={touched && !isValid ? error : helperText}
        error={touched && !isValid}
        margin="normal"
        sx={sx}
        fullWidth
        required
      />
    </ThemeProvider>
  );
};
export default EmailField;
