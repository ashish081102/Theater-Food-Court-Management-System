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
      <div className="page-wraper">
        <div className="page-content">
          <div className="content-inner">
            <div className="container">
              <div className="row">
                <div className="col-lg-12 m-b30">
                  <div className="table-responsive">
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
