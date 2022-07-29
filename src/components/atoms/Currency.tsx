import React from 'react';
import { FC, useEffect, useState } from "react";
import { Typography } from "@mui/material";

interface CurrencyProps {
  variant:
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "subtitle1"
  | "subtitle2"
  | "body1"
  | "body2"
  | "caption"
  | "button"
  | "overline"
  | "inherit";
amount: number;
}

export const Currency: FC<CurrencyProps> = (props) => {
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
      console.log(formatted)
      const values = formatted.split(".");
      if (values.length === 2) {
        setValue(`${values[0]}.`);
        setDecimal(values[1]);
      }
    }
  }, [amount]);

  return (
    <Typography variant={variant} display={"inherit"}>
    {value}
    <Typography
      variant={variant}
      sx={{
        display: "inline",
        position: "relative",
        top: "-0.5em",
        fontSize: "50% !important",
        pt:1.5
      }}
    >
      {decimal}
    </Typography>
  </Typography>
  );
};