import { useState, useEffect, useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CartTable = () => {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const user_screen = useRef("");
  const user_seat = useRef("");
  const ticket_no = useRef("");

  useEffect(() => {
    async function getCartDetail() {
      const user_id = 69;

      await axios
        .get("http://localhost:8080/api/admin/getCartDetails/" + user_id)
        .then((res) => {
          setCartItems(res.data);
          let totalVal = 0;
          res.data.map((values) => {
            totalVal += values.quantity * values.dish_price;
          });

          setTotalPrice(totalVal);
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    getCartDetail();
  }, []);

  async function changeQuntityPlus(cart_Id) {
    await axios
      .get("http://localhost:8080/api/admin/plusQuntityCart/" + cart_Id)
      .then((res) => {
        const updatedCart = cartItems.map((value) => {
          if (value.cart_id == cart_Id) {
            value.quantity = value.quantity + 1;
            setTotalPrice(totalPrice + value.dish_price);
          }
          return value;
        });
        console.log(updatedCart);
        setCartItems(updatedCart);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  async function changeQuntityMinus(cart_Id, quantity) {
    if (quantity == 1) {
      deleteCartItem(cart_Id);
    } else {
      await axios
        .get("http://localhost:8080/api/admin/minusQuntityCart/" + cart_Id)
        .then((res) => {
          const updatedCart = cartItems.filter((value) => {
            if (value.cart_id == cart_Id) {
              value.quantity = value.quantity - 1;
              setTotalPrice(totalPrice - value.dish_price);
            }
            return value;
          });
          console.log(updatedCart);
          setCartItems(updatedCart);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }
  const paymentHandler = async (data) => {
    const user_id = 69;
    const {
      data: { key },
    } = await axios.get("http://localhost:8080/api/admin/getKey");

    const options = {
      key: key, // Enter the Key ID generated from the Dashboard
      amount: data.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      currency: "INR",
      name: "Devur",
      description: "Test Transaction",
      image:
        "https://cdn4.vectorstock.com/i/1000x1000/88/28/cinema-popcorn-box-concept-background-realistic-vector-21398828.jpg",
      order_id: data.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
      callback_url: `http://localhost:8080/api/admin/paymentVerify/?user_id=${user_id}&total=${totalPrice}`,
      prefill: {
        name: "Ashish Wadhwani",
        email: "ashishwadhani@gmail.com",
        contact: "9000090000",
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#4885ed",
      },
    };

    const razor = new window.Razorpay(options);

    razor.open();
  };
  const checkoutHandler = async () => {
    
    await axios
      .post("http://localhost:8080/api/admin/checkout", { totalPrice })
      .then((res) => {
        console.log(res);
        paymentHandler(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const checkUserTicket = async (event) => {
    event.preventDefault();
    // const user_email = "dscd@gmail.com";
    const userData = {
      user_seat: user_seat.current.value,
      user_screen: user_screen.current.value,
      ticket_no: ticket_no.current.value,
      user_email: "dscd@gmail.com",
    };
    await axios
      .post("http://localhost:8080/api/admin/checkUserTicket", userData)
      .then((res) => {
        console.log("User available");
        // navigate("/checkout");
        checkoutHandler();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const deleteCartItem = async (cart_Id, quantity, price) => {
    const confirmData = confirm("You want to delete the item");
    if (confirmData) {
      await axios
        .delete("http://localhost:8080/api/admin/deleteCart/" + cart_Id)
        .then((res) => {
          const updatedCart = cartItems.filter(
            (value) => value.cart_id != cart_Id
          );

          setTotalPrice(totalPrice - quantity * price);

          setCartItems(updatedCart);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <>
      {" "}
      <div className="row">
        <div className="col-lg-12 m-b30">
          <div className="table-responsive">
            <table class="table check-tbl table-responsive-md">
              <thead>
                <tr>
                  <th>Dish</th>
                  <th>Category name</th>
                  <th>Dish name</th>
                  <th>Quantity</th>
                  <th>Total</th>
                  <th>delete</th>
                </tr>
              </thead>
              <tbody>
                {console.log(totalPrice)}
                {cartItems.length > 0 &&
                  cartItems[0] != undefined &&
                  cartItems.map((value) => (
                    <tr>
                      <td class="product-item-img">
                        <img src={value.dish_image} alt="" />
                      </td>
                      <td class="product-item-name text-secondary">
                        {value.category_name}
                      </td>
                      <td class="product-item-name text-secondary">
                        {value.dish_name}
                      </td>
                      {/* <td class="product-item-price">${value.price}</td> */}
                      <td class="product-item-quantity">
                        <div class="quantity btn-quantity style-1 me-3">
                          <div class="input-group bootstrap-touchspin">
                            <span
                              class="input-group-addon bootstrap-touchspin-prefix"
                              style={{ display: "none" }}
                            ></span>
                            <input
                              id="demo_vertical2"
                              type="text"
                              value={value.quantity}
                              name="demo_vertical2"
                              class="form-control"
                              style={{ display: "block" }}
                            />
                            <span
                              class="input-group-addon bootstrap-touchspin-postfix"
                              style={{ display: "none" }}
                            ></span>
                            <span class="input-group-btn-vertical">
                              <button
                                class="btn btn-default bootstrap-touchspin-up"
                                type="button"
                                onClick={() => changeQuntityPlus(value.cart_id)}
                              >
                                <i class="fa fa-plus"></i>
                              </button>
                              <button
                                class="btn btn-default bootstrap-touchspin-down"
                                type="button"
                                onClick={() =>
                                  changeQuntityMinus(
                                    value.cart_id,
                                    value.quantity
                                  )
                                }
                              >
                                <i class="fa fa-minus"></i>
                              </button>
                            </span>
                          </div>
                        </div>
                      </td>

                      <td class="product-item-totle">
                        {value.dish_price * value.quantity}
                      </td>
                      <td class="product-item-close">
                        <a
                          href="javascript:void(0);"
                          class="fa fa-close"
                          onClick={() =>
                            deleteCartItem(
                              value.cart_id,
                              value.quantity,
                              value.dish_price
                            )
                          }
                        ></a>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="row m-t20">
        <div className="col-lg-6">
          <div className="widget">
            <form className="shop-form">
              <h4 className="widget-title">Enter Seat Details</h4>
              <div className="form-group"></div>
              <div className="row">
                <div className="form-group col-lg-6">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Seat Number"
                    ref={user_seat}
                  />
                </div>
                <div className="form-group col-lg-6">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Screen Number"
                    ref={user_screen}
                  />
                </div>
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Ticket Number"
                  ref={ticket_no}
                />
              </div>
              <div className="form-group">
                <button
                  type="submit"
                  className="btn btn-primary"
                  onClick={checkUserTicket}
                >
                  Check out
                  <span>
                    <i className="fa-solid fa-circle-arrow-right"></i>
                  </span>
                </button>
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
                  <td>₹{totalPrice}</td>
                </tr>

                <tr>
                  <td>Discount 12%</td>
                  <td>₹{((12 / 100) * totalPrice).toFixed(2)} </td>
                </tr>
                <tr>
                  <td>Total</td>
                  <td>₹{(totalPrice - (12 / 100) * totalPrice).toFixed(2)}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};
export default CartTable;
