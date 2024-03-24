import React from "react";
import Banner from "../../Components/Banner/Banner";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./Cart.css";
import "./animate.css";
import "./bootstrap-select.min.css";
import WishListTable from "../../Components/Wishlist Table/WishListTable";
const WishList = () => {
  const navigate = useNavigate();
  return (
    <>
      <Banner title={"WishList"} path={"Wish List"} />
      <div class="page-wraper">
        <div class="page-content">
          <div class="content-inner">
            <div class="container">
              <div class="row">
                <div class="col-lg-12 m-b30">
                  <div class="table-responsive">
                    <WishListTable />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default WishList;
