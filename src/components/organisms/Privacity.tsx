import React, { Fragment } from "react";
import {
  Box,
  Button,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Link,
  Typography,
} from "@mui/material";

import { createTheme } from "../../theme";
import { ThemeProvider } from "@mui/material/styles";
import LockIcon from "@mui/icons-material/Lock";
import Copyright from "./Copyright";
import DocPrivacity from "../atoms/DocPrivacity";

export default function Privacity() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

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
              <Link onClick={handleClickOpen} sx={{ color: "text.secondary" }}>
                Aviso de Privacidad.
              </Link>
            </Typography>
          </Container>
          <Copyright />
        </Box>

        <Dialog
          open={open}
          onClose={handleClose}
          scroll={"paper"}
          aria-labelledby="scroll-dialog-title"
          aria-describedby="scroll-dialog-description"
        >
          <DialogTitle id="scroll-dialog-title">
            Aviso de Privacidad
          </DialogTitle>
          <DialogContent dividers={true}>
            <DialogContentText id="scroll-dialog-description" tabIndex={-1}>
              <DocPrivacity />
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cerrar</Button>
          </DialogActions>
        </Dialog>

        <div></div>
      </ThemeProvider>
    </Fragment>
  );
}
