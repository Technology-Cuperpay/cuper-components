import React, { useEffect, useReducer } from "react";
import { Box, useMediaQuery } from "@mui/material";
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

export default function InputGoogleAddress (props: any) {
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
      } catch (err) {
        console.error(err);
        helpers.setStatus({ success: false });
        helpers.setSubmitting(false);
      }
    },
  });

  useEffect(() => {
  },[autoCompleteState])

  return (
      <Box
        component="main"
        sx={{
          flexGrow: 1,
        }}
      >
        <GoogleAddress dispatchAutoComplete={dispatchAutoComplete} />
      </Box>
  );
};
