import React from "react";
import { CircularProgress, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Button from "@mui/material/Button";
import { Color } from "../../types/TypeColor";
import { createTheme } from "../../theme";
import { ThemeProvider } from "@mui/material/styles";
import { Size } from "../../types/Size";

export interface ButtonProps {
  label: string;
  variant?: "text" | "outlined" | "contained" | undefined;
  color?: Color;
  size?: any;
  loading: boolean;
  disabled: boolean;
  onClick?: () => void;
  type: boolean;
  fullWidth: boolean;
  sx?: any;
}

export default function ButtonMain (props: ButtonProps) {
  const theme = useTheme();
  const mobileDevice = useMediaQuery(theme.breakpoints.down("sm"));
  const { label, variant, loading, disabled, color, size, type, fullWidth, sx, onClick} = props;

  return (
    <ThemeProvider
      theme={createTheme({
        responsiveFontSizes: true,
        mode: "light",
      })}
    >
      <Button
        variant={variant? variant: 'contained'}
        disabled={loading || disabled}
        fullWidth={mobileDevice || fullWidth}
        color={color? color : 'primary'}
        size={size? size : 'large'}
        onClick={onClick}
        type={type? "submit": 'button'}
        sx={sx}
      >
        {label?label:'Continuar'}
        {props.loading && (
          <CircularProgress
            size={24}
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              marginTop: "-12px",
              marginLeft: "-12px",
            }}
          />
        )}
      </Button>
    </ThemeProvider>
  );
};
