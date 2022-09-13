import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import { createTheme } from "../../theme";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  ButtonMain,
  CellphoneField,
  CurpField,
  CurrencyField,
  DateField,
  EmailField,
} from "../atoms";
import ProgressBar from "./progressBar";
import { Navbar } from "../organisms";
import PrivacityModal from "./PrivacityModal";
import TermsModal from "./TermsModal";

export default function Form(props: any) {
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const formik = useFormik({
    initialValues: {
      mobilePhone: "",
      email: "",
      curp: "",
      currency: "",
      date: "",
      submit: null,
    },
    validationSchema: Yup.object({
     mobilePhone: Yup.string().required("Requerido"),
      email: Yup.string().required("Requerido"),
      curp: Yup.string().required("Requerido"),
      currency: Yup.string().required("Requerido"),
      date: Yup.string().required("Requerido").min(10),

    }),
    onSubmit: async (values, helpers): Promise<void> => {
      try {
        console.log("values", values);
        setIsSubmitting(true);
        helpers.setStatus({ success: true });
        helpers.setSubmitting(false);
      } catch (err: any) {
        setIsSubmitting(false);
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
      {/* <Navbar authorized={true} register={false} callBack={function (): void {
        throw new Error("Function not implemented.");
      } } logout={function (): void {
        throw new Error("Function not implemented.");
      } } handleHelp={function (): void {
        throw new Error("Function not implemented.");
      } }/> */}
      <ProgressBar activeStep={1}/>
      <form onSubmit={formik.handleSubmit}>
        <CellphoneField
        id="mobilePhone"
        helperText={"Texto de ayuda"} 
        value={formik.values.mobilePhone} 
        handleChange={formik.handleChange} 
        handleBlur={formik.handleBlur}
        touched={Boolean(formik.touched.mobilePhone)}
        sx={{mt:5}}/>

        <CurpField 
          id="curp"
          value={formik.values.curp}
          handleChange={formik.handleChange}
          disabled={false} 
          handleBlur={formik.handleBlur} 
          touched={Boolean(formik.touched.curp)}            
          />

        <EmailField
          id="email"
          value={formik.values.email}
          handleChange={formik.handleChange}
          handleBlur={formik.handleBlur}
          touched={Boolean(formik.touched.email)}
          sx={{ mb: 5 }}
        />

        <DateField
        id="date"
        value={formik.values.date} 
        handleChange={formik.handleChange} 
        handleBlur={formik.handleBlur}
        touched={Boolean(formik.touched.date)}/>

         <CurrencyField
          id="currency"
          label="Ingresos"
          value={formik.values.currency}
          handleChange={formik.handleChange}
          handleBlur={formik.handleBlur}
          touched={Boolean(formik.touched.currency)}
          helperText="CAMBIAR TEXTO"/> 

        <ButtonMain
        fullWidth={true}
          type={true}
          variant="contained"
          label="Enviar"
          loading={isSubmitting}
          //onClick={(e) => {}}
          disabled={isSubmitting} 
          color={undefined}        
          ></ButtonMain>
      </form>
    </ThemeProvider>
  );
}
