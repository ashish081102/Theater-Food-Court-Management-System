import { useState,useEffect } from "react";

const CartTable = () => {
  const [cartItem,setCartItem] = useState();
  useEffect(() => {
        
  });

  return (
    <table class="table check-tbl table-responsive-md">
      <thead>
        <tr>
          <th>Dish</th>
          <th>Category name</th>
          <th>Unit Price</th>
          <th>Quantity</th>
          <th>Total</th>
          <th>delete</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="product-item-img">
            <img src="assets/images/product/pic1.jpg" alt="" />
          </td>
          <td class="product-item-name text-secondary">Cheese Burger</td>
          <td class="product-item-price">$35.00</td>
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
                  value="1"
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
                  >
                    <i class="fa fa-plus"></i>
                  </button>
                  <button
                    class="btn btn-default bootstrap-touchspin-down"
                    type="button"
                  >
                    <i class="fa fa-minus-square"></i>
                  </button>
                </span>
              </div>
            </div>
          </td>
          <td class="product-item-totle">$28.00</td>
          <td class="product-item-close">
            <a href="javascript:void(0);" class="fa fa-close"></a>
          </td>
        </tr>
      </tbody>
    </table>
  );
};
export default CartTable;
