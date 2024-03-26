import React, { useRef, useState } from "react";
import "../../Pages/Authenticaion/Authentication.css";
import { useFormik } from "formik";
import "./ForgotPassword.css";
import { ForgotPasswordSchema } from "./ForgotPasswordSchema";
import { IoCloudDone } from "react-icons/io5";
const ForgotPasword = ({ setForgotPassword }) => {
  const [sentOtp, setSentOtp] = useState(false);

  const userData = {
    email: "",
    otp: null,
  };

  const emailRef = useRef();
  const sendOtpBtnRef = useRef();

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: userData,
      validationSchema: ForgotPasswordSchema,
      onSubmit: (values, action) => {
        console.log(values);

        //enabling the email and send OTP button after submiting
        emailRef.current.removeAttribute("disabled", "");
        sendOtpBtnRef.current.removeAttribute("disabled", "");

        action.resetForm();
      },
    });

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
              ref={emailRef}
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

          {((!errors.email && touched.email) || sentOtp) && (
            <button
              ref={sendOtpBtnRef}
              onClick={(e) => {
                e.currentTarget.disabled = true;

                // e.currentTarget.previousElementSibling.children[0].setAttribute(
                //   "disabled",
                //   "true"
                // );

                emailRef.current.setAttribute("disabled", "");

                setSentOtp(true);
              }}
            >
              {sentOtp ? (
                <>
                  <IoCloudDone /> <span>OTP SENT</span>
                </>
              ) : (
                "Send OTP"
              )}
            </button>
          )}
        </div>
      </div>

      {sentOtp && (
        <div className="forgot__password__input__control">
          <label htmlFor="otp">
            OTP <sup>*</sup>
          </label>
          <input
            type="otp"
            name="otp"
            id="otp"
            value={values.otp}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Enter OTP"
          />
          {errors.otp && touched.otp ? (
            <p className="form-error">{errors.otp}</p>
          ) : null}
          <div className="validate__forgot">
            {!errors.otp && touched.otp && (
              <>
                <input
                  type="button"
                  onClick={() => {
                    setForgotPassword(false);
                  }}
                  className="vf__back__btn"
                  value={"Back"}
                />
                {/* <input
                  type="button"
                  className="vf__submit__btn"
                  value={"Submit"}
                /> */}
                <button>Submit</button>
              </>
            )}
          </div>
        </div>
      )}
    </form>
  );
};

export default ForgotPasword;
