import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
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

            <div className="extra-nav">
              <div className="extra-cell">
                <h6 className="phone">
                  <span>
                    <i className="fa-solid fa-phone"></i>
                  </span>
                  (+91) 9974130474
                </h6>
                <a className="btn btn-primary btn-lg" href="contact-us.html">
                  Cantact US
                </a>
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
                <li>
                  <Link>About Us </Link>
                </li>
                <li className="sub-menu-down active">
                {/* <Link to="/shop"/>Shop</Link> */}
                  <a href="javascript:void(0);">Shop</a>
                  <ul className="sub-menu show">
                    <li>
                    <Link to="/shop">Shop Grid</Link>
                    </li> 
                    <li>
                    <Link to="/cart-detail">Shop Cart </Link>
                    </li>
                    <li>
                      <a href="#">Shop Checkout</a>
                    </li>
                    <li className="active">
                    <Link to="/wishlist">Wishlist </Link>
                    </li>
                    <li>
                    <Link to="/login">Login</Link>
                    </li>
                    <li>
                    <Link to="/sign-up">Registration</Link>
                    </li>
                  </ul>
                </li>
                <li className="sub-menu-down">
                  <a href="javascript:void(0);">Blog</a>
                  <ul className="sub-menu">
                    <li>
                      <a href="blog-list.html">Blog List</a>
                    </li>
                    <li>
                      <a href="blog-grid.html">Blog Grid</a>
                    </li>
                    <li>
                      <a href="blog-details.html">Blog Details</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="contact-us.html">Contact Us</a>
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
