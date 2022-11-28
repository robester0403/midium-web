import { Button, Grid, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useFormik } from "formik";
import * as yup from "yup";
import axios from "axios";
import { useMutation } from "@tanstack/react-query";

// for future versions. Refactor textfield, and label routes. Form components to take in normal or ai formik ...etc
//

// const createPosts = async () => {
//   await axios.post("http://127.0.0.1:5000/api/blogpost");
//   console.log("post created");
// };
// const createPosts = async (values) => {
//   await axios.post("http://127.0.0.1:5000/api/blogpost");
//   return
// };

const createPost = async (data) => {
  const { data: response } = await axios.post(
    "http://127.0.0.1:5000/api/blogpost",
    data
  );
  return response.data;
};

const generateAiText = async (data) => {
  const { data: response } = await axios.post(
    "http://127.0.0.1:5000/api/aitextgenerate",
    data
  );
  console.log(response);
  return response.data;
};

const validationsSchema = yup.object({
  title: yup
    .string("Enter your title (required)")
    .min(3, "Title must be at least 3 characters")
    .required("Title is required"),
  content: yup
    .string("Enter your title (required)")
    .min(3, "Content must be at least 3 characters")
    .required("Content is required"),
  password: yup.string("Enter your password").required("Password is required"),
});

const validationsAISchema = yup.object({
  language: yup
    .string("Enter your Programming Language")
    .min(3, "Language must be at least 3 characters")
    .max(20, "Language must be less than 20 characters"),
  framework: yup
    .string("Enter your Programming Language")
    .min(3, "Framework must be at least 3 characters")
    .max(20, "Framework cannot exceed 20 characters"),
  prompt: yup
    .string("Enter any additional prompts")
    .min(3, "Prompt must be at least 3 characters")
    .max(100, "Prompt cannot exceed 100 characters"),
});

const CreatePosts = () => {
  const [content, setContent] = useState(null); // this is for AI generator

  const createPostMutation = useMutation(createPost, {
    onSuccess: (data) => {},
    onError: () => {
      alert("there was an error");
    },
  });

  const generateAiTextMutation = useMutation(generateAiText, {
    onSuccess: (data) => {
      console.log(data);
    },
  });

  const defaultValues = {
    author: "Robert So",
    title: "",
    content: content || "",
  };

  const defaultAIValues = {
    language: "",
    framework: "",
    prompt: "",
  };

  const formik = useFormik({
    initialValues: defaultValues,
    validationSchema: validationsSchema,
    onSubmit: (values) => {
      if (formik.values.password === "123456") {
        createPostMutation.mutate({ ...values });
      } else {
        alert("Wrong password");
      }
    },
  });

  const aiFormik = useFormik({
    initialValues: defaultAIValues,
    validationSchema: validationsAISchema,
    onSubmit: (values) => {
      if (formik.values.password === "123456") {
        generateAiTextMutation.mutate({ ...values });
      } else {
        alert("Wrong password");
      }
    },
  });

  useEffect(() => {
    formik.setFieldValue("content", content); // for AI to connect to formik
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [content]);

  return (
    <>
      <FormContainer>
        <form onSubmit={formik.handleSubmit}>
          <Grid
            container
            alignItems="center"
            justify="center"
            direction="column"
          >
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
        </form>
      </FormContainer>
      <form onSubmit={aiFormik.handleSubmit}>
        <FormContainer>
          <TextField
            id="language-input"
            name="language"
            label="Programming Language"
            value={aiFormik.values.language}
            onChange={aiFormik.handleChange}
            error={
              aiFormik.touched.language && Boolean(aiFormik.errors.language)
            }
            helperText={aiFormik.touched.language && aiFormik.errors.language}
            fullWidth
            sx={{ marginBottom: "32px" }}
          />
          <TextField
            id="framework-input"
            name="framework"
            label="Framework"
            value={aiFormik.values.framework}
            onChange={aiFormik.handleChange}
            error={
              aiFormik.touched.framework && Boolean(aiFormik.errors.framework)
            }
            helperText={aiFormik.touched.framework && aiFormik.errors.framework}
            fullWidth
            sx={{ marginBottom: "32px" }}
          />
          <TextField
            id="prompt-input"
            name="prompt"
            label="Enter your custom prompt"
            value={aiFormik.values.prompt}
            onChange={aiFormik.handleChange}
            error={aiFormik.touched.prompt && Boolean(aiFormik.errors.prompt)}
            helperText={aiFormik.touched.prompt && aiFormik.errors.prompt}
            fullWidth
            sx={{ marginBottom: "32px" }}
          />
          <Button variant="contained" color="primary" type="submit">
            Activate Post Muse
          </Button>
        </FormContainer>
      </form>
    </>
  );
};

export default CreatePosts;

const FormContainer = styled.div`
  margin-top: 32px;
  height: 100%;
`;
