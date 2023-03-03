import * as yup from "yup";

export const validationSchema = yup.object({
  body: yup.object({
    name: yup.string().required("Name is required"),
    email: yup
      .string()
      .matches(
        /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
        "Invalid email address"
      )
      .required("Email is required"),
    message: yup.string().required("Message is required"),
  }),
});
