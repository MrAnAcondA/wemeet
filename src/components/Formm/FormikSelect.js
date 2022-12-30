import React from "react";
import { Form } from "react-bootstrap";
import { Field } from "formik";
import FormikErrorMessage from "./FormikErrorMessage";

/**
 * FormikField Component
 */
const FormikField = ({ name, label }) => {
  return (
    <Field as="select" name={name}>
      {(formikField) => {
        return (
          <>
            <Form.Label className="font-size-13">{label}</Form.Label>
            <Form.Select className="font-size-13" {...formikField.field}>
              <option disabled selected>
                -- Select --
              </option>
              <option value="danger">Danger</option>
              <option value="success">Success</option>
              <option value="primary">Primary</option>
              <option value="info">Info</option>
              <option value="dark">Dark</option>
              <option value="warning">Warning</option>
            </Form.Select>

            <FormikErrorMessage name={name} />
          </>
        );
      }}
    </Field>
  );
};

export default FormikField;
