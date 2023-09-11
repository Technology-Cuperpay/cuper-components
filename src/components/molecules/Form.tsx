import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import { createTheme } from "../../theme";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  ButtonMain,
  CellphoneField,
  CurpField,
  CurrencyFieldIcon,
  Currency,
  CurrencyField,
  CurrencyOther,
  DateField,
  EmailField,
} from "../atoms";
import ProgressBar from "./progressBar";
import { Navbar, SplashScreen } from "../organisms";
import PrivacityModal from "./PrivacityModal";
import TermsModal from "./TermsModal";
import { Typography } from "@mui/material";

export default function Form(props: any) {
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [curp, setCurp] = React.useState(false);
  const [valueCURP, setvalueCURP] = React.useState("");

  const formik = useFormik({
    initialValues: {
      mobilePhone: "5523325141",
      email: "",
      curp: "",
      currency: "",
      date: "",
      submit: null,
      payment: "",
    },
    validationSchema: Yup.object({
      mobilePhone: Yup.string().required("Requerido").min(10),
      /* email: Yup.string().required("Requerido"),
      curp: Yup.string().required("Requerido"),
      currency: Yup.string().required("Requerido"),
      date: Yup.string().required("Requerido").min(10), */
    }),
    onSubmit: async (values, helpers): Promise<void> => {
      try {
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

  const handle = () => {
    //setIsSubmitting(false);
  };
  return (
    <ThemeProvider
      theme={createTheme({
        responsiveFontSizes: true,
        mode: "light",
      })}
    >
      <SplashScreen
        title={""}
        subtitle={""}
        time={0}
        sx={{ backgroundColor: "#5757CF" }}
      />
      {/* <Navbar authorized={true} register={false} callBack={function (): void {
        throw new Error("Function not implemented.");
      } } logout={function (): void {
        throw new Error("Function not implemented.");
      } } handleHelp={function (): void {
        throw new Error("Function not implemented.");
      } }/> */}
      <ProgressBar activeStep={1} />
      <form onSubmit={formik.handleSubmit}>
        <CellphoneField
          id="mobilePhone"
          helperText={"Texto de ayuda"}
          value={formik.values.mobilePhone}
          handleChange={formik.handleChange}
          handleBlur={formik.handleBlur}
          touched={Boolean(formik.touched.mobilePhone)}
          sx={{ mt: 5 }}
          disabled={isSubmitting}
        />
        <CurpField
          id="curp"
          value={valueCURP}
          handleChange={() => setvalueCURP(valueCURP)}
          disabled={false}
          handleBlur={formik.handleBlur}
          touched={Boolean(formik.touched.curp)}
          error={false}
        />
        <button onClick={() => setvalueCURP("FOLA970106MDFLPN02")}>
          boton
        </button>
        {/* <EmailField
          id="email"
          value={formik.values.email}
          handleChange={formik.handleChange}
          handleBlur={formik.handleBlur}
          touched={Boolean(formik.touched.email)}
          sx={{ mb: 5 }}
          disabled={isSubmitting}
        /> */}
        <DateField
          id="date"
          value={formik.values.date}
          handleChange={formik.handleChange}
          handleBlur={formik.handleBlur}
          touched={Boolean(formik.touched.date)}
          helperText="Debes seguir el formato DD/MM/AAAA"
          disabled={isSubmitting}
        />
        {/* <CurrencyField
          id="currency"
          label="Monto total a pagar"
          value={formik.values.currency}
          handleChange={formik.handleChange}
          handleBlur={formik.handleBlur}
          touched={Boolean(formik.touched.currency)}
          helperText="CAMBIAR TEXTO"
          disabled={isSubmitting}
        /> */}
        <CurrencyField
          id="amount"
          label="Monto Total a Pagar"
          value={formik.values.currency}
          handleChange={formik.handleChange}
          handleBlur={formik.handleBlur}
          touched={Boolean(formik.touched.currency)}
          helperText=""
          textColor={"#5757CF"}
          textSize="32px"
          placeholder="0"
        />
        {/* <ButtonMain
        fullWidth={true}
          type={true}
          variant="contained"
          label="Enviar"
          loading={isSubmitting}
          onClick={handle}
          disabled={formik.values.mobilePhone === "" || formik.isSubmitting || !formik.isValid || formik.values.mobilePhone.replace(/[^0-9]/g, "").length < 10} 
          color={undefined}        
          ></ButtonMain> */}
        {/*           <Currency sx={{color:"primary.main", mt:10}} amount={300.99} variant={"body1"}/>
         */}{" "}
        <CurrencyOther
          id="payment"
          label="Otra cantidad"
          value={formik.values.payment}
          min={2000}
          max={8000}
          handleChange={(e: any) => {
            console.log("h");
          }}
          touched={Boolean(formik.touched)}
          helperText="Ingresa una cantidad mayor al total del período actual"
          disabled={false}
        />
      </form>
      <Typography variant="body2">
        hola este es un mensaje
        <TermsModal
          variant="body2"
          underline={true}
          sx={{ cursor: "pointer", fontWeight: "600", display: "inline" }}
        />
      </Typography>
      <CurrencyFieldIcon
        id="income"
        label="Costo aprox. del procedimiento"
        handleChange={(e: any) => {}}
        handleCancelClick={() => {}}
        value={"0"}
        sx={{ marginTop: 10, mb: 4 }}
        error={false}
        handleBlur={undefined}
        touched={false}
      />
    </ThemeProvider>
  );
}
