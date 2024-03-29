import React from "react";
import { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import { Variant } from "../../types/Variant";
import { createTheme } from "../../theme";
import { ThemeProvider } from "@mui/material/styles";
import { formatter } from "../../utils/currencyUtil";

export interface CurrencyProps {
  variant: Variant;
  amount: number;
  sx?: any;
}

const Currency = (props: CurrencyProps) => {
  const { variant, amount, sx } = props;
  const [value, setValue] = useState("");
  const [decimal, setDecimal] = useState("");

  useEffect(() => {
    if (amount || amount == 0) {
      const formatted = formatter.format(amount);
      const values = formatted.split(".");
      if (values.length === 2) {
        setValue(`${values[0]}.`);
        setDecimal(values[1]);
      }
    }
  }, [amount]);

  return (
    <ThemeProvider
      theme={createTheme({
        responsiveFontSizes: true,
        mode: "light",
      })}
    >
      <Typography variant={variant} display={"inherit"} sx={sx}>
        {value}
        <Box
          sx={{
            display: "inline",
            position: "relative",
            top: "-0.9em",
            fontSize: "50% !important",
            pt: 1.5,
          }}
        >
          {decimal}
        </Box>
      </Typography>
    </ThemeProvider>
  );
};

export default Currency;
