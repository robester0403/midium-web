import { alertTitleClasses, Button, Grid, TextField } from "@mui/material";
import React, { useState } from "react";
import styled from "styled-components";
import { useFormik } from "formik";
import * as yup from "yup";

const defaultValues = {
  author: "Robert So",
  title: "",
  content: "",
};

const validationsSchema = yup.object({
  title: yup
    .string("Title required")
    .min(3, "Title must be at least 3 characters")
    .required("Title is required"),
  content: yup
    .string("Content required")
    .min(3, "Content must be at least 3 characters")
    .required("Content is required"),
  password: yup.string("Enter your password").required("Password is required"),
});

const CreatePosts = () => {
  const formik = useFormik({
    initialValues: defaultValues,
    validationSchema: validationsSchema,
    onSubmit: (values) => {
      if (formik.values.password === "123456") {
        alert(JSON.stringify(values, null, 2));
      }
      alert("Wrong password");
    },
  });

  // const [formValues, setFormValues] = useState({
  //   ...defaultValues,
  //   author: "Robert So",
  // });
  // const handleInputChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormValues({
  //     ...formValues,
  //     [name]: value,
  //   });
  // };

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   console.log(formValues);
  // };
  return (
    <form onSubmit={formik.handleSubmit}>
      <FormContainer>
        <Grid container alignItems="center" justify="center" direction="column">
          <TextField
            id="title-input"
            name="title"
            label="Title"
            value={formik.values.title}
            onChange={formik.handleChange}
            error={formik.touched.title && Boolean(formik.errors.title)}
            helperText={formik.touched.title && formik.errors.title}
            fullWidth
            sx={{ marginBottom: "32px" }}
          />

          <TextField
            id="content-input"
            name="content"
            label="Content"
            value={formik.values.content}
            onChange={formik.handleChange}
            error={formik.touched.content && Boolean(formik.errors.content)}
            helperText={formik.touched.content && formik.errors.content}
            fullWidth
            multiline
            rows={16}
            sx={{ marginBottom: "32px", height: 400 }}
          />

          <TextField
            id="password-input"
            name="password"
            label="Password"
            type="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
            sx={{ marginBottom: "32px" }}
          />

          <Button variant="contained" color="primary" type="submit">
            Submit
          </Button>
        </Grid>
      </FormContainer>
    </form>
  );
};

export default CreatePosts;

const FormContainer = styled.div`
  margin-top: 32px;
  height: 100%;
`;
