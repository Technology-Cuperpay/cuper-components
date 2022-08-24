import React, { useState } from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { FormControl } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  errorRequiredMessage,
  errorValidationMessage,
} from "../../types/errors/MessagesError";
import { createTheme } from "../../theme";
import { ThemeProvider } from "@mui/material/styles";

export interface PasswordProps {
  security: string;
}
const Password = (props: PasswordProps) => {
  const { security } = props;
  const [passwordValue, setValuePass] = useState<string>("");
  const [showPassword, setShowPass] = useState<boolean>(false);

  const formik = useFormik({
    initialValues: {
      password: "",
    },
    validationSchema: Yup.object({
      password: Yup.string()
        .max(20)
        .required(errorRequiredMessage)
        .matches(/^[A-zÀ-ú ]{2,100}$/, errorValidationMessage),
    }),
    onSubmit: async (values, helpers): Promise<void> => {},
  });

  const handleClickShowPassword = () => {
    setShowPass(!showPassword);
  };

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const handleChange = (event: any) => {
    setValuePass(event.target.value);
  };

  return (
    <ThemeProvider
      theme={createTheme({
        responsiveFontSizes: true,
        mode: "light",
      })}
    >
      <FormControl required fullWidth variant="outlined">
        <InputLabel htmlFor="password">Contraseña</InputLabel>
        <OutlinedInput
          id="password"
          name="password"
          autoComplete="password"
          type={showPassword ? "text" : "password"}
          value={passwordValue}
          onChange={(e) => {
            const { value } = e.target;
            const regex = { security };
            formik.handleChange(e);
          }}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
          label="Contraseña"
        />
      </FormControl>
    </ThemeProvider>
  );
};
export default Password;
