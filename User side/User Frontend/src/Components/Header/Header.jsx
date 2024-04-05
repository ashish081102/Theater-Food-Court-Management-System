import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [category, setCategory] = useState([]);
  const user_id = JSON.parse(localStorage.getItem("user_id"));

  useEffect(() => {
    const getCategory = async () => {
      await axios
        .get("http://localhost:8080/api/admin/getAllCategory", {
          withCredentials: true,
        })
        .then((response) => {
          setCategory(response.data);
        })
        .catch((error) => {
          console.log("error: ", error);
        });
    };

    getCategory();
  }, []);

  const handleLogout = () => {
    function deleteCookie(cookieName) {
      document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
    }

    localStorage.removeItem("user_id");
    deleteCookie("Token");
    toast.success("Logout Successfully!");
    navigate("/login");
  };

  return (
    <header className="site-header mo-left header ">
      <div className="sticky-header main-bar-wraper navbar-expand-lg">
        <div className="main-bar clearfix ">
          <div className="container clearfix">
            <div className="logo-header logo-dark">
              <a href="index.html">
                <img src="assets/images/logo.png" alt="" />
              </a>
            </div>

            <button
              className="navbar-toggler collapsed navicon justify-content-end"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>

            <div className="extra-nav" onClick={handleLogout}>
              <div className="extra-cell">
                <h6 className="phone">
                  <span>
                    <i className="fa-solid fa-phone"></i>
                  </span>
                  (+91) 9974130474
                </h6>

                <Link
                  className="btn btn-primary btn-lg"
                  to={user_id && "/login"}
                >
                  {user_id ? "Logout" : "Login"}
                </Link>
              </div>
            </div>

            <div
              className="header-nav navbar-collapse collapse "
              id="navbarNavDropdown"
            >
              <div className="logo-header">
                <a href="index.html" className="logo-dark">
                  <img src="assets/images/logo.png" alt="" />
                </a>
              </div>
              <ul className="nav navbar-nav navbar navbar-left show">
                <li>
                  <Link to="/">Home</Link>
                </li>
               
                <li className="sub-menu-down active">
                  {/* <Link to="/shop"/>Shop</Link> */}
                  <a href="javascript:void(0);">Category</a>
                  <ul className="sub-menu show">
                    {category.map((data) => {
                      return (
                        <li key={data.category_id}>
                          <Link to={`/shop/${data.category_id}`}>
                            {data.category_name}
                          </Link>
                        </li>
                      );
                    })}

                  </ul>
                </li>
                   
                    <li>
                      <Link to="/cart-detail">Shop Cart </Link>
                    </li>
                   
                    <li >
                      <Link to="/wishlist">Wishlist </Link>
                    </li>
                    
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
