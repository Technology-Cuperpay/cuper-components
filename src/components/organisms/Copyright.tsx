import type { FC } from "react";
import PropTypes from "prop-types";
import {
  Link,
  Typography,
} from "@mui/material";
import React from "react";
import { createTheme } from "../../theme";
import { ThemeProvider } from "@mui/material/styles";

const Copyright: FC = () => {

  return (
    <>
      <ThemeProvider
        theme={createTheme({
          responsiveFontSizes: true,
          mode: "light",
        })}
      >
        <Typography variant="body1" color="text.secondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://cuperpay.com/">
                Cuper
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
      </ThemeProvider>
    </>
  );
};

Copyright.propTypes = {
  onOpenSidebar: PropTypes.func,
};

export default Copyright;
