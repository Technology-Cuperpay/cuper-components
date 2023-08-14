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
  handleBlur: any;
  helperText?: string;
  touched: boolean;
  sx?: any;
  disabled?: boolean;
  variant?: "outlined" | "standard" | "filled" | undefined;
  textSize?: string;
  textColor?: string;
  placeholder?: string;
  textCenter?: boolean;
  error?: boolean;
  typeKeyboard?: "text" | "tel" | "password" | undefined;
}

export default function CurrencyField(props: CustomProps) {
  const {
    label,
    id,
    handleChange,
    helperText,
    handleBlur,
    sx,
    value,
    touched,
    disabled,
    variant,
    textSize,
    textColor,
    placeholder,
    textCenter,
    error,
    typeKeyboard,
  } = props;
  const [isValid, setIsValid] = React.useState(true);
  const [errorLocal, setError] = React.useState("");

  const schema = yup.object().shape({
    currency: yup.string().required("Este campo es obligatorio"),
  });
  const validateSchema = async (value: string) => {
    await schema
      .validate({ currency: value })
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

  const handleValidate = async (event: any) => {
    handleChange(event);
    validateSchema(event.target.value);
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
          error={(touched && !isValid) || error}
          fullWidth
          helperText={touched && !isValid ? errorLocal : helperText}
          margin="none"
          required
          variant={variant ? variant : "outlined"}
          onBlur={handleBlur}
          value={value}
          isNumericString={true}
          thousandSeparator={true}
          decimalSeparator="."
          allowNegative={false}
          decimalScale={2}
          type={typeKeyboard ? typeKeyboard : "tel"}
          onChange={handleValidate}
          InputLabelProps={{
            style: {
              fontSize: textSize ? textSize : "auto",
            },
          }}
          InputProps={{
            style: {
              color: textColor ? textColor : "auto",
              fontSize: textSize ? textSize : "auto",
              textAlign: textCenter ? "left" : "inherit",
            },

            startAdornment: (
              <span
                style={{
                  color: textColor ? textColor : "auto",
                  fontSize: textSize ? textSize : "auto",
                  textAlign: textCenter ? "right" : "inherit",
                }}
              >
                $
              </span>
            ),
          }}
          inputProps={{
            style: {
              fontSize: textSize ? textSize : "auto",
              textAlign: textCenter ? "left" : "inherit",
            },
          }}
          sx={sx}
          disabled={disabled}
          placeholder={placeholder}
          isAllowed={(values) => {
            const { floatValue, formattedValue } = values;
            if (floatValue) {
              return floatValue >= 1 && floatValue <= 250000;
            } else if (formattedValue === "") {
              return formattedValue === "";
            } else {
              return false;
            }
          }}
        />
      </Box>
    </ThemeProvider>
  );
}
