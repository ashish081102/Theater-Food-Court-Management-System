import React, { useEffect } from "react";
import "../Cart/Cart.css";
import "../Cart/animate.css";
import "../Cart/bootstrap-select.min.css";
import "../Cart/swiper.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const Home = () => {
  // const user_id = useSelector((state) => state.user.user_id);
  const user_id = JSON.parse(localStorage.getItem('user_id'));
  console.log("From local     ", user_id);
  const navigate = useNavigate();
  useEffect(() => {
    async function verifyUser() {
      await axios
        .post("http://localhost:8080/api/admin/checkUser", {
          userid: user_id
        }, {
          withCredentials: true,
        }).then((response) => {
          console.log("Succcseee");
        }).catch((err) => {
          navigate('/login');
          console.log(err);
        });
    }
    verifyUser();
  }, []);

  return (
    <div className="page-wraper">
      <div className="page-content">
        <div className="main-slider style-1 position-relative">
          <div className="main-swiper swiper swiper-fade swiper-initialized swiper-horizontal swiper-pointer-events swiper-watch-progress swiper-backface-hidden">
            <div
              className="swiper-wrapper"
              id="swiper-wrapper-93a2285f3515888c"
              aria-live="off"
              style={{ transitionDuration: "0ms" }}
            >
              <div
                className="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-next"
                data-rel="6"
                data-swiper-slide-index="5"
                role="group"
                aria-label="6 / 6"
                style={{
                  width: "1519px",
                  opacity: "1",
                  transform: "translate3d(0px, 0px, 0px)",
                  transitionDuration: "0ms",
                }}
              >
                <div className="main-bnr">
                  <div className="container">
                    <div className="row bnr-row">
                      <div className="col-xl-7 col-lg-7 col-md-6 col-sm-7">
                        <h6
                          className="sub-title wow fadeInUp"
                          data-wow-delay="0.1s"
                          data-swiper-parallax="-50"
                          style={{
                            visibility: "visible",
                            animationDelay: "0.1s",
                            animationName: "fadeInUp",
                          }}
                        >
                          #6 We Make Best Test
                        </h6>
                        <h1
                          className="wow fadeInUp"
                          data-wow-delay="0.2s"
                          data-swiper-parallax="-50"
                          style={{
                            visibility: "visible",
                            animationDelay: "0.2s",
                            animationName: "fadeInUp",
                          }}
                        >
                          The Perfect Space to Enjoy Fantastic Food
                        </h1>
                        <a
                          className="btn btn-primary btn-lg wow fadeInUp"
                          data-wow-delay="0.3s"
                          data-swiper-parallax="-50"
                          href="shop-detail.html"
                          style={{
                            visibility: "visible",
                            animationDelay: "0.3s",
                            animationName: "fadeInUp",
                          }}
                        >
                          Shop More
                          <i className="fa-solid fa-circle-arrow-right"></i>
                        </a>
                      </div>
                      <div className="col-xl-5 col-lg-5 col-md-6 col-sm-5">
                        <div className="main-media">
                          <img
                            className="media"
                            src={"/images/home-banner/food-6.png"}
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="container">
              <div className="banner-bottom">
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-8 m-b10">
                    <div className="widget-box style-1">
                      <div className="dz-media">
                        <img src="/images/product/pic1.jpg" alt="" />
                      </div>
                      <div className="dz-info">
                        <h6 className="title">
                          <a href="blog-details.html">
                            Pizza With Extra Toppings
                          </a>
                        </h6>
                        <ul className="dz-rating">
                          <li>
                            <i className="fa-solid fa-star"></i>
                          </li>
                          <li>
                            <i className="fa-solid fa-star"></i>
                          </li>
                          <li>
                            <i className="fa-solid fa-star"></i>
                          </li>
                          <li>
                            <i className="fa-solid fa-star"></i>
                          </li>
                          <li>
                            <i className="fa-solid fa-star  "></i>
                          </li>
                        </ul>
                        <div className="bottom-content">
                          <span className="size">Medium</span>
                          <h6 className="price">$6</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-8 m-b10">
                    <div className="widget-box style-1">
                      <div className="dz-media">
                        <img src="/images/product/pic2.jpg" alt="" />
                      </div>
                      <div className="dz-info">
                        <h6 className="title">
                          <a href="blog-details.html">
                            pizza Margherita Cheese
                          </a>
                        </h6>
                        <ul className="dz-rating">
                          <li>
                            <i className="fa-solid fa-star"></i>
                          </li>
                          <li>
                            <i className="fa-solid fa-star"></i>
                          </li>
                          <li>
                            <i className="fa-solid fa-star"></i>
                          </li>
                          <li>
                            <i className="fa-solid fa-star"></i>
                          </li>
                          <li>
                            <i className="fa-solid fa-star  "></i>
                          </li>
                        </ul>
                        <div className="bottom-content">
                          <span className="size">Medium</span>
                          <h6 className="price">$6</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="main-thumb-wrapper">
              <ul className="main-swiper-pagination">
                <li data-member="1">
                  <a href="javascript:void(0);">
                    <img src="/images/home-banner/food-1.png" alt="" />
                  </a>
                </li>
                <li data-member="2" className="">
                  <a href="javascript:void(0);">
                    <img src="/images/home-banner/food-2.png" alt="" />
                  </a>
                </li>
                <li data-member="3" className="">
                  <a href="javascript:void(0);">
                    <img src="/images/home-banner/food-3.png" alt="" />
                  </a>
                </li>
                <li data-member="4" className="">
                  <a href="javascript:void(0);">
                    <img src="/images/home-banner/food-4.png" alt="" />
                  </a>
                </li>
                <li data-member="5" className="active">
                  <a href="javascript:void(0);">
                    <img src="/images/home-banner/food-5.png" alt="" />
                  </a>
                </li>
                <li data-member="6">
                  <a href="javascript:void(0);">
                    <img src="/images/home-banner/food-6.png" alt="" />
                  </a>
                </li>
              </ul>
              <img src="/images/home-banner/line.png" className="line" alt="" />
            </div>
            <span
              className="swiper-notification"
              aria-live="assertive"
              aria-atomic="true"
            ></span>
          </div>

          <ul className="banner-shape">
            <li>
              <svg
                viewBox="0 0 200 560"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_8_1378)">
                  <path
                    d="M60.2271 478.227C122.996 542.283 204.806 546.786 237.865 541.03L232.117 12.0103C122.738 -3.19512 101.513 76.5857 104.573 118.377C104.607 250.193 67.8485 287.524 42.9781 335.93C29.3557 362.443 -18.2339 398.157 60.2271 478.227Z"
                    fill="var(--primary)"
                  ></path>
                  <path
                    d="M50.231 490.237C115.966 557.279 201.643 561.992 236.265 555.968L230.248 2.28022C115.699 -13.6335 93.4707 69.8676 96.6751 113.607C96.7102 251.57 58.2139 290.642 32.1676 341.305C17.9012 369.055 -31.938 406.434 50.231 490.237Z"
                    stroke="var(--primary)"
                    stroke-width="2"
                    stroke-dasharray="15 15"
                  ></path>
                </g>
                <defs>
                  <clipPath id="clip0_8_1378">
                    <rect width="200" height="560" fill="white"></rect>
                  </clipPath>
                </defs>
              </svg>
            </li>
            <li>
              <img src="/images/home-banner/pic9.png" alt="" />
            </li>
            <li>
              <svg
                viewBox="0 0 205 141"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="146.5"
                  cy="-5.5"
                  r="146.5"
                  fill="var(--rgba-primary-1)"
                ></circle>
              </svg>
            </li>
            <li>
              <svg
                viewBox="0 0 293 293"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="146.5"
                  cy="146.5"
                  r="146.5"
                  fill="var(--rgba-primary-1)"
                ></circle>
              </svg>
            </li>
          </ul>
        </div>

        <section className="content-inner-1">
          <div className="container">
            <div className="section-head text-center">
              <p
                className="text wow fadeInUp"
                data-wow-delay="0.1s"
                style={{
                  visibility: "visible",
                  animationDelay: "0.1s",
                  animationName: "fadeInUp",
                }}
              >
                What We Serve
              </p>
              <h2
                className="title wow fadeInUp"
                data-wow-delay="0.2s"
                style={{
                  visibility: "visible",
                  animationDelay: "0.2s",
                  animationName: "fadeInUp",
                }}
              >
                Your Favourite Food Delivery Pantner
              </h2>
            </div>
            <div className="row justify-content-center">
              <div className="col-lg-4 col-md-6 m-b30">
                <div
                  className="icons-bx-wraper style-1 box-hover text-center wow fadeInUp"
                  data-wow-delay="0.1s"
                  style={{
                    visibility: "visible",
                    animationDelay: "0.1s",
                    animationName: "fadeInUp",
                  }}
                >
                  <div className="icons-media">
                    <img src="/images/icons/pic1.png" alt="image" />
                  </div>
                  <div className="icons-content">
                    <h5 className="title">Easy To Order</h5>
                    <p className="text">
                      It is a long established fact that a reader of a page when
                      looking at its layout.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 m-b30">
                <div
                  className="icons-bx-wraper style-1 box-hover  active text-center wow fadeInUp center"
                  data-wow-delay="0.2s"
                  style={{
                    visibility: "visible",
                    animationDelay: "0.2s",
                    animationName: "fadeInUp",
                  }}
                >
                  <div className="icons-media">
                    <img src="/images/icons/pic2.png" alt="image" />
                  </div>
                  <div className="icons-content">
                    <h5 className="title">Fastest Deilvery</h5>
                    <p className="text">
                      It is a long established fact that a reader of a page when
                      looking at its layout.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 m-b30">
                <div
                  className="icons-bx-wraper style-1 box-hover  text-center wow fadeInUp"
                  data-wow-delay="0.3s"
                  style={{
                    visibility: "visible",
                    animationDelay: "0.3s",
                    animationName: "fadeInUp",
                  }}
                >
                  <div className="icons-media">
                    <img src="/images/icons/pic3.png" alt="image" />
                  </div>
                  <div className="icons-content">
                    <h5 className="title">Best Quailty</h5>
                    <p className="text">
                      It is a long established fact that a reader of a page when
                      looking at its layout.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="content-inner-1 about-wrapper1">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-6 col-sm-12 m-b30">
                <div className="dz-media">
                  <img
                    src="/images/about/pic4.png"
                    alt=""
                    className="wow fadeInUp"
                    data-wow-delay="0.1s"
                    style={{
                      visibility: "visible",
                      animationDelay: "0.1s",
                      animationName: "fadeInUp",
                    }}
                  />
                  <svg
                    className="shap-bg"
                    viewBox="0 0 917 588"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M883.652 165.651L-28 0.330566V587.331L854.966 365.127C869.165 361.554 880.277 350.509 883.935 336.332L915.245 215.004C921.053 192.498 906.522 169.798 883.652 165.651Z"
                      fill="var(--primary)"
                    ></path>
                  </svg>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12">
                <div className="section-head">
                  <p
                    className="text wow fadeInUp"
                    data-wow-delay="0.2s"
                    style={{
                      visibility: "visible",
                      animationDelay: "0.2s",
                      animationName: "fadeInUp",
                    }}
                  >
                    What They Say
                  </p>
                  <h2
                    className="title wow fadeInUp mb-3"
                    data-wow-delay="0.3s"
                    style={{
                      visibility: "visible",
                      animationDelay: "0.3s",
                      animationName: "fadeInUp",
                    }}
                  >
                    Food Quality Is The Most Important Part For Test
                  </h2>
                  <p
                    className="wow fadeInUp"
                    data-wow-delay="0.4s"
                    style={{
                      visibility: "visible",
                      animationDelay: "0.4s",
                      animationName: "fadeInUp",
                    }}
                  >
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    for by injected randomised words which don't look even
                    slightly believable.
                  </p>
                  <p
                    className="wow fadeInUp m-b30"
                    data-wow-delay="0.5s"
                    style={{
                      visibility: "visible",
                      animationDelay: "0.5s",
                      animationName: "fadeInUp",
                    }}
                  >
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout.
                  </p>
                  <a
                    className="btn btn-primary wow fadeInUp"
                    data-wow-delay="0.6s"
                    href="shop-detail.html"
                    style={{
                      visibility: "visible",
                      animationDelay: "0.6s",
                      animationName: "fadeInUp",
                    }}
                  >
                    Shop Now <i className="fa-solid fa-circle-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
            <img
              src="/images/about/vegetable-2.png"
              className="vegetable"
              alt="image"
            />
          </div>
        </section>

        <section className="product-wrapper1 content-inner-1">
          <div className="container">
            <div className="row section-head align-items-center">
              <div className="text-center text-xl-start col-xl-7 m-lg-b20">
                <p
                  className="text wow fadeInUp"
                  data-wow-delay="0.1s"
                  style={{
                    visibility: "visible",
                    animationDelay: "0.1s",
                    animationName: "fadeInUp",
                  }}
                >
                  Our Categories
                </p>
                <h2
                  className="title wow fadeInUp"
                  data-wow-delay="0.2s"
                  style={{
                    visibility: "visible",
                    animationDelay: "0.2s",
                    animationName: "fadeInUp",
                  }}
                >
                  Browser Our Top Food Categories
                </h2>
              </div>
              <div className="text-center text-xl-end col-xl-5">
                <a
                  className="btn btn-light btn-lg wow fadeInUp"
                  data-wow-delay="0.3s"
                  href="shop-detail.html"
                  style={{
                    visibility: "visible",
                    animationDelay: "0.3s",
                    animationName: "fadeInUp",
                  }}
                >
                  See All <i className="fa-solid fa-circle-arrow-right"></i>
                </a>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-3 col-sm-6">
                <div
                  className="product-bx wow fadeInUp"
                  data-wow-delay="0.3s"
                  style={{
                    visibility: "visible",
                    animationDelay: "0.3s",
                    animationName: "fadeInUp",
                  }}
                >
                  <div className="product-media">
                    <img src="/images/product/pic1.jpg" alt="image" />
                  </div>
                  <div className="product-content">
                    <h5 className="title ">
                      <a href="shop-detail.html">Cheese Burger</a>
                    </h5>
                    <ul className="dz-rating">
                      <li>
                        <i className="fa-solid fa-star"></i>
                      </li>
                      <li>
                        <i className="fa-solid fa-star"></i>
                      </li>
                      <li>
                        <i className="fa-solid fa-star"></i>
                      </li>
                      <li>
                        <i className="fa-solid fa-star"></i>
                      </li>
                      <li>
                        <i className="fa-solid fa-star  "></i>
                      </li>
                    </ul>
                    <span className="price">$6.00</span>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-sm-6">
                <div
                  className="product-bx wow fadeInUp"
                  data-wow-delay="0.4s"
                  style={{
                    visibility: "visible",
                    animationDelay: "0.4s",
                    animationName: "fadeInUp",
                  }}
                >
                  <div className="product-media">
                    <img src="/images/product/pic2.jpg" alt="image" />
                  </div>
                  <div className="product-content">
                    <h5 className="title ">
                      <a href="shop-detail.html">French fries</a>
                    </h5>
                    <ul className="dz-rating">
                      <li>
                        <i className="fa-solid fa-star"></i>
                      </li>
                      <li>
                        <i className="fa-solid fa-star"></i>
                      </li>
                      <li>
                        <i className="fa-solid fa-star"></i>
                      </li>
                      <li>
                        <i className="fa-solid fa-star"></i>
                      </li>
                      <li>
                        <i className="fa-solid fa-star  "></i>
                      </li>
                    </ul>
                    <span className="price">$3.00</span>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-sm-6">
                <div
                  className="product-bx wow fadeInUp"
                  data-wow-delay="0.5s"
                  style={{
                    visibility: "visible",
                    animationDelay: "0.5s",
                    animationName: "fadeInUp",
                  }}
                >
                  <div className="product-media">
                    <img src="/images/product/pic3.jpg" alt="image" />
                  </div>
                  <div className="product-content">
                    <h5 className="title ">
                      <a href="shop-detail.html">Cheese Pizza</a>
                    </h5>
                    <ul className="dz-rating">
                      <li>
                        <i className="fa-solid fa-star"></i>
                      </li>
                      <li>
                        <i className="fa-solid fa-star"></i>
                      </li>
                      <li>
                        <i className="fa-solid fa-star"></i>
                      </li>
                      <li>
                        <i className="fa-solid fa-star"></i>
                      </li>
                      <li>
                        <i className="fa-solid fa-star  "></i>
                      </li>
                    </ul>
                    <span className="price">$4.00</span>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-sm-6">
                <div
                  className="product-bx wow fadeInUp"
                  data-wow-delay="0.6s"
                  style={{
                    visibility: "visible",
                    animationDelay: "0.6s",
                    animationName: "fadeInUp",
                  }}
                >
                  <div className="product-media">
                    <img src="/images/product/pic4.jpg" alt="image" />
                  </div>
                  <div className="product-content">
                    <h5 className="title ">
                      <a href="shop-detail.html">Veg Sandwich</a>
                    </h5>
                    <ul className="dz-rating">
                      <li>
                        <i className="fa-solid fa-star"></i>
                      </li>
                      <li>
                        <i className="fa-solid fa-star"></i>
                      </li>
                      <li>
                        <i className="fa-solid fa-star"></i>
                      </li>
                      <li>
                        <i className="fa-solid fa-star"></i>
                      </li>
                      <li>
                        <i className="fa-solid fa-star  "></i>
                      </li>
                    </ul>
                    <span className="price">$8.00</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="content-inner overflow-hidden about-section">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-6 col-sm-6 m-b30">
                <div className="about-media">
                  <img
                    src="/images/about/pic1.png"
                    alt=""
                    className="wow fadeInUp animated"
                    data-wow-delay="0.1s"
                    style={{
                      visibility: "visible",
                      animationDelay: "0.1s",
                      animationName: "rotate-360",
                    }}
                  />
                  <svg
                    className="shap-1"
                    viewBox="0 0 917 588"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M883.652 165.651L-28 0.330566V587.331L854.966 365.127C869.165 361.554 880.277 350.509 883.935 336.332L915.245 215.004C921.053 192.498 906.522 169.798 883.652 165.651Z"
                      fill="var(--primary)"
                    ></path>
                  </svg>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6 m-b30">
                <div className="about-contant">
                  <h2
                    className="title wow fadeInUp"
                    data-wow-delay="0.2s"
                    style={{
                      visibility: "visible",
                      animationDelay: "0.2s",
                      animationName: "fadeInUp",
                    }}
                  >
                    Veg Sandwich
                  </h2>
                  <p
                    className="wow fadeInUp m-b30"
                    data-wow-delay="0.3s"
                    style={{
                      visibility: "visible",
                      animationDelay: "0.3s",
                      animationName: "fadeInUp",
                    }}
                  >
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout.
                  </p>
                  <a
                    className="btn btn-primary wow fadeInUp"
                    data-wow-delay="0.4s"
                    href="shop-detail.html"
                    style={{
                      visibility: "visible",
                      animationDelay: "0.4s",
                      animationName: "fadeInUp",
                    }}
                  >
                    Shop Now <i className="fa-solid fa-circle-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>

            <div className="row align-items-center about-row-2">
              <div className="col-lg-6 col-md-6 col-sm-6 m-b30">
                <div className="about-contant">
                  <h2
                    className="title wow fadeInUp"
                    data-wow-delay="0.1s"
                    style={{
                      visibility: "visible",
                      animationDelay: "0.1s",
                      animationName: "fadeInUp",
                    }}
                  >
                    Cheese Pizza
                  </h2>
                  <p
                    className="wow fadeInUp m-b30"
                    data-wow-delay="0.2s"
                    style={{
                      visibility: "visible",
                      animationDelay: "0.2s",
                      animationName: "fadeInUp",
                    }}
                  >
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout.
                  </p>
                  <a
                    className="btn btn-primary wow fadeInUp"
                    data-wow-delay="0.3s"
                    href="shop-detail.html"
                    style={{
                      visibility: "visible",
                      animationDelay: "0.3s",
                      animationName: "fadeInUp",
                    }}
                  >
                    Shop Now <i className="fa-solid fa-circle-arrow-right"></i>
                  </a>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6 m-b30">
                <div className="about-media right text-lg-end">
                  <img
                    src="/images/about/pic2.png"
                    alt=""
                    className="wow fadeInUp animated"
                    data-wow-delay="0.4s"
                    style={{
                      visibility: "visible",
                      animationDelay: "0.4s",
                      animationName: "rotate-360",
                    }}
                  />
                  <svg
                    className="shap-2"
                    viewBox="0 0 903 588"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M33.3484 165.82L945 0.5V587.5L62.0341 365.297C47.8353 361.723 36.7234 350.678 33.0648 336.501L1.75452 215.174C-4.05347 192.668 10.4783 169.968 33.3484 165.82Z"
                      fill="var(--primary)"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>

            <div className="row align-items-center about-row-3">
              <div className="col-lg-6 col-md-6 col-sm-6 m-b30">
                <div className="about-media">
                  <img
                    src="/images/about/pic3.png"
                    alt=""
                    className="wow fadeInUp animated"
                    data-wow-delay="0.1s"
                    style={{
                      visibility: "visible",
                      animationDelay: "0.1s",
                      animationName: "rotate-360",
                    }}
                  />
                  <svg
                    className="shap-3"
                    viewBox="0 0 917 588"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M883.652 165.651L-28 0.330566V587.331L854.966 365.127C869.165 361.554 880.277 350.509 883.935 336.332L915.245 215.004C921.053 192.498 906.522 169.798 883.652 165.651Z"
                      fill="var(--primary)"
                    ></path>
                  </svg>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6 m-b30">
                <div className="about-contant">
                  <h2
                    className="title wow fadeInUp"
                    data-wow-delay="0.2s"
                    style={{
                      visibility: "visible",
                      animationDelay: "0.2s",
                      animationName: "fadeInUp",
                    }}
                  >
                    Paneer Tikka
                  </h2>
                  <p
                    className="wow fadeInUp m-b30"
                    data-wow-delay="0.3s"
                    //  style={{visibility: "visible", animationDelay: "0.3s", animationName: "fadeInUp"}}
                    style={{
                      visibility: "visible",
                      animationDelay: "0.3s",
                      animationName: "fadeInUp",
                    }}
                  >
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout.
                  </p>
                  <a
                    className="btn btn-primary wow fadeInUp"
                    data-wow-delay="0.4s"
                    href="shop-detail.html"
                    //   style={{visibility: "visible", animationDelay: "0.4s", animationName:"fadeInUp"}}
                    style={{
                      visibility: "visible",
                      animationDelay: "0.4s",
                      animationName: "fadeInUp",
                    }}
                  >
                    Shop Now <i className="fa-solid fa-circle-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>

            <img
              src="/images/about/border-1.png"
              className="line1"
              alt="image"
            />
            <img
              src="/images/about/border-2.png"
              className="line2"
              alt="image"
            />
            <img
              src="/images/about/vegetable.png"
              className="vegetable"
              alt="image"
            />
          </div>
        </section>

        <section className="product-wrapper1 content-inner-1 overflow-hidden">
          <div className="container">
            <div className="row section-head align-items-center">
              <div className="text-center text-xl-start col-xl-7 m-lg-b20">
                <p
                  className="text wow fadeInUp"
                  data-wow-delay="0.1s"
                  //   style={{visibility: "visible", animationDelay: "0.1s", animationName:"fadeInUp"}}
                  style={{
                    visibility: "visible",
                    animationDelay: "0.1s",
                    animationName: "fadeInUp",
                  }}
                >
                  Our Menu
                </p>
                <h2
                  className="title wow fadeInUp"
                  data-wow-delay="0.2s"
                  //  style={{visibility: "visible", animationDelay: "0.2s", animationName: "fadeInUp"}}
                  style={{
                    visibility: "visible",
                    animationDelay: "0.3s",
                    animationName: "fadeInUp",
                  }}
                >
                  Menu That Always Make You Feel In best Meal
                </h2>
              </div>
              <div className="text-center text-xl-end col-xl-5">
                <div className="swiper-btn">
                  <div
                    className="product-swiper-prev btn-prev style-1"
                    tabindex="0"
                    role="button"
                    aria-label="Previous slide"
                    aria-controls="swiper-wrapper-55745f4658afde7d"
                  >
                    <i className="fa-solid fa-arrow-left-long"></i>
                  </div>
                  <div
                    className="product-swiper-next btn-next style-1"
                    tabindex="0"
                    role="button"
                    aria-label="Next slide"
                    aria-controls="swiper-wrapper-55745f4658afde7d"
                  >
                    <i className="fa-solid fa-arrow-right-long"></i>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper product-swiper swiper-btn-center-lr product-swiper-wrapper m-b30 swiper-initialized swiper-horizontal swiper-pointer-events swiper-watch-progress">
              <div
                className="swiper-wrapper"
                id="swiper-wrapper-55745f4658afde7d"
                aria-live="off"
                style={{
                  transform: "translate3d(-2500px, 0px, 0px)",
                  transitionDuration: "0ms",
                }}
              >
                <div
                  className="swiper-slide swiper-slide-duplicate"
                  data-swiper-slide-index="0"
                  role="group"
                  aria-label="1 / 4"
                  // style="width: 282.5px; margin-right: 30px;"
                  style={{ width: "282.5px", marginRight: "30px" }}
                >
                  <div
                    className="dz-img-box style-1 wow fadeInUp"
                    data-wow-delay="0.1s"
                    // style="visibility: visible; animation-delay: 0.1s;"
                    style={{
                      visibility: "visible",
                      animationDelay: "0.1s",
                    }}
                  >
                    <div className="dz-media">
                      <img src="/images/gallery/pic2.jpg" alt="/" />
                    </div>
                    <span className="dz-tag">TOP SELLER</span>
                    <div className="dz-content">
                      <h5 className="dz-title">
                        <a href="our-menu.html">Pasta</a>
                      </h5>
                      <p>Lorem ipsum dolor sit amet, dipiscing elit, sed</p>
                    </div>
                    <div className="dz-hover-content">
                      <div className="dz-info">
                        <h5 className="dz-title mb-0">
                          <a href="our-menu.html">Pasta</a>
                        </h5>
                        <span className="dz-price">$55.0</span>
                      </div>
                      <a href="cart.html" className="btn btn-primary ">
                        <i className="fa-solid fa-cart-shopping"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div
                  className="swiper-slide swiper-slide-duplicate"
                  data-swiper-slide-index="1"
                  role="group"
                  aria-label="2 / 4"
                  style={{ width: "282.5px", marginRight: "30px" }}
                >
                  <div
                    className="dz-img-box style-1 wow fadeInUp"
                    data-wow-delay="0.2s"
                    // style="visibility: visible; animation-delay: 0.2s;"
                    style={{
                      visibility: "visible",
                      animationDelay: "0.2s",
                    }}
                  >
                    <div className="dz-media">
                      <img src="/images/gallery/pic5.jpg" alt="/" />
                    </div>
                    <span className="dz-tag">TOP SELLER</span>
                    <div className="dz-content">
                      <h5 className="dz-title">
                        <a href="our-menu.html">Oreo Shake</a>
                      </h5>
                      <p>Lorem ipsum dolor sit amet, dipiscing elit, sed</p>
                    </div>
                    <div className="dz-hover-content">
                      <div className="dz-info">
                        <h5 className="dz-title mb-0">
                          <a href="our-menu.html">Shake</a>
                        </h5>
                        <span className="dz-price">$55.0</span>
                      </div>
                      <a href="cart.html" className="btn btn-primary ">
                        <i className="fa-solid fa-cart-shopping"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div
                  className="swiper-slide swiper-slide-duplicate"
                  data-swiper-slide-index="2"
                  role="group"
                  aria-label="3 / 4"
                  style={{ width: "282.5px", marginRight: "30px" }}
                >
                  <div
                    className="dz-img-box style-1 wow fadeInUp"
                    data-wow-delay="0.3s"
                    // style="visibility: visible; animation-delay: 0.3s;"
                    style={{
                      visibility: "visible",
                      animationDelay: "0.3s",
                      // animationName: "fadeInUp",
                    }}
                  >
                    <div className="dz-media">
                      <img src="/images/gallery/pic4.jpg" alt="/" />
                    </div>
                    <span className="dz-tag">TOP SELLER</span>
                    <div className="dz-content">
                      <h5 className="dz-title">
                        <a href="our-menu.html">Dal Fry</a>
                      </h5>
                      <p>Lorem ipsum dolor sit amet, dipiscing elit, sed</p>
                    </div>
                    <div className="dz-hover-content">
                      <div className="dz-info">
                        <h5 className="dz-title mb-0">
                          <a href="our-menu.html">Dal</a>
                        </h5>
                        <span className="dz-price">$55.0</span>
                      </div>
                      <a href="cart.html" className="btn btn-primary ">
                        <i className="fa-solid fa-cart-shopping"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div
                  className="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-prev"
                  data-swiper-slide-index="3"
                  role="group"
                  aria-label="4 / 4"
                  style={{ width: "282.5px", marginRight: "30px" }}
                >
                  <div
                    className="dz-img-box style-1 wow fadeInUp"
                    data-wow-delay="0.4s"
                    style={{
                      visibility: "visible",
                      animationDelay: "0.4s",
                    }}
                  >
                    <div className="dz-media">
                      <img src="/images/gallery/pic6.jpg" alt="/" />
                    </div>
                    <span className="dz-tag">TOP SELLER</span>
                    <div className="dz-content">
                      <h5 className="dz-title">
                        <a href="our-menu.html">Pizza</a>
                      </h5>
                      <p>Lorem ipsum dolor sit amet, dipiscing elit, sed</p>
                    </div>
                    <div className="dz-hover-content">
                      <div className="dz-info">
                        <h5 className="dz-title mb-0">
                          <a href="our-menu.html">Pizza</a>
                        </h5>
                        <span className="dz-price">$55.0</span>
                      </div>
                      <a href="cart.html" className="btn btn-primary ">
                        <i className="fa-solid fa-cart-shopping"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div
                  className="swiper-slide swiper-slide-duplicate-active"
                  data-swiper-slide-index="0"
                  role="group"
                  aria-label="1 / 4"
                  style={{ width: "282.5px", marginRight: "30px" }}
                >
                  <div
                    className="dz-img-box style-1 wow fadeInUp"
                    data-wow-delay="0.1s"
                    //   style={{visibility: "visible", animationDelay: "0.1s", animationName:"fadeInUp"}}
                    style={{
                      visibility: "visible",
                      animationDelay: "0.1s",
                      animationName: "fadeInUp",
                    }}
                  >
                    <div className="dz-media">
                      <img src="/images/gallery/pic2.jpg" alt="/" />
                    </div>
                    <span className="dz-tag">TOP SELLER</span>
                    <div className="dz-content">
                      <h5 className="dz-title">
                        <a href="our-menu.html">Pasta</a>
                      </h5>
                      <p>Lorem ipsum dolor sit amet, dipiscing elit, sed</p>
                    </div>
                    <div className="dz-hover-content">
                      <div className="dz-info">
                        <h5 className="dz-title mb-0">
                          <a href="our-menu.html">Pasta</a>
                        </h5>
                        <span className="dz-price">$55.0</span>
                      </div>
                      <a href="cart.html" className="btn btn-primary ">
                        <i className="fa-solid fa-cart-shopping"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div
                  className="swiper-slide swiper-slide-duplicate-next"
                  data-swiper-slide-index="1"
                  role="group"
                  aria-label="2 / 4"
                  style={{ width: "282.5px", marginRight: "30px" }}
                >
                  <div
                    className="dz-img-box style-1 wow fadeInUp"
                    data-wow-delay="0.2s"
                    //  style={{visibility: "visible", animationDelay: "0.2s", animationName: "fadeInUp"}}
                    style={{
                      visibility: "visible",
                      animationDelay: "0.2s",
                      animationName: "fadeInUp",
                    }}
                  >
                    <div className="dz-media">
                      <img src="/images/gallery/pic5.jpg" alt="/" />
                    </div>
                    <span className="dz-tag">TOP SELLER</span>
                    <div className="dz-content">
                      <h5 className="dz-title">
                        <a href="our-menu.html">Oreo Shake</a>
                      </h5>
                      <p>Lorem ipsum dolor sit amet, dipiscing elit, sed</p>
                    </div>
                    <div className="dz-hover-content">
                      <div className="dz-info">
                        <h5 className="dz-title mb-0">
                          <a href="our-menu.html">Shake</a>
                        </h5>
                        <span className="dz-price">$55.0</span>
                      </div>
                      <a href="cart.html" className="btn btn-primary ">
                        <i className="fa-solid fa-cart-shopping"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div
                  className="swiper-slide"
                  data-swiper-slide-index="2"
                  role="group"
                  aria-label="3 / 4"
                  style={{ width: "282.5px", marginRight: "30px" }}
                >
                  <div
                    className="dz-img-box style-1 wow fadeInUp"
                    data-wow-delay="0.3s"
                    style={{
                      visibility: "visible",
                      animationDelay: "0.3s",
                      animationName: "fadeInUp",
                    }}
                  >
                    <div className="dz-media">
                      <img src="/images/gallery/pic4.jpg" alt="/" />
                    </div>
                    <span className="dz-tag">TOP SELLER</span>
                    <div className="dz-content">
                      <h5 className="dz-title">
                        <a href="our-menu.html">Dal Fry</a>
                      </h5>
                      <p>Lorem ipsum dolor sit amet, dipiscing elit, sed</p>
                    </div>
                    <div className="dz-hover-content">
                      <div className="dz-info">
                        <h5 className="dz-title mb-0">
                          <a href="our-menu.html">Dal</a>
                        </h5>
                        <span className="dz-price">$55.0</span>
                      </div>
                      <a href="cart.html" className="btn btn-primary ">
                        <i className="fa-solid fa-cart-shopping"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div
                  className="swiper-slide swiper-slide-prev"
                  data-swiper-slide-index="3"
                  role="group"
                  aria-label="4 / 4"
                  style={{ width: "282.5px", marginRight: "30px" }}
                >
                  <div
                    className="dz-img-box style-1 wow fadeInUp"
                    data-wow-delay="0.4s"
                    //   style={{visibility: "visible", animationDelay: "0.4s", animationName:"fadeInUp"}}
                    style={{
                      visibility: "visible",
                      animationDelay: "0.3s",
                      animationName: "fadeInUp",
                    }}
                  >
                    <div className="dz-media">
                      <img src="/images/gallery/pic6.jpg" alt="/" />
                    </div>
                    <span className="dz-tag">TOP SELLER</span>
                    <div className="dz-content">
                      <h5 className="dz-title">
                        <a href="our-menu.html">Pizza</a>
                      </h5>
                      <p>Lorem ipsum dolor sit amet, dipiscing elit, sed</p>
                    </div>
                    <div className="dz-hover-content">
                      <div className="dz-info">
                        <h5 className="dz-title mb-0">
                          <a href="our-menu.html">Pizza</a>
                        </h5>
                        <span className="dz-price">$55.0</span>
                      </div>
                      <a href="cart.html" className="btn btn-primary ">
                        <i className="fa-solid fa-cart-shopping"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div
                  className="swiper-slide swiper-slide-duplicate swiper-slide-visible swiper-slide-active"
                  data-swiper-slide-index="0"
                  role="group"
                  aria-label="1 / 4"
                  style={{ width: "282.5px", marginRight: "30px" }}
                >
                  <div
                    className="dz-img-box style-1 wow fadeInUp"
                    data-wow-delay="0.1s"
                    // style="visibility: visible; animation-delay: 0.1s;"
                    style={{
                      visibility: "visible",
                      animationDelay: "0.1s",
                    }}
                  >
                    <div className="dz-media">
                      <img src="/images/gallery/pic2.jpg" alt="/" />
                    </div>
                    <span className="dz-tag">TOP SELLER</span>
                    <div className="dz-content">
                      <h5 className="dz-title">
                        <a href="our-menu.html">Pasta</a>
                      </h5>
                      <p>Lorem ipsum dolor sit amet, dipiscing elit, sed</p>
                    </div>
                    <div className="dz-hover-content">
                      <div className="dz-info">
                        <h5 className="dz-title mb-0">
                          <a href="our-menu.html">Pasta</a>
                        </h5>
                        <span className="dz-price">$55.0</span>
                      </div>
                      <a href="cart.html" className="btn btn-primary ">
                        <i className="fa-solid fa-cart-shopping"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div
                  className="swiper-slide swiper-slide-duplicate swiper-slide-visible swiper-slide-next"
                  data-swiper-slide-index="1"
                  role="group"
                  aria-label="2 / 4"
                  // style="width: 282.5px; margin-right: 30px;"
                  style={{ width: "282.5px", marginRight: "30px" }}
                >
                  <div
                    className="dz-img-box style-1 wow fadeInUp"
                    data-wow-delay="0.2s"
                    // style="visibility: visible; animation-delay: 0.2s;"
                    style={{
                      visibility: "visible",
                      animationDelay: "0.2s",
                    }}
                  >
                    <div className="dz-media">
                      <img src="/images/gallery/pic5.jpg" alt="/" />
                    </div>
                    <span className="dz-tag">TOP SELLER</span>
                    <div className="dz-content">
                      <h5 className="dz-title">
                        <a href="our-menu.html">Oreo Shake</a>
                      </h5>
                      <p>Lorem ipsum dolor sit amet, dipiscing elit, sed</p>
                    </div>
                    <div className="dz-hover-content">
                      <div className="dz-info">
                        <h5 className="dz-title mb-0">
                          <a href="our-menu.html">Shake</a>
                        </h5>
                        <span className="dz-price">$55.0</span>
                      </div>
                      <a href="cart.html" className="btn btn-primary ">
                        <i className="fa-solid fa-cart-shopping"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div
                  className="swiper-slide swiper-slide-duplicate swiper-slide-visible"
                  data-swiper-slide-index="2"
                  role="group"
                  aria-label="3 / 4"
                  // style="width: ; margin-right: 30px;"
                  style={{ width: "282.5px", marginRight: "30px" }}
                >
                  <div
                    className="dz-img-box style-1 wow fadeInUp"
                    data-wow-delay="0.3s"
                    style={{
                      visibility: "visible",
                      animationDelay: "0.3s",
                    }}
                  >
                    <div className="dz-media">
                      <img src="/images/gallery/pic4.jpg" alt="/" />
                    </div>
                    <span className="dz-tag">TOP SELLER</span>
                    <div className="dz-content">
                      <h5 className="dz-title">
                        <a href="our-menu.html">Dal Fry</a>
                      </h5>
                      <p>Lorem ipsum dolor sit amet, dipiscing elit, sed</p>
                    </div>
                    <div className="dz-hover-content">
                      <div className="dz-info">
                        <h5 className="dz-title mb-0">
                          <a href="our-menu.html">Dal</a>
                        </h5>
                        <span className="dz-price">$55.0</span>
                      </div>
                      <a href="cart.html" className="btn btn-primary ">
                        <i className="fa-solid fa-cart-shopping"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div
                  className="swiper-slide swiper-slide-duplicate swiper-slide-visible swiper-slide-duplicate-prev"
                  data-swiper-slide-index="3"
                  role="group"
                  aria-label="4 / 4"
                  style={{ width: " 282.5px", marginRight: "30px" }}
                >
                  <div
                    className="dz-img-box style-1 wow fadeInUp"
                    data-wow-delay="0.4s"
                    style={{
                      visibility: "visible",
                      animationDelay: "0.4s",
                    }}
                  >
                    <div className="dz-media">
                      <img src="/images/gallery/pic6.jpg" alt="/" />
                    </div>
                    <span className="dz-tag">TOP SELLER</span>
                    <div className="dz-content">
                      <h5 className="dz-title">
                        <a href="our-menu.html">Pizza</a>
                      </h5>
                      <p>Lorem ipsum dolor sit amet, dipiscing elit, sed</p>
                    </div>
                    <div className="dz-hover-content">
                      <div className="dz-info">
                        <h5 className="dz-title mb-0">
                          <a href="our-menu.html">Pizza</a>
                        </h5>
                        <span className="dz-price">$55.0</span>
                      </div>
                      <a href="cart.html" className="btn btn-primary ">
                        <i className="fa-solid fa-cart-shopping"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <span
                className="swiper-notification"
                aria-live="assertive"
                aria-atomic="true"
              ></span>
            </div>
          </div>
        </section>

        <section className="content-inner overflow-hidden">
          <div className="container">
            <div className="section-head text-center">
              <p
                className="text wow fadeInUp"
                data-wow-delay="0.1s"
                style={{
                  visibility: "visible",
                  animationDelay: "0.1s",
                  animationName: "fadeInUp",
                }}
              >
                Testimonial
              </p>
              <h2
                className="title wow fadeInUp"
                data-wow-delay="0.2s"
                style={{
                  visibility: "visible",
                  animationDelay: "0.2s",
                  animationName: "fadeInUp",
                }}
              >
                Our Clients About Us
              </h2>
            </div>
            <div className="swiper-btn-center-lr m-b30">
              <div className="testimonial-swiper swiper m-b30 swiper-btn-lr style-1 swiper-initialized swiper-horizontal swiper-pointer-events swiper-watch-progress swiper-backface-hidden">
                <div
                  className="swiper-wrapper"
                  id="swiper-wrapper-e5848612e1025f81f"
                  aria-live="off"
                  style={{
                    transform: "translate3d(-3705px, 0px, 0px)",
                    transitionDuration: "2000ms",
                  }}
                >
                  <div
                    className="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-active"
                    data-swiper-slide-index="2"
                    role="group"
                    aria-label="3 / 3"
                    style={{ width: "1220px", marginRight: "30px" }}
                  >
                    <div
                      className="testimonial-1 wow fadeInUp"
                      data-wow-delay="0.3s"
                      style={{
                        visibility: "visible",
                        animationDelay: "0.3s",
                      }}
                    >
                      <div className="dz-media">
                        <img src="/images/testimonial/pic1.jpg" alt="" />
                      </div>
                      <div className="testimonial-detail">
                        <div className="testimonial-text">
                          <p>
                            There are many variations of passages of Lorem Ipsum
                            available, but the majority have suffered alteration
                            in some form, by injected humour, or randomised
                            words which don't look even slightly believable. If
                            you are going to use a passage of Lorem Ipsum, you
                            need to be sure there isn't anything embarrassing
                            hidden in the middle of text.
                          </p>
                        </div>
                        <div className="testimonial-contant">
                          <div className="testimonial-info">
                            <h5 className="testimonial-name">Carry Mint</h5>
                            <span className="testimonial-position">
                              Food Expert
                            </span>
                          </div>
                          <svg
                            className="quote"
                            width="100"
                            height="72"
                            viewBox="0 0 100 72"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M22.1771 0.706055C9.94877 0.706055 0.00158691 10.6532 0.00158691 22.8817C0.00158691 34.6782 9.25909 44.3537 20.8908 45.0221C21.0922 47.1965 20.9411 53.1154 15.2694 61.349C14.8407 61.9701 14.9185 62.8078 15.451 63.3403C17.7719 65.6612 19.2063 67.1229 20.2102 68.1453C21.5241 69.482 22.1238 70.0923 23.0011 70.8889C23.2986 71.1589 23.6739 71.2946 24.051 71.2946C24.4171 71.2946 24.7817 71.1665 25.0763 70.9117C34.9594 62.3118 45.9382 44.5429 44.3497 22.7687C43.4189 9.98496 34.0942 0.706055 22.1771 0.706055ZM24.0661 67.5975C23.6405 67.1779 23.1552 66.6835 22.4396 65.9556C21.5699 65.0692 20.3766 63.8545 18.5669 62.0387C25.4502 51.4323 24.15 43.8778 23.581 42.7943C23.3108 42.2801 22.7569 41.9337 22.1771 41.9337C11.673 41.9337 3.12659 33.3873 3.12659 22.8817C3.12659 12.3775 11.673 3.83105 22.1771 3.83105C32.4097 3.83105 40.4236 11.8907 41.2338 22.9945C43.0191 47.485 28.4638 63.3861 24.0661 67.5975Z"
                              fill="var(--primary)"
                            ></path>
                            <path
                              d="M99.8444 22.7687C98.9105 9.98652 89.5844 0.706055 77.6703 0.706055C65.4419 0.706055 55.4932 10.6532 55.4932 22.8817C55.4932 34.6782 64.7522 44.3537 76.3855 45.0221C76.5869 47.195 76.4342 53.1107 70.7611 61.349C70.3324 61.9701 70.4102 62.8078 70.9427 63.3403C73.2544 65.652 74.6857 67.1107 75.6897 68.1315C77.0096 69.4773 77.6124 70.0907 78.4943 70.8903C78.7917 71.1589 79.1686 71.2946 79.5441 71.2946C79.9103 71.2946 80.275 71.1665 80.5694 70.9101C90.4525 62.3103 101.431 44.5415 99.8444 22.7687ZM79.5592 67.5975C79.1305 67.1748 78.6408 66.6775 77.9189 65.942C77.0492 65.0568 75.8607 63.8454 74.0585 62.0387C80.9417 51.4307 79.6433 43.8778 79.0757 42.7943C78.8055 42.2817 78.2502 41.9337 77.6703 41.9337C67.1646 41.9337 58.6182 33.3873 58.6182 22.8817C58.6182 12.3775 67.1646 3.83105 77.6703 3.83105C87.9013 3.83105 95.9167 11.8907 96.7285 22.9961C98.5122 47.4834 83.9569 63.3861 79.5592 67.5975Z"
                              fill="var(--primary)"
                            ></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="swiper-slide swiper-slide-duplicate-next"
                    data-swiper-slide-index="0"
                    role="group"
                    aria-label="1 / 3"
                    style={{ width: "1220px", marginRight: "30px" }}
                  >
                    <div
                      className="testimonial-1 wow fadeInUp"
                      data-wow-delay="0.1s"
                      style={{
                        visibility: "visible",
                        animationDelay: "0.1s",
                        animationName: "fadeInUp",
                      }}
                    >
                      <div className="dz-media">
                        <img src="/images/testimonial/pic1.jpg" alt="" />
                      </div>
                      <div className="testimonial-detail">
                        <div className="testimonial-text">
                          <p>
                            There are many variations of passages of Lorem Ipsum
                            available, but the majority have suffered alteration
                            in some form, by injected humour, or randomised
                            words which don't look even slightly believable. If
                            you are going to use a passage of Lorem Ipsum, you
                            need to be sure there isn't anything embarrassing
                            hidden in the middle of text.
                          </p>
                        </div>
                        <div className="testimonial-contant">
                          <div className="testimonial-info">
                            <h5 className="testimonial-name">Carry Mint</h5>
                            <span className="testimonial-position">
                              Food Expert
                            </span>
                          </div>
                          <svg
                            className="quote"
                            width="100"
                            height="72"
                            viewBox="0 0 100 72"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M22.1771 0.706055C9.94877 0.706055 0.00158691 10.6532 0.00158691 22.8817C0.00158691 34.6782 9.25909 44.3537 20.8908 45.0221C21.0922 47.1965 20.9411 53.1154 15.2694 61.349C14.8407 61.9701 14.9185 62.8078 15.451 63.3403C17.7719 65.6612 19.2063 67.1229 20.2102 68.1453C21.5241 69.482 22.1238 70.0923 23.0011 70.8889C23.2986 71.1589 23.6739 71.2946 24.051 71.2946C24.4171 71.2946 24.7817 71.1665 25.0763 70.9117C34.9594 62.3118 45.9382 44.5429 44.3497 22.7687C43.4189 9.98496 34.0942 0.706055 22.1771 0.706055ZM24.0661 67.5975C23.6405 67.1779 23.1552 66.6835 22.4396 65.9556C21.5699 65.0692 20.3766 63.8545 18.5669 62.0387C25.4502 51.4323 24.15 43.8778 23.581 42.7943C23.3108 42.2801 22.7569 41.9337 22.1771 41.9337C11.673 41.9337 3.12659 33.3873 3.12659 22.8817C3.12659 12.3775 11.673 3.83105 22.1771 3.83105C32.4097 3.83105 40.4236 11.8907 41.2338 22.9945C43.0191 47.485 28.4638 63.3861 24.0661 67.5975Z"
                              fill="var(--primary)"
                            ></path>
                            <path
                              d="M99.8444 22.7687C98.9105 9.98652 89.5844 0.706055 77.6703 0.706055C65.4419 0.706055 55.4932 10.6532 55.4932 22.8817C55.4932 34.6782 64.7522 44.3537 76.3855 45.0221C76.5869 47.195 76.4342 53.1107 70.7611 61.349C70.3324 61.9701 70.4102 62.8078 70.9427 63.3403C73.2544 65.652 74.6857 67.1107 75.6897 68.1315C77.0096 69.4773 77.6124 70.0907 78.4943 70.8903C78.7917 71.1589 79.1686 71.2946 79.5441 71.2946C79.9103 71.2946 80.275 71.1665 80.5694 70.9101C90.4525 62.3103 101.431 44.5415 99.8444 22.7687ZM79.5592 67.5975C79.1305 67.1748 78.6408 66.6775 77.9189 65.942C77.0492 65.0568 75.8607 63.8454 74.0585 62.0387C80.9417 51.4307 79.6433 43.8778 79.0757 42.7943C78.8055 42.2817 78.2502 41.9337 77.6703 41.9337C67.1646 41.9337 58.6182 33.3873 58.6182 22.8817C58.6182 12.3775 67.1646 3.83105 77.6703 3.83105C87.9013 3.83105 95.9167 11.8907 96.7285 22.9961C98.5122 47.4834 83.9569 63.3861 79.5592 67.5975Z"
                              fill="var(--primary)"
                            ></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="swiper-slide swiper-slide-prev"
                    data-swiper-slide-index="1"
                    role="group"
                    aria-label="2 / 3"
                    style={{ width: "1220px", marginRight: "30px" }}
                  >
                    <div
                      className="testimonial-1 wow fadeInUp"
                      data-wow-delay="0.2s"
                      style={{
                        visibility: "visible",
                        animationDelay: "0.2s",
                        animationName: "fadeInUp",
                      }}
                    >
                      <div className="dz-media">
                        <img src="/images/testimonial/pic2.jpg" alt="" />
                      </div>
                      <div className="testimonial-detail">
                        <div className="testimonial-text">
                          <p>
                            There are many variations of passages of Lorem Ipsum
                            available, but the majority have suffered alteration
                            in some form, by injected humour, or randomised
                            words which don't look even slightly believable. If
                            you are going to use a passage of Lorem Ipsum, you
                            need to be sure there isn't anything embarrassing
                            hidden in the middle of text.
                          </p>
                        </div>
                        <div className="testimonial-contant">
                          <div className="testimonial-info">
                            <h5 className="testimonial-name">Carry Mint</h5>
                            <span className="testimonial-position">
                              Food Expert
                            </span>
                          </div>
                          <svg
                            className="quote"
                            width="100"
                            height="72"
                            viewBox="0 0 100 72"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M22.1771 0.706055C9.94877 0.706055 0.00158691 10.6532 0.00158691 22.8817C0.00158691 34.6782 9.25909 44.3537 20.8908 45.0221C21.0922 47.1965 20.9411 53.1154 15.2694 61.349C14.8407 61.9701 14.9185 62.8078 15.451 63.3403C17.7719 65.6612 19.2063 67.1229 20.2102 68.1453C21.5241 69.482 22.1238 70.0923 23.0011 70.8889C23.2986 71.1589 23.6739 71.2946 24.051 71.2946C24.4171 71.2946 24.7817 71.1665 25.0763 70.9117C34.9594 62.3118 45.9382 44.5429 44.3497 22.7687C43.4189 9.98496 34.0942 0.706055 22.1771 0.706055ZM24.0661 67.5975C23.6405 67.1779 23.1552 66.6835 22.4396 65.9556C21.5699 65.0692 20.3766 63.8545 18.5669 62.0387C25.4502 51.4323 24.15 43.8778 23.581 42.7943C23.3108 42.2801 22.7569 41.9337 22.1771 41.9337C11.673 41.9337 3.12659 33.3873 3.12659 22.8817C3.12659 12.3775 11.673 3.83105 22.1771 3.83105C32.4097 3.83105 40.4236 11.8907 41.2338 22.9945C43.0191 47.485 28.4638 63.3861 24.0661 67.5975Z"
                              fill="var(--primary)"
                            ></path>
                            <path
                              d="M99.8444 22.7687C98.9105 9.98652 89.5844 0.706055 77.6703 0.706055C65.4419 0.706055 55.4932 10.6532 55.4932 22.8817C55.4932 34.6782 64.7522 44.3537 76.3855 45.0221C76.5869 47.195 76.4342 53.1107 70.7611 61.349C70.3324 61.9701 70.4102 62.8078 70.9427 63.3403C73.2544 65.652 74.6857 67.1107 75.6897 68.1315C77.0096 69.4773 77.6124 70.0907 78.4943 70.8903C78.7917 71.1589 79.1686 71.2946 79.5441 71.2946C79.9103 71.2946 80.275 71.1665 80.5694 70.9101C90.4525 62.3103 101.431 44.5415 99.8444 22.7687ZM79.5592 67.5975C79.1305 67.1748 78.6408 66.6775 77.9189 65.942C77.0492 65.0568 75.8607 63.8454 74.0585 62.0387C80.9417 51.4307 79.6433 43.8778 79.0757 42.7943C78.8055 42.2817 78.2502 41.9337 77.6703 41.9337C67.1646 41.9337 58.6182 33.3873 58.6182 22.8817C58.6182 12.3775 67.1646 3.83105 77.6703 3.83105C87.9013 3.83105 95.9167 11.8907 96.7285 22.9961C98.5122 47.4834 83.9569 63.3861 79.5592 67.5975Z"
                              fill="var(--primary)"
                            ></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="swiper-slide swiper-slide-visible swiper-slide-active"
                    data-swiper-slide-index="2"
                    role="group"
                    aria-label="3 / 3"
                    style={{ width: "1220px", marginRight: "30px" }}
                  >
                    <div
                      className="testimonial-1 wow fadeInUp"
                      data-wow-delay="0.3s"
                      style={{
                        visibility: "visible",
                        animationDelay: "0.3s",
                        animationName: "fadeInUp",
                      }}
                    >
                      <div className="dz-media">
                        <img src="/images/testimonial/pic1.jpg" alt="" />
                      </div>
                      <div className="testimonial-detail">
                        <div className="testimonial-text">
                          <p>
                            There are many variations of passages of Lorem Ipsum
                            available, but the majority have suffered alteration
                            in some form, by injected humour, or randomised
                            words which don't look even slightly believable. If
                            you are going to use a passage of Lorem Ipsum, you
                            need to be sure there isn't anything embarrassing
                            hidden in the middle of text.
                          </p>
                        </div>
                        <div className="testimonial-contant">
                          <div className="testimonial-info">
                            <h5 className="testimonial-name">Carry Mint</h5>
                            <span className="testimonial-position">
                              Food Expert
                            </span>
                          </div>
                          <svg
                            className="quote"
                            width="100"
                            height="72"
                            viewBox="0 0 100 72"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M22.1771 0.706055C9.94877 0.706055 0.00158691 10.6532 0.00158691 22.8817C0.00158691 34.6782 9.25909 44.3537 20.8908 45.0221C21.0922 47.1965 20.9411 53.1154 15.2694 61.349C14.8407 61.9701 14.9185 62.8078 15.451 63.3403C17.7719 65.6612 19.2063 67.1229 20.2102 68.1453C21.5241 69.482 22.1238 70.0923 23.0011 70.8889C23.2986 71.1589 23.6739 71.2946 24.051 71.2946C24.4171 71.2946 24.7817 71.1665 25.0763 70.9117C34.9594 62.3118 45.9382 44.5429 44.3497 22.7687C43.4189 9.98496 34.0942 0.706055 22.1771 0.706055ZM24.0661 67.5975C23.6405 67.1779 23.1552 66.6835 22.4396 65.9556C21.5699 65.0692 20.3766 63.8545 18.5669 62.0387C25.4502 51.4323 24.15 43.8778 23.581 42.7943C23.3108 42.2801 22.7569 41.9337 22.1771 41.9337C11.673 41.9337 3.12659 33.3873 3.12659 22.8817C3.12659 12.3775 11.673 3.83105 22.1771 3.83105C32.4097 3.83105 40.4236 11.8907 41.2338 22.9945C43.0191 47.485 28.4638 63.3861 24.0661 67.5975Z"
                              fill="var(--primary)"
                            ></path>
                            <path
                              d="M99.8444 22.7687C98.9105 9.98652 89.5844 0.706055 77.6703 0.706055C65.4419 0.706055 55.4932 10.6532 55.4932 22.8817C55.4932 34.6782 64.7522 44.3537 76.3855 45.0221C76.5869 47.195 76.4342 53.1107 70.7611 61.349C70.3324 61.9701 70.4102 62.8078 70.9427 63.3403C73.2544 65.652 74.6857 67.1107 75.6897 68.1315C77.0096 69.4773 77.6124 70.0907 78.4943 70.8903C78.7917 71.1589 79.1686 71.2946 79.5441 71.2946C79.9103 71.2946 80.275 71.1665 80.5694 70.9101C90.4525 62.3103 101.431 44.5415 99.8444 22.7687ZM79.5592 67.5975C79.1305 67.1748 78.6408 66.6775 77.9189 65.942C77.0492 65.0568 75.8607 63.8454 74.0585 62.0387C80.9417 51.4307 79.6433 43.8778 79.0757 42.7943C78.8055 42.2817 78.2502 41.9337 77.6703 41.9337C67.1646 41.9337 58.6182 33.3873 58.6182 22.8817C58.6182 12.3775 67.1646 3.83105 77.6703 3.83105C87.9013 3.83105 95.9167 11.8907 96.7285 22.9961C98.5122 47.4834 83.9569 63.3861 79.5592 67.5975Z"
                              fill="var(--primary)"
                            ></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="swiper-slide swiper-slide-duplicate swiper-slide-next"
                    data-swiper-slide-index="0"
                    role="group"
                    aria-label="1 / 3"
                    style={{ width: "1220px", marginRight: "30px" }}
                  >
                    <div
                      className="testimonial-1 wow fadeInUp"
                      data-wow-delay="0.1s"
                      style={{ visibility: "visible", animationDelay: "0.1s" }}
                    >
                      <div className="dz-media">
                        <img src="/images/testimonial/pic1.jpg" alt="" />
                      </div>
                      <div className="testimonial-detail">
                        <div className="testimonial-text">
                          <p>
                            There are many variations of passages of Lorem Ipsum
                            available, but the majority have suffered alteration
                            in some form, by injected humour, or randomised
                            words which don't look even slightly believable. If
                            you are going to use a passage of Lorem Ipsum, you
                            need to be sure there isn't anything embarrassing
                            hidden in the middle of text.
                          </p>
                        </div>
                        <div className="testimonial-contant">
                          <div className="testimonial-info">
                            <h5 className="testimonial-name">Carry Mint</h5>
                            <span className="testimonial-position">
                              Food Expert
                            </span>
                          </div>
                          <svg
                            className="quote"
                            width="100"
                            height="72"
                            viewBox="0 0 100 72"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M22.1771 0.706055C9.94877 0.706055 0.00158691 10.6532 0.00158691 22.8817C0.00158691 34.6782 9.25909 44.3537 20.8908 45.0221C21.0922 47.1965 20.9411 53.1154 15.2694 61.349C14.8407 61.9701 14.9185 62.8078 15.451 63.3403C17.7719 65.6612 19.2063 67.1229 20.2102 68.1453C21.5241 69.482 22.1238 70.0923 23.0011 70.8889C23.2986 71.1589 23.6739 71.2946 24.051 71.2946C24.4171 71.2946 24.7817 71.1665 25.0763 70.9117C34.9594 62.3118 45.9382 44.5429 44.3497 22.7687C43.4189 9.98496 34.0942 0.706055 22.1771 0.706055ZM24.0661 67.5975C23.6405 67.1779 23.1552 66.6835 22.4396 65.9556C21.5699 65.0692 20.3766 63.8545 18.5669 62.0387C25.4502 51.4323 24.15 43.8778 23.581 42.7943C23.3108 42.2801 22.7569 41.9337 22.1771 41.9337C11.673 41.9337 3.12659 33.3873 3.12659 22.8817C3.12659 12.3775 11.673 3.83105 22.1771 3.83105C32.4097 3.83105 40.4236 11.8907 41.2338 22.9945C43.0191 47.485 28.4638 63.3861 24.0661 67.5975Z"
                              fill="var(--primary)"
                            ></path>
                            <path
                              d="M99.8444 22.7687C98.9105 9.98652 89.5844 0.706055 77.6703 0.706055C65.4419 0.706055 55.4932 10.6532 55.4932 22.8817C55.4932 34.6782 64.7522 44.3537 76.3855 45.0221C76.5869 47.195 76.4342 53.1107 70.7611 61.349C70.3324 61.9701 70.4102 62.8078 70.9427 63.3403C73.2544 65.652 74.6857 67.1107 75.6897 68.1315C77.0096 69.4773 77.6124 70.0907 78.4943 70.8903C78.7917 71.1589 79.1686 71.2946 79.5441 71.2946C79.9103 71.2946 80.275 71.1665 80.5694 70.9101C90.4525 62.3103 101.431 44.5415 99.8444 22.7687ZM79.5592 67.5975C79.1305 67.1748 78.6408 66.6775 77.9189 65.942C77.0492 65.0568 75.8607 63.8454 74.0585 62.0387C80.9417 51.4307 79.6433 43.8778 79.0757 42.7943C78.8055 42.2817 78.2502 41.9337 77.6703 41.9337C67.1646 41.9337 58.6182 33.3873 58.6182 22.8817C58.6182 12.3775 67.1646 3.83105 77.6703 3.83105C87.9013 3.83105 95.9167 11.8907 96.7285 22.9961C98.5122 47.4834 83.9569 63.3861 79.5592 67.5975Z"
                              fill="var(--primary)"
                            ></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <span
                  className="swiper-notification"
                  aria-live="assertive"
                  aria-atomic="true"
                ></span>
              </div>
              <div className="swiper-btn">
                <div className="testi-swiper-prev btn-prev style-1">
                  <i className="fa-solid fa-arrow-left-long"></i>
                </div>
                <div
                  className="testi-swiper-next btn-next style-1"
                  tabindex="0"
                  role="button"
                  aria-label="Previous slide"
                  aria-controls="swiper-wrapper-e5848612e1025f81f"
                >
                  <i className="fa-solid fa-arrow-right-long"></i>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
