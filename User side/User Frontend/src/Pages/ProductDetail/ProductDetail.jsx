import React from "react";
import "./ProductDetail.css";
import { useNavigate, useParams } from "react-router-dom";
import SHOP_DATA from "../../data/FoodList.json";
import Banner from "../../Components/Banner/Banner";
import Header from "../../Components/Header/Header";
import { FaCartShopping } from "react-icons/fa6";

const ProductDetail = () => {
  const param = useParams();
  const navigate = useNavigate();
  const productId = param.productId;
  const currentData = SHOP_DATA.find((data) => data.id == productId);

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
      <Header />
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
              <button
                onClick={() => {
                  console.log("Current Data : ", currentData);
                }}
              >
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
