import { useState, useEffect } from "react";
import axios from "axios";
import "./Cart.css";
import "./animate.css";
import "./bootstrap-select.min.css";
import Banner from "../../Components/Banner/Banner";
const Order = () => {
  const [orderList, setOrderList] = useState([]);
  const [orderPrice, setOrderPrice] = useState();
  const [orderId, setOrderId] = useState();
  useEffect(() => {
    async function getOrderDetail() {
const user_id = JSON.parse(localStorage.getItem("user_id"));      await axios
        .get("http://localhost:8080/api/admin/getUserOrder/" + user_id)
        .then((res) => {
          setOrderList(res.data);
          console.log(res.data);
          setOrderId(res.data[0].ordermaster_id);
          setOrderPrice(res.data[0].total_price);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    getOrderDetail();
  }, []);

  return (
    <>
      <Banner title={"Order-detail"} path={"Order Detail"} />
      <div className="page-wraper">
        <div className="page-content">
          <div className="content-inner">
            <div className="container">
              <div className="row">
                <div className="col-lg-12 m-b30">
                  <div className="table-responsive"></div>
                  <table class="table check-tbl table-responsive-md">
                    <thead>
                      <tr>
                        <th>Dish</th>
                        <th>Dish name</th>
                        <th>Total Price</th>
                      </tr>
                    </thead>
                    <tbody>
                      {orderList.length > 0 &&
                        orderList[0] != undefined &&
                        orderList.map((value) => (
                          <tr>
                            <td class="product-item-img">
                              <img src={value.dish_image} alt="" />
                            </td>
                            <td class="product-item-name text-secondary">
                              {value.dish_name}
                            </td>
                            <td class="product-item-price">
                              {value.order_price}
                            </td>
                          </tr>
                        ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="widget">
                  <h4 className="widget-title" style={{ color: "GREEN" }}>
                    Order Detail
                  </h4>
                  <table className="table table-order check-tbl">
                    <tbody>
                      <tr>
                        <td>Order Id</td>
                        <td>{orderId}</td>
                      </tr>

                      <tr>
                        <td>Order Status</td>
                        <td>Successful</td>
                      </tr>
                      <tr>
                        <td>Total Order</td>
                        <td>Rs. {orderPrice}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Order;
