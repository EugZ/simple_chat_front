import React from "react";
import { useFormik } from "formik";

import { validate } from "./validation.js";
import { Form, Field, Button } from "./styles.js";

const Login = props => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate,
    onSubmit: props.handleSubmit,
  });
  return (
    <React.Fragment>
      <Form onSubmit={formik.handleSubmit}>
        <Field
          type="email"
          name="email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        {formik.errors.email ? <div>{formik.errors.email}</div> : null}
        <Field
          type="password"
          name="password"
          onChange={formik.handleChange}
          value={formik.values.password}
        />
        {formik.errors.password ? <div>{formik.errors.password}</div> : null}
        <Button type="submit">Submit</Button>
      </Form>
    </React.Fragment>
  );
};

export default Login;
