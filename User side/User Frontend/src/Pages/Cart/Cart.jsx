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

  return (
    <>
      <Banner title={"Cart"} path={"Cart Detail"} />
      <div className="page-wraper">
        <div className="page-content">
          <div className="content-inner">
            <div className="container">
              <CartTable />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
