import React, { useEffect, useState } from "react";
import Banner from "../../Components/Banner/Banner";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./Cart.css";
import "./animate.css";
import "./bootstrap-select.min.css";
import CartTable from "../../Components/Table/CartTable";
const Cart = () => {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState();
  useEffect(() => {
    async function getCartDetail() {
      await axios
        .get("")
        .then((res) => {
          setCartItems(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    getCartDetail();
  });
  return (
    <>
      <Banner title={"Cart"} path={"Cart Detail"} />
      <div className="page-wraper">
        <div className="page-content">
          <div className="content-inner">
            <div className="container">
              <div className="row">
                <div className="col-lg-12 m-b30">
                  <div className="table-responsive">
                    <CartTable cartData={cartItems} />
                  </div>
                </div>
              </div>

              <div className="row m-t20">
                <div className="col-lg-6">
                  <div className="widget">
                    <form className="shop-form">
                      <h4 className="widget-title">Calculate Shipping</h4>
                      <div className="form-group">
                        <div className="dropdown bootstrap-select default-select dropup">
                          <select className="default-select" tabIndex="null">
                            <option selected="">Credit Card Type</option>
                            <option value="1">Another option</option>
                            <option value="2">A option</option>
                            <option value="3">Potato</option>
                          </select>
                          <button
                            type="button"
                            tabIndex="-1"
                            className="btn dropdown-toggle btn-light"
                            data-bs-toggle="dropdown"
                            role="combobox"
                            aria-owns="bs-select-1"
                            aria-haspopup="listbox"
                            aria-expanded="false"
                            title="Another option"
                          >
                            <div className="filter-option">
                              <div className="filter-option-inner">
                                <div className="filter-option-inner-inner">
                                  Another option
                                </div>
                              </div>{" "}
                            </div>
                          </button>
                          <div
                            className="dropdown-menu"
                            style={{
                              maxHeight: "1039.8px",
                              overflow: "hidden",
                              minHeight: "142px",
                            }}
                          >
                            <div
                              className="inner show"
                              role="listbox"
                              id="bs-select-1"
                              tabIndex="-1"
                              aria-activedescendant="bs-select-1-1"
                              style={{
                                maxHeight: "1023.8px",
                                overflow: "hidden auto",
                                minHeight: "126px",
                              }}
                            >
                              <ul
                                className="dropdown-menu inner show"
                                role="presentation"
                                style={{
                                  marginTop: "0px",
                                  marginBottom: "0px",
                                }}
                              >
                                <li className="">
                                  <a
                                    role="option"
                                    className="dropdown-item"
                                    id="bs-select-1-0"
                                    tabIndex="0"
                                    aria-setsize="4"
                                    aria-posinset="1"
                                  >
                                    <span className="text">
                                      Credit Card Type
                                    </span>
                                  </a>
                                </li>
                                <li className="selected active">
                                  <a
                                    role="option"
                                    className="dropdown-item selected active"
                                    id="bs-select-1-1"
                                    tabIndex="0"
                                    aria-setsize="4"
                                    aria-posinset="2"
                                    aria-selected="true"
                                  >
                                    <span className="text">Another option</span>
                                  </a>
                                </li>
                                <li className="">
                                  <a
                                    role="option"
                                    className="dropdown-item"
                                    id="bs-select-1-2"
                                    tabIndex="0"
                                    aria-setsize="4"
                                    aria-posinset="3"
                                  >
                                    <span className="text">A option</span>
                                  </a>
                                </li>
                                <li>
                                  <a
                                    role="option"
                                    className="dropdown-item"
                                    id="bs-select-1-3"
                                    tabIndex="0"
                                    aria-setsize="4"
                                    aria-posinset="4"
                                  >
                                    <span className="text">Potato</span>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="form-group col-lg-6">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Credit Card Number"
                          />
                        </div>
                        <div className="form-group col-lg-6">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Card Verification Number"
                          />
                        </div>
                      </div>
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Coupon Code"
                        />
                      </div>
                      <div className="form-group">
                        <a href="shop-cart.html" className="btn btn-primary">
                          Apply Coupon
                          <span>
                            <i className="fa-solid fa-circle-arrow-right"></i>
                          </span>
                        </a>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="widget">
                    <h4 className="widget-title">Cart Subtotal</h4>
                    <table className="table table-order check-tbl">
                      <tbody>
                        <tr>
                          <td>Order Subtotal</td>
                          <td>$190.96</td>
                        </tr>
                        <tr>
                          <td>Shipping</td>
                          <td>Free Shipping</td>
                        </tr>
                        <tr>
                          <td>Coupon</td>
                          <td>$19.00</td>
                        </tr>
                        <tr>
                          <td>Total</td>
                          <td>$209.96</td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="form-group m-t25">
                      <a href="shop-checkout.html" className="btn btn-primary">
                        Proceed to Checkout
                        <span>
                          <i className="fa-solid fa-circle-arrow-right"></i>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <button
          className="scroltop icon-up"
          type="button"
          style={{ display: "none" }}
        >
          <i className="fas fa-arrow-up"></i>
        </button>
      </div>
    </>
  );
};

export default Cart;
