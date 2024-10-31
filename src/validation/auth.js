import * as Yup from "yup";


export const SignupSchema = Yup.object().shape({
    firstName: Yup.string()
      .min(2, "First Name length should be atleast 2 characters!")
      .max(50, "First Name length should not be more than 50 characters!")
      .required("First Name is Required"),
    lastName: Yup.string()
      .min(2, "Last Name length should be atleast 2 characters!")
      .max(50, "Last Name length should not be more than 50 characters!")
      .required("Last Name is Required"),
    email: Yup.string()
      .email("Please enter a valid email")
      .required("Email is Required"),
    password: Yup.string()
      .min(5, "Password should be at least 5 characters")
      .required("Password is Required"),
  });

  export const LoginSchema = Yup.object().shape({
    email: Yup.string()
      .email("Please enter a valid email")
      .required("Email is Required"),
    password: Yup.string()
      .required("Password is Required"),
  });