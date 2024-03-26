import { useState,useEffect } from "react";

const CartTable = () => {
  const [cartItem,setCartItem] = useState();
  useEffect(() => {
        
  });

  return (
    <table className="table check-tbl table-responsive-md">
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
          <td className="product-item-img">
            <img src="assets/images/product/pic1.jpg" alt="" />
          </td>
          <td className="product-item-name text-secondary">Cheese Burger</td>
          <td className="product-item-price">$35.00</td>
          <td className="product-item-quantity">
            <div className="quantity btn-quantity style-1 me-3">
              <div className="input-group bootstrap-touchspin">
                <span
                  className="input-group-addon bootstrap-touchspin-prefix"
                  style={{ display: "none" }}
                ></span>
                <input
                  id="demo_vertical2"
                  type="text"
                  value="1"
                  name="demo_vertical2"
                  className="form-control"
                  style={{ display: "block" }}
                />
                <span
                  className="input-group-addon bootstrap-touchspin-postfix"
                  style={{ display: "none" }}
                ></span>
                <span className="input-group-btn-vertical">
                  <button
                    className="btn btn-default bootstrap-touchspin-up"
                    type="button"
                  >
                    <i className="fa fa-plus"></i>
                  </button>
                  <button
                    className="btn btn-default bootstrap-touchspin-down"
                    type="button"
                  >
                    <i className="fa fa-minus-square"></i>
                  </button>
                </span>
              </div>
            </div>
          </td>
          <td className="product-item-totle">$28.00</td>
          <td className="product-item-close">
            <a href="javascript:void(0);" className="fa fa-close"></a>
          </td>
        </tr>
      </tbody>
    </table>
  );
};
export default CartTable;
