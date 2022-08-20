import React from "react";
import { CircularProgress, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Button from "@mui/material/Button";
import { Color } from "../../types/TypeColor";
import { createTheme } from "../../theme";
import { ThemeProvider } from "@mui/material/styles";

export interface ButtonProps {
  label: string;
  variant: "text" | "outlined" | "contained" | undefined;
  color: Color;
  loading: boolean;
  disabled: boolean;
  onClick: () => void;
}

const ButtonMain = (props: ButtonProps) => {
  const theme = useTheme();
  const mobileDevice = useMediaQuery(theme.breakpoints.down("sm"));
  const { label, variant, loading, disabled, color, onClick} = props;

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
        fullWidth={mobileDevice}
        color={color? color : 'primary'}
        onClick={onClick}
      >
        {label}
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

export default ButtonMain;
