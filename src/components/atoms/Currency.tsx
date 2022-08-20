import React from "react";
import { useEffect, useState } from "react";
import { Typography } from "@mui/material";
import { Variant } from "../../types/Variant";
import { createTheme } from "../../theme";
import { ThemeProvider } from "@mui/material/styles";

export interface CurrencyProps {
  variant: Variant;
  amount: number;
}

const Currency = (props: CurrencyProps) => {
  const { variant, amount } = props;
  const [value, setValue] = useState("");
  const [decimal, setDecimal] = useState("");
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  });

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
      <Typography variant={variant} display={"inherit"}>
        {value}
        <Typography
          variant={variant}
          sx={{
            display: "inline",
            position: "relative",
            top: "-0.5em",
            fontSize: "50% !important",
            pt: 1.5,
          }}
        >
          {decimal}
        </Typography>
      </Typography>
    </ThemeProvider>
  );
};

export default Currency;
