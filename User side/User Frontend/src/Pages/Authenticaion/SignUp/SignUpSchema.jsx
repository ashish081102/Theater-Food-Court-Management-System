import * as Yup from "yup";

export const SignUpSchema = Yup.object({
  email: Yup.string().email().required("Please enter your E-mail"),
  password: Yup.string().min(5).required("Passsword is Required"),
  username: Yup.string().min(4).required("Username is required."),
  phone_number: Yup.number()
    .typeError("That doesn't look like a phone number")
    .positive("Phone number can't start with a minus")
    .integer("Phone number can't include a decimal point")
    .min(8)
    .required("A phone number is required"),
});
