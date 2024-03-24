import { useState, useEffect } from "react";

const WishListTable = () => {
  const [cartItem, setCartItem] = useState();
  useEffect(() => {});

  return (
    <table class="table check-tbl table-responsive-md">
      <thead>
        <tr>
          <th>Dish</th>
          <th>Category name</th>
          <th>Unit Price</th>
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
          <td class="product-item-close">
            <a href="javascript:void(0);" class="fa fa-close"></a>
          </td>
        </tr>
      </tbody>
    </table>
  );
};
export default WishListTable;
