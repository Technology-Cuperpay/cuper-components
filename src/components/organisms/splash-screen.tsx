import React, { useEffect } from "react";
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
  sx?: any;
}

export default function SplashScreen(props: SplashScreenProps) {
  const theme = useTheme();
  const mobileDevice = useMediaQuery(theme.breakpoints.down("sm"));
  const { title, subtitle, time, sx } = props;

  const handleResize = () => {
    const windowHeight = window.innerHeight;
    const paperElement = document.getElementById("your-paper-element-id");

    if (paperElement) {
      paperElement.style.height = `${windowHeight}px`;
    }
  };

  // Agregar el event listener para manejar los cambios de tamaño de la ventana
  useEffect(() => {
    handleResize(); // Llamada inicial para establecer la altura correcta
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
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
          minHeight: "100%",
          left: 0,
          zIndex: 9000,
          ...sx,
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

                ...sx,
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
                  {subtitle ? subtitle : "Estamos procesando tu Información"}
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
