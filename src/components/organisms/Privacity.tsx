import React, { Fragment } from "react";
import {
  Box,
  Container,
  Typography,
} from "@mui/material";

import { createTheme } from "../../theme";
import { ThemeProvider } from "@mui/material/styles";
import LockIcon from "@mui/icons-material/Lock";
import Copyright from "./Copyright";
import { PrivacityModal } from "../molecules";

export default function Privacity() {

  return (
    <Fragment>
      <ThemeProvider
        theme={createTheme({
          responsiveFontSizes: true,
          mode: "light",
        })}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <LockIcon color="action" />
          <Container
            sx={{ maxWidth: "56ch", textAlign: "center", mt: 1, mb: 2 }}
          >
            <Typography variant="caption" color="text.secondary" align="center">
              Toda la información proporcionada será utilizada con fines de
              consulta y no se compartirá con nadie. Consulta nuestro &nbsp;
              <PrivacityModal underline/>
            </Typography>
          </Container>
          <Copyright />
        </Box>

      </ThemeProvider>
    </Fragment>
  );
}
