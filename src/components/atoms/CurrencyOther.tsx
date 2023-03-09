import * as React from "react";
import NumberFormat from "react-number-format";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { createTheme } from "../../theme";
import { ThemeProvider } from "@mui/material/styles";
import * as yup from "yup";

interface CustomProps {
  id: string;
  label: string;
  value: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleBlur?: any;
  helperText?: string;
  touched:boolean;
  sx?: any;
  disabled?: boolean;
  min: any;
  max: any;
  err?: boolean;
}


export default function CurrencyOther(props: CustomProps) {
  const { label, id, handleChange, helperText, handleBlur, sx, value, touched, disabled, min, max, err} = props;
  const [isValid, setIsValid] = React.useState(true);
  const [error, setError] = React.useState("");
  const [maxValue, setMaxValue] = React.useState(max);
  const [minValue, setMinValue] = React.useState(min);


  const schema = yup.object().shape({
    currency: yup.string().required("Este campo es obligatorio"),
  });
  
  const validateSchema = async (value:string) => {
    await schema.validate({ currency: value })
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

  const handleValidate = async (event: any) => {
      handleChange(event);
      validateSchema(event.target.value)
  };

  return (
    <ThemeProvider
      theme={createTheme({
        responsiveFontSizes: true,
        mode: "light",
      })}
    >
      <Box>
        <NumberFormat
          id={id}
          label={label}
          customInput={TextField}
          error={(touched && !isValid) || err}
          fullWidth
          helperText={isValid || err ? helperText : error }
          margin="none"
          required
          onBlur={handleBlur}
          value={value}
          isNumericString={true}
          thousandSeparator={true}
          decimalSeparator="."
          allowNegative={false}
          decimalScale={2}
          type="tel"
          onChange={handleValidate}
          InputProps={{
            startAdornment: "$",
          }}
          sx={sx}
          disabled={disabled}
          isAllowed={(values) => {
            const {floatValue,formattedValue} = values
            if(floatValue){
            return floatValue >= minValue && floatValue <= maxValue ;
            } else if(formattedValue === ""){
              return formattedValue === ""
            } else {
            return false
            }
          }}
        />
       
      </Box>
    </ThemeProvider>
  );
}
