import { Box, Button, Container, Paper, Typography } from "@mui/material";
import LinearProgress from "@mui/material/LinearProgress";
import React, { useEffect } from "react";
import { ThemeProvider } from "@mui/material/styles";
import { createTheme } from "../../theme";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import { useFormik } from "formik";
import * as Yup from "yup";
import {ButtonMain, CurpField, EmailField, TextFieldCellphone} from "../atoms";

export default function Form(props: any) {

  const formik = useFormik({
    initialValues: {
      mobilePhone: "",
      submit: null,
    },
    validationSchema: Yup.object({
      mobilePhone: Yup.string().required("Requerido"),

    }),
    onSubmit: async (values, helpers): Promise<void> => {
      try {
        console.log('values',values)
        helpers.setStatus({ success: true });
        helpers.setSubmitting(false);
      } catch (err: any) {
        //onErrorForm(err);
        helpers.setStatus({ success: false });
        helpers.setSubmitting(false);
      }
    },
  });
  
  return (
    <ThemeProvider
      theme={createTheme({
        responsiveFontSizes: true,
        mode: "light",
      })}
    >
      <form onSubmit={formik.handleSubmit}>
        {/* <TextFieldCellphone 
        id="mobilePhone"
        helperText={"Texto de ayuda"} 
        value={formik.values.mobilePhone} 
        handleChange={formik.handleChange} /> */}

     {/*  <CurpField 
        id="mobilePhone"
        helperText={"Texto de ayuda"} 
        value={formik.values.mobilePhone} 
        handleChange={formik.handleChange} /> */}

        <EmailField 
        id="mobilePhone"
        value={formik.values.mobilePhone} 
        handleChange={formik.handleChange} />

        {/* <ButtonMain
                type={true}
                fullWidth
                variant="contained"
                label="Enviar"
                loading={false}
                //onClick={(e) => {}}
                disabled={false}
              >
                
              </ButtonMain> */}
      </form>
    </ThemeProvider>
  );
}
