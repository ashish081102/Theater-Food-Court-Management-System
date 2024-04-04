import React, { useEffect } from "react";
import Banner from "../../Components/Banner/Banner";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./Cart.css";
import "./animate.css";
import "./bootstrap-select.min.css";
import WishListTable from "../../Components/Wishlist Table/WishListTable";
const WishList = () => {

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
    if (user_id) {
      verifyUser();
    } else {
      navigate("/login");
    }
  }, []);
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
