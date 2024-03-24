import React from "react";
import Banner from "../../../Components/Banner/Banner";
import { useFormik } from "formik";
import "../Authentication.css";
import { SignUpSchema } from "./SignUpSchema";
const Signup = () => {
  const newUserData = {
    username: "",
    phone_number: "",
    email: "",
    password: "",
  };

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: newUserData,
      validationSchema: SignUpSchema,
      onSubmit: (values, action) => {
        console.log(values);
        action.resetForm();
      },
    });

  return (
    <>
      <Banner title={"Registration"} path={"Sign Up"} />
      <div className="signup__container">
        <div className="signup__input__container">
          <form
            action="post"
            className="signup__input__form"
            onSubmit={handleSubmit}
          >
            <h2>Registration</h2>
            <p>If you don't have an account with us, please Registration.</p>

            <div className="signup__input__form__control">
              <label htmlFor="username">
                Username <sup>*</sup>
              </label>
              <input
                type="text"
                name="username"
                id="username"
                value={values.username}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Your Username"
              />
              {errors.username && touched.username ? (
                <p className="form-error">{errors.username}</p>
              ) : null}
            </div>

            <div className="signup__input__form__control">
              <label htmlFor="phone_number">
                Mobile Number <sup>*</sup>
              </label>
              <input
                type="number"
                name="phone_number"
                id="phone_number"
                value={values.phone_number}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Your Phone Number"
              />
              {errors.phone_number && touched.phone_number ? (
                <p className="form-error">{errors.phone_number}</p>
              ) : null}
            </div>

            <div className="signup__input__form__control">
              <label htmlFor="email">
                Email Address <sup>*</sup>
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Your Email Address"
              />
              {errors.email && touched.email ? (
                <p className="form-error">{errors.email}</p>
              ) : null}
            </div>

            <div className="signup__input__form__control">
              <label htmlFor="password">
                Password <sup>*</sup>
              </label>
              <input
                type="password"
                name="password"
                id="password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Type Password"
              />
              {errors.password && touched.password ? (
                <p className="form-error">{errors.password}</p>
              ) : null}
            </div>

            <p className="temp-data">
              Your personal data will be used to support your experience
              throughout this website, to manage access to your account, and for
              other purposes described in our <span>privacy policy.</span>
            </p>

            <button className="btn-primary">Register</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signup;