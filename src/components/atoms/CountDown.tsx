import { useState, useEffect } from "react";
import { Box } from "@mui/material";
import { Typography, } from "@mui/material";
import React from "react";

export default function Countdown(props:any) {
  const { startingMinutes = 0, startingSeconds = 30 } = props;
  const [mins, setMinutes] = useState(startingMinutes);
  const [secs, setSeconds] = useState(startingSeconds);
  useEffect(() => {
    let sampleInterval = setInterval(() => {
      if (secs > 0) {
        setSeconds(secs - 1);
      }
      if (secs === 0) {
        if (mins === 0) {
          clearInterval(sampleInterval);
        } else {
          setMinutes(mins - 1);
          setSeconds(59);
        }
      }
    }, 1000);
    return () => {
      clearInterval(sampleInterval);
    };
  });

  return (
    <>
      {!(mins || secs) ? "" : (
        <Box>
          <Typography
          variant="subtitle2"
          color="#6B7280"
          > 
            Faltan {mins}m {secs < 10 ? `${secs}` : secs}s
          </Typography>
        </Box>
      )}
    </>
  );
}