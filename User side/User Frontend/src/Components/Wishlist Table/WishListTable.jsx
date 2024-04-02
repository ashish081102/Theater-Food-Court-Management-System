import { useState, useEffect } from "react";
import axios from "axios";
const WishListTable = () => {
  const [wishlistItem, setWishList] = useState([]);
  useEffect(() => {
    async function getWishlistDetail() {
      const user_id = 69;
      await axios
        .get("http://localhost:8080/api/admin/getWishlistDetail/" + user_id)
        .then((res) => {
          setWishList(res.data);
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    getWishlistDetail();
  }, []);

  const deleteWishlist = async (wishlist_Id) => {
    const confirmData = confirm("You want to delete the item");
    if (confirmData) {
      await axios
        .delete("http://localhost:8080/api/admin/delteWishlist/" + wishlist_Id)
        .then((res) => {
          const updatedCart = wishlistItem.filter(
            (value) => value.wishlist_id != wishlist_Id
          );
          setWishList(updatedCart);
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
          <th>Unit Price</th>
          <th>delete</th>
        </tr>
      </thead>
      <tbody>
        {wishlistItem.length > 0 &&
          wishlistItem[0] != undefined &&
          wishlistItem.map((value) => (
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
              <td class="product-item-price">{value.dish_price}</td>
              <td class="product-item-close">
                <a
                  href="javascript:void(0);"
                  class="fa fa-close"
                  onClick={() => deleteWishlist(value.wishlist_id)}
                ></a>
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};
export default WishListTable;
