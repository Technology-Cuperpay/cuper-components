import React from "react";
import { Box, Container, Paper, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { createTheme } from "../../theme";
import { ThemeProvider } from "@mui/material/styles";
import loading from "../../../public/loading.gif";
import Countdown from "../atoms/CountDown";

export interface SplashScreenProps {
  title: string;
  subtitle: string;
}

export default function SplashScreen(props:SplashScreenProps) {
  const theme = useTheme();
  const mobileDevice = useMediaQuery(theme.breakpoints.down("sm"));
  const { title, subtitle } = props;
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
    }}>
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
          alignItems: 'center',
          backgroundColor: 'background.paper',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          zIndex: 2000
        }}
      >
        <>
          <Typography
            variant={mobileDevice? "h5" : "h3"}
            sx={{
              display: "flex",
              justifyContent:"center",
              color:"#5757CF",
              textAlign:"center"
            }}
          >
            {title}
          </Typography>
          <Typography variant={mobileDevice ? 'h6' : 'h5'}
            sx={{
             
              textAlign:"center",
              marginTop:2,
              mb:2,
             paddingX: { sx: 15  , md: 30 }
            }}
          >
            {subtitle ? subtitle : "Estamos procesando tu Información"}
          </Typography>
          <Container maxWidth="xs">
              <img src={loading} alt="" height={292} width="100%"/>
          </Container>
          
          <Countdown/>
          
        </>
      </Box>
    </Container>
  </Box>
</Paper>
</ThemeProvider>
)};
