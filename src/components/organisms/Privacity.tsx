import type { FC } from "react";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Typography,
} from "@mui/material";
import React from "react";
import { createTheme } from "../../theme";
import { ThemeProvider } from "@mui/material/styles";
import LockIcon from "@mui/icons-material/Lock";

const Privacity: FC = () => {
  const [openDialogPrivacity, setOpenDialogPrivacity] = React.useState(false);

  const handleClickOpenPrivacity = () => () => {
    setOpenDialogPrivacity(true);
  };

  const handleClosePrivacity = () => {
    setOpenDialogPrivacity(false);
  };
  return (
    <>
      <ThemeProvider
        theme={createTheme({
          responsiveFontSizes: true,
          mode: "light",
        })}
      >
        <Box
          alignItems="center"
          sx={{ display: "flex", flexDirection: "column"}}
          component="main"
            
        >
          <LockIcon color="action" />
          <Typography variant="caption" color="text.secondary" align="center">
            Toda la información proporcionada será utilizada con fines de
            consulta y no se compartirá. Consulta nuestro
            <Button  onClick={handleClickOpenPrivacity}>
              &nbsp; Aviso de Privacidad.
            </Button>
          </Typography>
        

        <Dialog
          open={openDialogPrivacity}
          onClose={handleClosePrivacity}
          scroll={"paper"}
          aria-labelledby="scroll-dialog-title"
          aria-describedby="scroll-dialog-description"
        >
          <DialogTitle id="scroll-dialog-title">
            Aviso de Privacidad
          </DialogTitle>
          <DialogContent dividers={true}>
            <DialogContentText id="scroll-dialog-description" tabIndex={-1}>
              <Privacity />
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClosePrivacity}>Cerrar</Button>
          </DialogActions>
        </Dialog>
        </Box>
      </ThemeProvider>
    </>
  );
};

export default Privacity;
