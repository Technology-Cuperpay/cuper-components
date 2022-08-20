import React, { useState } from "react";
import { createTheme } from "../../theme";
import { ThemeProvider } from "@mui/material/styles";
import { TextField } from "@mui/material";
import * as yup from "yup";

const TextFieldEmail = () => {
  const [state, setState] = useState("");
  const [isValid, setIsValid] = useState(true);

  const schema = yup.object().shape({
    email: yup.string().email(),
  });

  const handleValidate = async (event: React.ChangeEvent<HTMLInputElement>) => {
    setState(event.target.value);
    const result = await schema.validate({ email: state })
    .catch((err) => {
      setIsValid(false);
    });
    if (result) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  };

  return (
    <ThemeProvider
      theme={createTheme({
        responsiveFontSizes: true,
        mode: "light",
      })}
    >
      <TextField
        label="Correo Electrónico"
        variant="outlined"
        type={"email"}
        fullWidth
        value={state}
        onChange={handleValidate}
        helperText={!isValid && "Por favor verifica tu correo electrónico"}
        error={!isValid && !!"Por favor verifica tu correo electrónico"}
        required
      />
    </ThemeProvider>
  );
};
export default TextFieldEmail;
