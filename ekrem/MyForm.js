import React from "react";
import { Formik, Form, Field, ErrorMessage, FieldArray } from "formik";
import * as Yup from "yup";
import Error from "./Error";

const validate = Yup.object({
  name: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email format").required("Required"),
  company: Yup.string().max(15, "very long").required("Required"),
  bio: Yup.string().max(15, "very long").required("Required"),
});

const initialValues = {
  name: "",
  email: "",
  company: "",
  bio: "",
  social: {
    facebook: "",
    twitter: "",
  },
  phoneNumbers: ["", ""],

  //DİNAMİC ARRAY EKLEME
  phNumbers: [""],
};

const onSubmit = (values) => {
  console.log("submit data", values);
};

function MyForm() {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validate}
    >
      <Form>
        <div className="form-control">
          <label htmlFor="name">Name</label>
          <Field type="text" id="name" name="name" />
          <ErrorMessage name="name" component={Error} />
        </div>

        <div className="form-control">
          <label htmlFor="email">E-mail</label>
          <Field type="email" id="email" name="email" />
          <ErrorMessage name="email" component={Error} />
        </div>
        <div className="form-control">
          <label htmlFor="company">Company</label>
          <Field type="text" id="company" name="company" />
          <ErrorMessage name="company" component={Error} />
        </div>
        <div className="form-control">
          <label htmlFor="bio">Bio</label>
          <Field as="textarea" type="text" id="bio" name="bio" />
          <ErrorMessage name="bio" component={Error} />
        </div>
        <div className="form-control">
          <label htmlFor="facebook">facebook</label>
          <Field type="text" id="facebook" name="social.facebook" />
        </div>
        <div className="form-control">
          <label htmlFor="twitter">twitter</label>
          <Field type="text" id="twitter" name="social.twitter" />
        </div>
        <div className="form-control">
          <label htmlFor="primaryPh">primaryPh</label>
          <Field type="text" id="primaryPh" name="phoneNumbers[0]" />
        </div>
        <div className="form-control">
          <label htmlFor="secondaryPh">secondaryPh</label>
          <Field type="text" id="secondaryPh" name="phoneNumbers[1]" />
        </div>

        <div className="form-control">
          <label>List of phone numbers</label>
          <FieldArray name="phNumbers">
            {(fieldArrayProps) => {
              const { push, remove, form } = fieldArrayProps;
              const { values } = form;
              const { phNumbers } = values;
              // console.log('fieldArrayProps', fieldArrayProps)
              // console.log('Form errors', form.errors)
              return (
                <div>
                  {phNumbers.map((phNumber, index) => (
                    <div key={index}>
                      <Field name={`phNumbers[${index}]`} />

                      <button type="button" onClick={() => remove(index)}>
                        -
                      </button>
                      <button type="button" onClick={() => push("")}>
                        +
                      </button>
                    </div>
                  ))}
                </div>
              );
            }}
          </FieldArray>
        </div>

        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
}
export default MyForm;
