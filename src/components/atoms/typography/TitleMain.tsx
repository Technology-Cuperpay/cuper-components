import React from "react";
import { CircularProgress, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Button from "@mui/material/Button";
import { Color } from "../../../types/TypeColor";
import { createTheme } from "../../../theme";
import { ThemeProvider } from "@mui/material/styles";

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

export default function TitleMain(props: ButtonProps) {
  const theme = useTheme();
  const mobileDevice = useMediaQuery(theme.breakpoints.down("sm"));
  const {
    label,
    variant,
    loading,
    disabled,
    color,
    size,
    type,
    fullWidth,
    sx,
    onClick,
  } = props;

  return (
    <ThemeProvider
      theme={createTheme({
        responsiveFontSizes: true,
        mode: "light",
      })}
    >
      <Typography
      variant={mobileDevice ? "h5" : "h4"}
      >

      </Typography>
    </ThemeProvider>
  );
}
