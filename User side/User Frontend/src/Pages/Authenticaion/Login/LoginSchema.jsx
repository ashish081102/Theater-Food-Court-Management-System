import * as Yup from "yup";

export const LoginSchema = Yup.object({
  //   email:Yup
  email: Yup.string().email().required("Please enter your E-mail"),
  password: Yup.string().min(5).required("Passsword is Required"),
});
 