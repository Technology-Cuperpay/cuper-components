//import {Controller, SubmitHandler, useForm} from "react-hook-form";
import React, { useEffect, useReducer } from "react";
import { Divider, Box, Container, useMediaQuery } from "@mui/material";
import Grid from "@mui/material/Grid";
import { useTheme } from "@mui/material/styles";
import GoogleAddress from "../../modules/GoogleAddress";
import { Customer } from "../../types/Customer";
import { useFormik } from "formik";
import * as Yup from "yup";

// An interface for our actions
export interface AutoCompleteAction {
  type: string;
  payload: Customer;
}

function autoCompleteReducer(state: Customer, action: AutoCompleteAction) {
  const { type, payload } = action;

  switch (action.type) {
    case "loaded": {
      return {
        ...state,
        addressLine1: action.payload.addressLine1,
        addressLine2: action.payload.addressLine2,
        addressLine3: action.payload.addressLine3,
        addressState: action.payload.addressState,
        addressZip: action.payload.addressZip,
        addressCity: action.payload.addressCity,
      };
    }
    default:
      return state;
  }
}

const initialState = {
  addressLine1: '',
  addressLine2: '',
  addressLine3: '',
  addressState: '',
  addressZip: '',
  addressCity: ''
} as Customer;

const InputGoogleAddress = (props: any) => {
  const theme = useTheme();
  const mobileDevice = useMediaQuery(theme.breakpoints.down("sm"));
  const [autoCompleteState, dispatchAutoComplete] = useReducer(autoCompleteReducer, initialState);

  const formik = useFormik({
    initialValues: {
      addressLine1: "",
      addressLine2: "",
      addressLine3: "",
      addressState: "",
      addressZip: "",
      addressCity: "",
      submit: null,
    },
    validationSchema: Yup.object({
      addressLine1: Yup.string().max(255).required("La calle es requerida"),
      addressLine2: Yup.string().max(255).required("La calle es requerida"),
      addressLine3: Yup.string().max(255).required("La calle es requerida"),
      addressState: Yup.string().max(255).required("La calle es requerida"),
      addressZip: Yup.string().max(6).required("El codigo postal es requerido"),
      addressCity: Yup.string().max(255).required("La calle es requerida"),
    }),
    onSubmit: async (values, helpers): Promise<void> => {
      try {
        console.log("values ----->", values);
      } catch (err) {
        console.error(err);
        helpers.setStatus({ success: false });
        helpers.setSubmitting(false);
      }
    },
  });

  return (
    <>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: mobileDevice ? 1 : 3,
        }}
      >
        <Container maxWidth="md">
          <form onSubmit={formik.handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={12} sx={{ mb: 4 }}>
                <GoogleAddress dispatchAutoComplete={dispatchAutoComplete} 
                onChange={formik.handleChange}/>
              </Grid>
            </Grid>
          </form>
        </Container>
      </Box>
    </>
  );
};

export default InputGoogleAddress;
