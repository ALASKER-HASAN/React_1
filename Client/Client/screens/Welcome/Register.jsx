import { Formik } from "formik";
import React from "react";
import * as Yup from "yup";
import FormikInput from "../../components/form/FormikInput";

const validationSchema = Yup.object({
  name: Yup.string()
    .min(2, "Full name must be at least 2 characters")
    .required("Name is required")
    .matches(/^[a-zA-Z\s'-]+$/),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required")
    .matches(
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      "Please enter a valid email address (e.g. name@example.com)",
    ),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
      "Password must contain uppercase, lowercase, number, and a special character ",
    )
    .required("Password is required"),
});

const initialValues = {
  email: "",
  password: "",
  name: "",
};

export default function Register() {
  const handelSubmit = async (values) => {
    console.log(values);
  };

  return (
    <div className="container form">
      <h2 style={{ textAlign: "center", marginBottom: "2rem" }}>
        Let's get you started!
      </h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handelSubmit}
      >
        {({ values, isSubmitting, errors, submitForm }) => (
          <>
            <FormikInput name={"name"} placeHolder={"Name"} label={"Name"} />
            <FormikInput name={"email"} placeHolder={"Email"} label={"Email"} />
            <FormikInput
              name={"password"}
              placeHolder={"Password"}
              label={"Password"}
              type={"password"}
            />
            <button className="pri formBtn" onClick={submitForm}>
              Register
            </button>

            <hr style={{ marginTop: "1rem" }} />
            <div>
              <span>Already have an account?</span>{" "}
              <a href="/login">Login</a>
            </div>
          </>
        )}
      </Formik>
    </div>
  );
}
