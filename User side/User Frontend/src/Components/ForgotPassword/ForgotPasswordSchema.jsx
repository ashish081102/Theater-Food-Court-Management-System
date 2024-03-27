import * as Yup from "yup";

export const ForgotPasswordSchema = Yup.object({
  email: Yup.string().email().required("Please enter your E-mail"),
  otp: Yup.string()
    .required("OTP is Required")
    .matches(/^[0-9]+$/, "Must be only digits")
    .min(5, "Must be exactly 5 digits")
    .max(5, "Must be exactly 5 digits"),
});
