import { ErrorMessage, Field } from "formik";
import React from "react";

export default function FormikInput({ label, name, placeHolder, type }) {
  return (
    <div className="inputField">
      {label && <label htmlFor={name}>{label}</label>}

      <Field
        id={name}
        name={name}
        placeholder={placeHolder}
        type={type}
        className="input"
      />

      <ErrorMessage className="error" name={name} component={"p"} />
    </div>
  );
}
