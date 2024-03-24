import React from "react";

const Header = () => {
  return (
    <header class="site-header mo-left header ">
      <div class="sticky-header main-bar-wraper navbar-expand-lg">
        <div class="main-bar clearfix ">
          <div class="container clearfix">
            <div class="logo-header logo-dark">
              <a href="index.html">
                <img src="assets/images/logo.png" alt="" />
              </a>
            </div>

            <button
              class="navbar-toggler collapsed navicon justify-content-end"
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

            <div class="extra-nav">
              <div class="extra-cell">
                <h6 class="phone">
                  <span>
                    <i class="fa-solid fa-phone"></i>
                  </span>
                  (+91) 987 654 3210
                </h6>
                <a class="btn btn-primary btn-lg" href="contact-us.html">
                  Cantact US
                </a>
              </div>
            </div>

            <div
              class="header-nav navbar-collapse collapse "
              id="navbarNavDropdown"
            >
              <div class="logo-header">
                <a href="index.html" class="logo-dark">
                  <img src="assets/images/logo.png" alt="" />
                </a>
              </div>
              <ul class="nav navbar-nav navbar navbar-left show">
                <li>
                  <a href="index.html">Home</a>
                </li>
                <li>
                  <a href="about-us.html">About Us</a>
                </li>
                <li class="sub-menu-down active">
                  <a href="javascript:void(0);">Shop</a>
                  <ul class="sub-menu show">
                    <li>
                      <a href="shop-grid-view.html">Shop Grid</a>
                    </li>
                    <li>
                      <a href="shop-detail.html">Shop Detail</a>
                    </li>
                    <li>
                      <a href="shop-cart.html">Shop Cart</a>
                    </li>
                    <li>
                      <a href="shop-checkout.html">Shop Checkout</a>
                    </li>
                    <li class="active">
                      <a href="wishlist.html" class="active">
                        Wishlist
                      </a>
                    </li>
                    <li>
                      <a href="shop-login.html">Login</a>
                    </li>
                    <li>
                      <a href="shop-registration.html">Registration</a>
                    </li>
                  </ul>
                </li>
                <li class="sub-menu-down">
                  <a href="javascript:void(0);">Blog</a>
                  <ul class="sub-menu">
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
