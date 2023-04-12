import React from "react";
import { createTheme } from "../../theme";
import { ThemeProvider } from "@mui/material/styles";
import { InputAdornment, TextField, Typography, textFieldClasses } from "@mui/material";
import * as yup from "yup";
import { Margin, Padding } from "@mui/icons-material";

export interface TextFieldProps {
  id: string;
  value: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleBlur: any;
  helperText?: string;
  touched: boolean;
  sx?: any;
  disabled?: boolean;
}
const CellphoneField = (props: TextFieldProps) => {
  const {
    id,
    value,
    handleChange,
    handleBlur,
    helperText,
    touched,
    sx,
    disabled,
  } = props;
  const CHARACTER_LIMIT = 10;
  const [localValue, setLocalValue] = React.useState(value);
  const [contador, setContador] = React.useState(
    localValue.replace(/[^0-9]/g, "").length
  );
  const [isValid, setIsValid] = React.useState(true);
  const [error, setError] = React.useState("");

  const schema = yup.object().shape({
    phoneNumber: yup
      .string()
      .required("Este campo es obligatorio")
      .min(12, "Número de teléfono inválido"),
  });


  const formatNumber = (value:string) => {
    const pattern = /-/g;
    const result = value.match(pattern);

    if (value.length === 11 && result?.length === 1) {
      value = value.replace("-", "");
      value =
        value.substring(0, 2) +
        "-" +
        value.substring(2, 6) +
        "-" +
        value.substring(6, 10);
    }

    if (value.length === 10 && !value.includes("-")) {
      value =
        value.substring(0, 2) +
        "-" +
        value.substring(2, 6) +
        "-" +
        value.substring(6, 10);
    }

    if (value.length === 3 && !value.includes("-")) {
      value =
        value.substring(0, 2) +
        "-" +
        value.substring(2);
    } else {
      value = value;
    }

    if (
      value.length === 8 &&
      value.split("-").length - 1 === 1
    ) {
      value =
        value.substring(0, 7) +
        "-" +
        value.substring(7);
    } else {
      value = value;
    }
    return value;
  }

  const validateSchema = async (value: string) => {
    value = formatNumber(value);
    await schema
      .validate({ phoneNumber: value })
      .then(() => {
          setIsValid(true);
      })
      .catch((err) => {
        setIsValid(false);
        setError(err.errors[0]);
      });
  };

  React.useEffect(() => {
    if (touched) {
      validateSchema(value);
    }
  }, [touched]);
  

  const handleValidate = async (event: React.ChangeEvent<HTMLInputElement>) => {
   
    event.target.value = formatNumber( event.target.value);
   
    const regex = /^([0-9]*)\-?([0-9]*)\-?([0-9]*)$/;
    if (event.target.value === "" || regex.test(event.target.value)) {
      setContador(event.target.value.replace(/[^0-9]/g, "").length);
      setIsValid(true);
      setLocalValue(event.target.value);
      handleChange(event);
    } else {
      setIsValid(false);
      setError("Número de teléfono inválido");
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
        label="Número de teléfono celular"
        value={value.length === 10 && !value.includes('-') ? 
        value.substring(0, 2) +
        "-" + value.substring(2, 6) +
        "-" + value.substring(6, 10) : 
        value}
        type="tel"
        onChange={handleValidate}
        onBlur={handleBlur}
        helperText={touched && !isValid ? error : helperText}
        error={touched && !isValid}
        inputProps={{
          maxLength: 12,
        }}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <Typography sx={{ fontSize: "1rem", "@media (max-width: 350px)": {fontSize: "0.7rem"}}}>
              {`${contador}/${CHARACTER_LIMIT}`}
              </Typography>
              </InputAdornment>
          ),
          
        }}
        margin="normal"
        sx={sx}
        disabled={disabled}
        fullWidth
        required
        InputLabelProps={{
          sx: {
            fontSize: "1rem", // Tamaño de fuente para pantallas grandes
            "@media (max-width: 350px)": {
              fontSize: "0.66rem", // Tamaño de fuente para pantallas pequeñas
              
              paddingTop: "5px",
              
            },
            display: "flex",
            alignItems: "center"
          }
        }}
      />
    </ThemeProvider>
  );
};
export default CellphoneField;
