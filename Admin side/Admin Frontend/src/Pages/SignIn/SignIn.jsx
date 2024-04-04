import React, { useEffect, useState } from "react";
import "./SignIn.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

const SignIn = ({ userLogin }) => {
  const setUserEmailAndId = (admin_email, admin_id) => {
    // dispatch(setUser({ admin_email, admin_id }));
    localStorage.setItem("admin_id", JSON.stringify({ admin_id, admin_email }));
  };
  const navigate = useNavigate();
  const admin_id = JSON.parse(localStorage.getItem("admin_id"));
  const [loginData, setLoginData] = useState({
    admin_email: "",
    admin_password: "",
  });

  useEffect(() => {
    async function verifyUser() {
      console.log("VVVVVVVVVVVVVVVVVERIFYING", admin_id);

      await axios
        .post("http://localhost:8080/api/admin/checkAdmin", {
          admin_id: admin_id,
        })
        .then((response) => {
          toast.success("You are already Logged In");
          navigate("/");
        })
        .catch((err) => {
          toast.error("Please Log In to Continue!");
          console.log(err);
          navigate("/signIn");
        });
    }
    if (admin_id) {
      console.log("DDDDDDDDDOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOing");
      verifyUser();
    } else {
      navigate("/signIn");
    }
  }, []);

  const loginAdmin = async (admin) => {
    const adminInfo = {
      admin_email: admin.admin_email,
      admin_password: admin.admin_password,
    };
    await axios
      .post("http://localhost:8080/api/admin/adminlogin", adminInfo, {
        withCredentials: true,
      })
      .then((response) => {
        const { admin_email, admin_id } = response.data.userWithEmail;
        console.log("From Login     ", admin_email, admin_id);
        setUserEmailAndId(admin_email, admin_id);
        navigate("/");
        toast.success("Login Successfully!"); 
      })
      .catch((error) => {
        toast.error("Wrong Credentials");
        console.log(error);
      });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(loginData);
    loginAdmin(loginData);
    // toast.
  };
  return (
    <>
      <form action="" onSubmit={handleSubmit}>
        <div className="signin">
          <div className="container">
            <div className="main row">
              <div className="main-left">
                <img
                  src="https://davur.dexignzone.com/frontend/images/login.jpg"
                  alt="login"
                />
              </div>
              <div className="main-right">
                <div className="main-right-title">Sign In</div>
                <div className="main-right-body">
                  <div className="form-control">
                    <span>Enter Email</span>
                    <input
                      type="text"
                      placeholder="Enter your Email"
                      value={loginData.admin_email}
                      onChange={(event) => {
                        setLoginData({
                          ...loginData,
                          admin_email: event.target.value,
                        });
                      }}
                      required
                    />
                  </div>
                  <div className="form-control">
                    <span>Password</span>
                    <input
                      type="password"
                      placeholder="Enter Password"
                      value={loginData.user_password}
                      onChange={(event) => {
                        setLoginData({
                          ...loginData,
                          admin_password: event.target.value,
                        });
                      }}
                      required
                    />
                  </div>
                </div>

                <div className="main-right-footer">
                  <button onClick={() => {}}>Sign In</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default SignIn;
