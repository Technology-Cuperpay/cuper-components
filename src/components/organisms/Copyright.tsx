import React from "react";
import {
  Link,
  Typography,
} from "@mui/material";
import { createTheme } from "../../theme";
import { ThemeProvider } from "@mui/material/styles";

export default function Copyright() {

  return (
    <>
      <ThemeProvider
        theme={createTheme({
          responsiveFontSizes: true,
          mode: "light",
        })}
      >
        <Typography variant="body2" color="text.secondary" align="center">
            {'Copyright © '}
            <Link href="https://cuperpay.com/"  sx={{ color:"text.secondary", textDecorationLine: 'underline' }} target="_blank" rel="noopener">
            Cuper
            </Link>
            {' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
      </ThemeProvider>
    </>
  );
};

