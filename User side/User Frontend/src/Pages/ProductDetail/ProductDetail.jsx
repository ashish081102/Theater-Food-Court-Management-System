import React from "react";
import "./ProductDetail.css";
import { useNavigate, useParams } from "react-router-dom";
import SHOP_DATA from "../../data/FoodList.json";
import Banner from "../../Components/Banner/Banner";
import Header from "../../Components/Header/Header";
import { FaCartShopping } from "react-icons/fa6";
// import { Link, useNavigate } from "react-router-dom";
const ProductDetail = () => {
  const navigate = useNavigate();
  const param = useParams();

  const productId = param.productId;
  const currentData = SHOP_DATA.find((data) => data.id == productId);
  async function addToCart(cartItem) {
    console.log(cartItem);
    // await axios
    //   .post("http://localhost:8080/api/admin/addCart/" + cartItem)
    //   .then((res) => {
    //     navigate("/cart-detail");
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  }
  return !currentData ? (
    <>
      <h1>Dont Change Url Please!</h1>
      <button
        onClick={() => {
          navigate("/shop");
        }}
      >
        Go To Shop
      </button>
    </>
  ) : (
    <div className="product__details">
      {/* <Header /> */}
      <Banner title={"Product Detail"} path={"Product Detail"} />

      <div className="product__details__row">
        <div className="pd--container">
          <div className="pd--left">
            <img src={currentData.image} height={500} alt={currentData.title} />
          </div>
          <div className="pd--right">
            <h1>{currentData.title}</h1>
            <div className="pd__rating">
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
              <span>4.0</span>
            </div>

            <div className="pd__description">{currentData.description}</div>

            <div className="pd__price">
              <p>
                $ {currentData.price}
                <span>$ {currentData.price * 8 - 12}</span>
              </p>
              <button onClick={() => addToCart(currentData)}>
                Add To Cart <FaCartShopping />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
