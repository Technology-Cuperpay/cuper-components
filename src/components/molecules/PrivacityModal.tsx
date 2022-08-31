import React, { Fragment } from "react";
import {
  Button,
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
import DocPrivacity from "../atoms/DocPrivacity";


export interface PrivacityModalProps {
  color?:string;
  underline?:boolean;
}

export default function PrivacityModal(props:PrivacityModalProps) {
  const [open, setOpen] = React.useState(false);
  const { color, underline } = props;

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
        
            <Typography variant="caption" color="text.secondary">
              <Link onClick={handleClickOpen} sx={{ color: color? color : "text.secondary", textDecorationLine: underline ? 'underline':'none' }}>
                Aviso de Privacidad
              </Link>
            </Typography>

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

      </ThemeProvider>
    </Fragment>
  );
}
