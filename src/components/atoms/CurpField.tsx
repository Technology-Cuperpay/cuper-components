import React, { useEffect } from "react";
import TextField from "@mui/material/TextField";
import { createTheme } from "../../theme";
import { ThemeProvider } from "@mui/material/styles";
import { CircularProgress, InputAdornment } from "@mui/material";
import * as yup from "yup";

export interface TextFieldProps {
  id: string;
  value: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleBlur: any;
  helperText?: string;
  touched:boolean;
  sx?: any;
  loading?: boolean;
  disabled: boolean;
  error?: boolean;
}

const TextFieldText = (props: TextFieldProps) => {
  const { id, value, handleChange, handleBlur, helperText, touched, sx, loading, disabled, error } = props;
  const CHARACTER_LIMIT = 18;
  const [contador, setContador] = React.useState(value ? value.length: 0);
  const [isValid, setIsValid] = React.useState(true);
  const [errorLocal, setError] = React.useState("");

  useEffect(() => {
    if(value){
      setContador(value.length)
    }
  },[value])
  
  const schema = yup.object().shape({
    curp: yup.string().required("Este campo es obligatorio").min(18, 'Tu CURP debe estar conformado por 18 caracteres.'),
  });
  
  const validateSchema = async (value:string) => {
    await schema.validate({ curp: value })
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
    event.target.value = event.target.value.toUpperCase();
    handleChange(event)
    setContador(event.target.value.length);

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
        label="CURP"
        value={value}
        type="text"
        onChange={handleValidate}
        onBlur={handleBlur}
        helperText={touched && !isValid ? errorLocal : helperText}
        error={(touched && !isValid) || error}
        margin="normal"
        disabled={disabled || loading}
        inputProps={{
          maxLength: 18,
        }}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              {loading && (
                <CircularProgress
                  size={24}
                  sx={{
                    position: "absolute",
                    top: "50%",
                    right: "20%",
                    marginTop: "-12px",
                    marginLeft: "-12px",
                  }}
                />
              )}
              {`${contador}/${CHARACTER_LIMIT}`}
            </InputAdornment>
          ),
        }}
        sx={sx}
        fullWidth
        required
      />
    </ThemeProvider>
  );
};
export default TextFieldText;
