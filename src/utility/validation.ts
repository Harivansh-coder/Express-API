import * as yup from "yup";

//  my solution :)

export const validationSchema = yup.object({
  body: yup.object({
    message: yup.string().required("Message is required"),
    email: yup
      .string()
      .matches(
        /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
        "Invalid email address"
      )
      .required("Email is required"),
    name: yup.string().required("Name is required"),
  }),
});

// some other solutions I tried ;)

// const contactShape = {
//   name: yup.string().required("Name is required"),
//   email: yup
//     .string()
//     .matches(
//       /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
//       "Invalid email address"
//     )
//     .required("Email is required"),
//   message: yup.string().required("Message is required"),
// };

// const contactFinalShape = Object.entries(contactShape)
//   .reverse()
//   .reduce((acc, [key, value]) => {
//     acc[key] = value;
//     return acc;
//   }, {});

// export const validationSchema = yup.object({
//   body: yup.object(contactFinalShape),
// });
