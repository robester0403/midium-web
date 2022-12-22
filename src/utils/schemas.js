import * as yup from "yup";

export const validationsSchema = yup.object({
  title: yup
    .string("Enter your title (required)")
    .min(3, "Title must be at least 3 characters")
    .max(30, "Title cannot exceed 30 characters")
    .required("Title is required"),
  content: yup
    .string("Enter your title (required)")
    .min(3, "Content must be at least 3 characters")
    .required("Content is required"),
});

export const validationsAISchema = yup.object({
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
