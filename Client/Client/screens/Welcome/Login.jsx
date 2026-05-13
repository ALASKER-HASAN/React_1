import React, { useState } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import FormikInput from "../../components/form/FormikInput";

const validationSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required")
    .matches(
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      "Please enter a valid email address (e.g. name@example.com)",
    ),
  password: Yup.string()
    .min(8, "Incorrect email or password")
    .required("Password is required")
    .trim(),
});

const initialValues = {
  email: "",
  password: "",
};

export default function Login() {
  const handelSubmit = async (values) => {
    console.log(values);
  };
  const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);

  return (
    <div className="container form">
      <h2 style={{ textAlign: "center", marginBottom:'2rem' }}>Welcome Back!</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handelSubmit}
      >
        {({ values, isSubmitting, errors, submitForm }) => (
          <>
            <FormikInput name={"email"} placeHolder={"Email"} label={"Email"} />
            <FormikInput
              name={"password"}
              placeHolder={"Password"}
              label={"Password"}
              type={"password"}
            />
            <button className="pri formBtn" onClick={submitForm}>
              Login
            </button>
          </>
        )}
      </Formik>
    </div>
  );
}
