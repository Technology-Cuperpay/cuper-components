import { Box, Container, Paper, Typography } from "@mui/material";
import LinearProgress from "@mui/material/LinearProgress";
import React, { useEffect } from "react";
import { ThemeProvider } from "@mui/material/styles";
import { createTheme } from "../../theme";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import { ImportantDevices } from "@mui/icons-material";

export default function ProgressBar(props: any) {
  const { activeStep } = props;
  const [progress, setProgress] = React.useState(1);
  const [step, setStep] = React.useState(1);
  const [dot1, setDot1] = React.useState(false);
  const [dot2, setDot2] = React.useState(false);

  useEffect(() => {
    switch (activeStep) {
      case 1:
        setProgress(0);
        setStep(1);
        setDot1(false);
        setDot2(false);
        break;
      case 2:
        setProgress(16.66);
        setStep(1);
        setDot1(true);
        setDot2(false);
        break;
      case 3:
        setProgress(33.33);
        setStep(2);
        setDot1(true);
        setDot2(false);
        break;
      case 4:
        setProgress(66.66);
        setStep(3);
        setDot1(true);
        setDot2(true);
        break;
      case 5:
        setProgress(83.32);
        setDot1(true);
        setDot2(true);
        break;
    }
  }, [activeStep]);
  return (
    <ThemeProvider
      theme={createTheme({
        responsiveFontSizes: true,
        mode: "light",
      })}
    >
      <Box
        component="main"
        maxWidth="md"
        sx={{ position: "relative", px:0 }}
      >
      
        <Paper
          variant="outlined"
          sx={{
            border: "0px",
            p:0 
          }}
        >
          <Box textAlign="center" marginBottom={1}>
            <Typography variant="h6">{step} de 3</Typography>
          </Box>
          <FiberManualRecordIcon
            sx={{
              position: "absolute",
              top: 30,
              left: 0,
              fontSize: "8px",
              zIndex: 8,
            }}
            color="primary"
          />
          <FiberManualRecordIcon
            sx={{
              position: "absolute",
              top: 30,
              left: "calc(100% / 3)",
              fontSize: "8px",
              zIndex: 8,
              color: dot1 ? "#FFFFFF" : "rgba(87, 87, 207, 0.5)",
            }}
          />
          <FiberManualRecordIcon
            sx={{
              position: "absolute",
              top: 30,
              left: "calc((100% / 3) * 2)",
              fontSize: "8px",
              zIndex: 8,
              color: dot2 ? "#FFFFFF" : "rgba(87, 87, 207, 0.5)",
            }}
          />

          <LinearProgress
            variant="determinate"
            value={progress}
            sx={{ height: 5 }}
          />
        </Paper>
        </Box>
    </ThemeProvider>
  );
}
