import { useState, useEffect } from "react";

const WishListTable = () => {
  const [cartItem, setCartItem] = useState();
  useEffect(() => {});

  return (
    <table className="table check-tbl table-responsive-md">
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
          <td className="product-item-img">
            <img src="assets/images/product/pic1.jpg" alt="" />
          </td>
          <td className="product-item-name text-secondary">Cheese Burger</td>
          <td className="product-item-price">$35.00</td>
          <td className="product-item-close">
            <a href="javascript:void(0);" className="fa fa-close"></a>
          </td>
        </tr>
      </tbody>
    </table>
  );
};
export default WishListTable;
