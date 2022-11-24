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
  disabled?: boolean;
}

const EmailField = (props: TextFieldProps) => {
  const { id, value, handleChange, handleBlur, helperText, touched, sx, disabled } = props;
  const [isValid, setIsValid] = React.useState(true);
  const [error, setError] = React.useState("");

  const schema = yup.object().shape({
    email: yup.string().email("Tu correo electrónico no es correcto. Ej: xxxxx@gmail.com").required("Este campo es obligatorio"),
  });

  const validateSchema = async (value:string) => {
    await schema.validate({ email: value })
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
    handleChange(event)
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
        label="Correo Electrónico"
        value={value}
        type="email"
        onChange={handleValidate}
        onBlur={handleBlur}
        helperText={touched && !isValid ? error : helperText}
        error={touched && !isValid}
        margin="normal"
        sx={sx}
        disabled={disabled}
        fullWidth
        required
      />
    </ThemeProvider>
  );
};
export default EmailField;
