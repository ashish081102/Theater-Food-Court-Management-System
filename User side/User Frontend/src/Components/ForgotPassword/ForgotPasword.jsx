import React, { useEffect, useRef, useState } from "react";
import "../../Pages/Authenticaion/Authentication.css";
import { useFormik } from "formik";
import "./ForgotPassword.css";
import { ForgotPasswordSchema } from "./ForgotPasswordSchema";
import { IoCloudDoneSharp } from "react-icons/io5";
import { IoCloudDone } from "react-icons/io5";
import axios from "axios";
const ForgotPasword = ({ setForgotPassword }) => {
  const [emailSent, setEmailSent] = useState(false);

  const submitRef = useRef();

  const userData = {
    email: "",
  };

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: userData,
      validationSchema: ForgotPasswordSchema,
      onSubmit: async (values, action) => {
        console.log(values);

        const res = await axios.post(
          "http://localhost:8080/api/admin/forgot-password",
          values
        );

        console.log(res);

        if (res.status == 200) {
          setEmailSent(true);
          submitRef.current.innerText = `Email Sent`;
        }

        action.resetForm();
      },
    });

  useEffect(() => {
    const timeout = setTimeout(() => {
      setEmailSent(false);
      clearTimeout(timeout);
    }, 3000);
  }, [emailSent]);

  return (
    <form className="forgot_password_container" onSubmit={handleSubmit}>
      <h2>Forgot Password?</h2>
      <p>We will send you an email to reset your password.</p>
      <div className="forgot__password__input__control">
        <label htmlFor="email">
          E-MAIL <sup>*</sup>
        </label>
        <div className="forgot__password__input__control--search">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <input
              type="email"
              name="email"
              id="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Enter your email"
            />
            {errors.email && touched.email ? (
              <p className="form-error">{errors.email}</p>
            ) : null}
          </div>
        </div>

        <div className="forgot__password__input__control--button">
          <button ref={submitRef}>
            Send E-mail {emailSent && <IoCloudDone />}
          </button>
        </div>
        {emailSent && (
          <p
            style={{
              margin: "0px auto",
            }}
          >
            Email has been Sent! Please Check Your Email
          </p>
        )}
      </div>
    </form>
  );
};

export default ForgotPasword;
