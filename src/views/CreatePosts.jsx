import { Button, Collapse, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import axios from "axios";
// import { useMutation } from "@tanstack/react-query";
import { FormContainer, MarginedTextField } from "../styles/styled";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const createPost = async (data) => {
  const response = await axios.post("http://127.0.0.1:5000/api/blogpost", data);
  return response;
};

const generateAiText = async (data) => {
  // console.log(JSON.stringify(data));
  // const res = await fetch("http://127.0.0.1:5000/api/aitextgenerate", {
  //   method: "POST",
  //   mode: "no-cors",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  //   body: JSON.stringify(data),
  // });
  // console.log(res);
  // return res.json();
  const res = await axios.post(
    "http://127.0.0.1:5000/api/aitextgenerate",
    data
  );
  console.log(res.data.choices[0].text);
  return res.data.choices[0].text;
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
    .max(200, "Prompt cannot exceed 200 characters"),
});

const CreatePosts = () => {
  const [content, setContent] = useState(" "); // this is for AI generator
  const [expanded, setExpanded] = useState(true);

  // const createPostMutation = useMutation(createPost, {
  //   onSuccess: (data) => {
  //     // this works
  //   },
  //   onError: () => {
  //     alert("there was an error");
  //   },
  // });

  // const generateAiTextMutation = useMutation(generateAiText, {
  //   onSuccess: (data) => {
  //     console.log(data);
  //   },
  // });

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

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
    onSubmit: async (values) => {
      if (formik.values.password === "123456") {
        // createPostMutation.mutate({ ...values });
        await createPost({ ...values }).then((res) => {});
      } else {
        alert("Wrong password");
      }
    },
  });

  const aiFormik = useFormik({
    initialValues: defaultAIValues,
    validationSchema: validationsAISchema,
    onSubmit: async (values) => {
      // if (formik.values.password === "123456") {
      //   generateAiTextMutation.mutate({ ...values });
      // } else {
      //   alert("Wrong password");
      // }
      if (formik.values.password === "123456") {
        console.log({ ...values });
        await generateAiText({ ...values }).then((res) => {
          setContent(res);
        });
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
      <Grid
        container
        alignItems="center"
        onClick={handleExpandClick}
        sx={{ mt: 3, cursor: "pointer" }}
      >
        <ExpandMoreIcon aria-expanded={expanded} aria-label="show more" />
        <Typography variant="h5" component="span">
          Expand To Use AI
        </Typography>
      </Grid>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <FormContainer>
          <form onSubmit={aiFormik.handleSubmit}>
            <Grid
              container
              alignItems="center"
              justify="center"
              direction="column"
            >
              <MarginedTextField
                id="language-input"
                name="language"
                label="Programming Language"
                value={aiFormik.values.language}
                onChange={aiFormik.handleChange}
                error={
                  aiFormik.touched.language && Boolean(aiFormik.errors.language)
                }
                helperText={
                  aiFormik.touched.language && aiFormik.errors.language
                }
                fullWidth
                sx={{ marginBottom: "32px" }}
              />
              <MarginedTextField
                id="framework-input"
                name="framework"
                label="Framework"
                value={aiFormik.values.framework}
                onChange={aiFormik.handleChange}
                error={
                  aiFormik.touched.framework &&
                  Boolean(aiFormik.errors.framework)
                }
                helperText={
                  aiFormik.touched.framework && aiFormik.errors.framework
                }
                fullWidth
                sx={{ marginBottom: "32px" }}
              />
              <MarginedTextField
                id="prompt-input"
                name="prompt"
                label="Enter your custom prompt"
                value={aiFormik.values.prompt}
                onChange={aiFormik.handleChange}
                error={
                  aiFormik.touched.prompt && Boolean(aiFormik.errors.prompt)
                }
                helperText={aiFormik.touched.prompt && aiFormik.errors.prompt}
                fullWidth
                sx={{ marginBottom: "32px" }}
              />
              <Button
                variant="contained"
                color="primary"
                type="submit"
                sx={{ mb: 2 }}
              >
                Activate Post Muse
              </Button>
              Please note that you have to enter the password at the bottom of
              the page for now.
            </Grid>
          </form>
        </FormContainer>
      </Collapse>
      <FormContainer>
        <form onSubmit={formik.handleSubmit}>
          <Grid
            container
            alignItems="center"
            justify="center"
            direction="column"
          >
            <MarginedTextField
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

            <MarginedTextField
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
              sx={{ marginBottom: "32px", height: 400, whiteSpace: "pre" }}
            />

            <Button variant="contained" color="primary" type="submit">
              Submit
            </Button>

            <MarginedTextField
              id="password-input"
              name="password"
              label="Password"
              type="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
              sx={{ mt: 2 }}
            />
          </Grid>
        </form>
      </FormContainer>
    </>
  );
};

export default CreatePosts;
