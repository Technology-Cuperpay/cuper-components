import React from "react";
import {
  Box,
  Container,
  Paper,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { createTheme } from "../../theme";
import { ThemeProvider } from "@mui/material/styles";
import loading from "../../../public/loading.gif";
import logoCuper from "../../../public/logoCuper.gif";
import Countdown from "../atoms/CountDown";

export interface SplashScreenProps {
  title: string;
  subtitle: string;
  time: number;
}

export default function SplashScreen(props: SplashScreenProps) {
  const theme = useTheme();
  const mobileDevice = useMediaQuery(theme.breakpoints.down("sm"));
  const { title, subtitle, time } = props;
  return (
    <ThemeProvider
      theme={createTheme({
        responsiveFontSizes: true,
        mode: "light",
      })}
    >
      <Paper
        variant="outlined"
        sx={{
          border: "0px",
        }}
      >
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            pt: 8,
          }}
        >
          <Container maxWidth="md">
            <Box
              sx={{
                alignItems: "center",
                backgroundColor: "background.paper",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                zIndex: 2000,
              }}
            >
              <>
                <Typography
                  variant={mobileDevice ? "h5" : "h3"}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    color: "#5757CF",
                    textAlign: "center",
                  }}
                >
                  {title}
                </Typography>
                <Typography
                  variant={mobileDevice ? "h6" : "h5"}
                  sx={{
                    textAlign: "center",
                    marginTop: 2,
                    mb: mobileDevice ? 5 : 9.5,
                    paddingX: { sx: 15, md: 30 },
                  }}
                >
                  {subtitle ? subtitle : "Estamos procesando tu Informaci??n"}
                </Typography>
                <Container
                  maxWidth="xs"
                  sx={{ display: "flex", justifyContent: "center" }}
                >
                  <img
                    src={logoCuper}
                    alt=""
                    height={mobileDevice ? 120 : 220}
                    width={mobileDevice ? 120 : 220}
                  />
                </Container>
                {time && <Countdown startingSeconds={time} />}
              </>
            </Box>
          </Container>
        </Box>
      </Paper>
    </ThemeProvider>
  );
}
