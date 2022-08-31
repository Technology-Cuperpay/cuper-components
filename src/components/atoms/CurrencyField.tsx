import * as React from 'react';
import NumberFormat, { InputAttributes } from 'react-number-format';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { createTheme } from "../../theme";
import { ThemeProvider } from "@mui/material/styles";

interface CustomProps {
  label: string;
  value: string
  id: string;
  handleChange: any;
  helperText: string;
}

const NumberFormatCustom = React.forwardRef<
  NumberFormat<InputAttributes>,
  CustomProps
>(function NumberFormatCustom(props, ref) {
  const { handleChange, label, ...other } = props;

  return (
    <NumberFormat
      {...other}
      getInputRef={ref}
      decimalScale={2}
      onValueChange={(values) => {
        handleChange({
          target: {
            label: label,
            value: values.value,
          },
        });
      }}
      thousandSeparator
      isNumericString
      prefix="$"
    />
  );
});

interface State {
  numberformat: string;
}

export default function CurrencyField  (props: CustomProps) {
    const { label,id, handleChange,helperText } = props;
    const [values, setValues] = React.useState<State>({
        numberformat: '',
    });

  const handleValidate = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues({
      ...values,
      [event.target.name]: parseInt(event.target.value).toFixed(2),
    });
    handleChange(event.target.value)
  };

  return (
    <ThemeProvider
    theme={createTheme({
      responsiveFontSizes: true,
      mode: "light",
    })}
  >
    <Box>
      <TextField
      id={id}
        label={label}
        type={"tel"}
        required
        value={values}
        onChange={handleValidate}
        helperText={helperText}
        InputProps={{
          inputComponent: NumberFormatCustom as any,
        }}
        variant="outlined"
      />
    </Box>
    </ThemeProvider>
  );
}