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
import DocTerms from "../atoms/DocTerms";

export interface TermsModalProps {
  color?:string;
  underline?:boolean;
  variant?: boolean;
  sx?: any;
}

export default function TermsModal(props:TermsModalProps) {
  const [open, setOpen] = React.useState(false);
  const { color, underline, variant, sx } = props;

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
        
            <Typography variant={variant ? "body1" : "caption"} color="text.secondary" sx={sx}>
              <Link onClick={handleClickOpen} sx={{ color: color? color : "text.secondary", textDecorationLine: underline ? 'underline':'none' }}>
              Términos y condiciones
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
            Términos y condiciones
          </DialogTitle>
          <DialogContent dividers={true}>
            <DialogContentText id="scroll-dialog-description" tabIndex={-1}>
              <DocTerms />
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
