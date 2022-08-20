import * as React from 'react';
import NumberFormat, { InputAttributes } from 'react-number-format';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { createTheme } from "../../theme";
import { ThemeProvider } from "@mui/material/styles";

interface CustomProps {
  onChange: (event: { target: { label: string; value: string } }) => void;
  label: string;
  
}

const NumberFormatCustom = React.forwardRef<
  NumberFormat<InputAttributes>,
  CustomProps
>(function NumberFormatCustom(props, ref) {
  const { onChange, label, ...other } = props;

  return (
    <NumberFormat
      {...other}
      getInputRef={ref}
      onValueChange={(values) => {
        onChange({
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

export default function TextFieldCurrency  (props: CustomProps) {
    const { label } = props;
    const [values, setValues] = React.useState<State>({
        numberformat: '1320',
    });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
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
        label={label}
        type={"tel"}
        required
        //value={values.numberformat}
        onChange={handleChange}
        InputProps={{
          inputComponent: NumberFormatCustom as any,
        }}
        variant="outlined"
      />
    </Box>
    </ThemeProvider>
  );
}
