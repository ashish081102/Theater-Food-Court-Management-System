import { useState, useEffect } from "react";
import axios from "axios";
const CartTable = () => {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
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
                <img src="assets/images/product/pic1.jpg" alt="" />
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
                          changeQuntityMinus(value.cart_id, value.quantity)
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
  );
};
export default CartTable;
