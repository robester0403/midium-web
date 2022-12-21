import { Button, Collapse, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { createArticle, generateAiText } from "../../utils/axios";
import { validationsAISchema, validationsSchema } from "../../utils/schemas";
import { FormContainer, MarginedTextField } from "./CreatePostsStyle";
import Loading from "../../components/reusable-components/Loading/Loading";

const CreatePosts = () => {
  const [content, setContent] = useState("");
  const [expanded, setExpanded] = useState(true);
  // unfortunately, using Formik state leads react state to think we are not controlling the inputs

  const navigate = useNavigate();

  const createArticleMutation = useMutation(createArticle, {
    onSuccess: (_) => {
      navigate("/");
    },
    onError: () => {
      alert("there was an error");
    },
  });

  const generateAiTextMutation = useMutation(generateAiText, {
    onSuccess: (data) => {
      setContent(data);
    },
  });

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
        createArticleMutation.mutate({ ...values });
      } else {
        alert("Wrong password");
      }
    },
  });

  const aiFormik = useFormik({
    initialValues: defaultAIValues,
    validationSchema: validationsAISchema,
    onSubmit: async (values) => {
      if (formik.values.password === "123456") {
        generateAiTextMutation.mutate({ ...values });
      } else {
        alert("Wrong password");
      }
    },
  });

  useEffect(() => {
    formik.setFieldValue("content", content);
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
          {(generateAiTextMutation.isLoading ||
            createArticleMutation.isLoading) && <Loading />}
          {!generateAiTextMutation.isLoading && (
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
                sx={{
                  marginBottom: "32px",
                  height: 400,
                  whiteSpace: "pre-wrap",
                }}
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
                error={
                  formik.touched.password && Boolean(formik.errors.password)
                }
                helperText={formik.touched.password && formik.errors.password}
                sx={{ mt: 2 }}
              />
            </Grid>
          )}
        </form>
      </FormContainer>
    </>
  );
};

export default CreatePosts;
