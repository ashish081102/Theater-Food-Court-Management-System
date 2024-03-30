import React, { useEffect } from "react";
import Banner from "../../../Components/Banner/Banner";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import "../Authentication.css";
// import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { LoginSchema } from "./LoginSchema";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
// import { setUser } from "../../../store/userSlice";

// import { useDispatch, useSelector } from "react-redux";


const Login = () => {
  // const dispatch = useDispatch();

  const setUserEmailAndId = (user_email, user_id) => {
    // dispatch(setUser({ user_email, user_id }));
    localStorage.setItem('user_id', JSON.stringify({ user_id, user_email }));
  };
  const navigate = useNavigate();
  const user_id = JSON.parse(localStorage.getItem('user_id'));


  useEffect(() => {
    async function verifyUser() {
      await axios
        .post("http://localhost:8080/api/admin/checkUser", {
          userid: user_id
        }, {
          withCredentials: true,
        }).then((response) => {
          navigate('/');
        }).catch((err) => {
          navigate('/login');
          console.log(err);
        });
    }
    verifyUser();
  }, []);

  const userData = {
    email: "",
    password: "",
  };
  const loginUser = async (user) => {
    const userInfo = {
      user_password: user.password,
      user_email: user.email,
    };
    await axios
      .post("http://localhost:8080/api/admin/userSignIn", userInfo, {
        withCredentials: true,
      })
      .then((response) => {
        const { user_email, user_id } = response.data.userWithEmail;
        console.log("From Login     ", user_email, user_id);
        setUserEmailAndId(user_email, user_id);
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: userData,
      validationSchema: LoginSchema,
      onSubmit: (values, action) => {
        console.log(values);
        loginUser(values);
        action.resetForm();
      },
    });

  return (
    <>
      <Banner title="Login Page" path="Login" />
      <div className="login__container">
        <div className="login__left">
          <h2>New Customer</h2>
          <p>
            By creating an account with our store, you will be able to move
            through the checkout process faster, store multiple shipping
            addresses, view and track your orders in your account and more.
          </p>

          <button
            className="btn-primary"
            onClick={() => {
              navigate("/sign-up");
            }}
          >
            Create an Account
          </button>
        </div>
        <form className="form login__right" onSubmit={handleSubmit}>
          <h2>Login</h2>
          <p>If you have an account with us, please log in.</p>

          <div className="login__right__input">
            <div className="login__right__input__control">
              <label htmlFor="email">
                E-MAIL <sup>*</sup>
              </label>
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
            <div className="login__right__input__control">
              <label htmlFor="password">
                PASSWORD <sup>*</sup>
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

            <div className="login__right__button">
              <button className="btn-primary">Login</button>
              <p>
                <span>
                  <LockOpenIcon />
                </span>
                Forgot Password
              </p>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
