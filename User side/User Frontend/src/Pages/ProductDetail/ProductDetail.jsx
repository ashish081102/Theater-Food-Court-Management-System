import React, { useEffect, useState } from "react";
import "./ProductDetail.css";
import { useNavigate, useParams } from "react-router-dom";
import SHOP_DATA from "../../data/FoodList.json";
import Banner from "../../Components/Banner/Banner";
import { FaCartShopping } from "react-icons/fa6";
import axios from "axios";

const ProductDetail = () => {
  const param = useParams();
  const productId = param.productId;

  const [currentData, setCurrentData] = useState({});

  const user_id = JSON.parse(localStorage.getItem("user_id"));
  console.log("From local     ", user_id);
  const navigate = useNavigate();
  useEffect(() => {
    async function verifyUser() {
      await axios
        .post(
          "http://localhost:8080/api/admin/checkUser",
          {
            userid: user_id,
          },
          {
            withCredentials: true,
          }
        )
        .then((response) => {
          console.log("Succcseee");
        })
        .catch((err) => {
          navigate("/login");
          console.log(err);
        });
    }
    const getOneDish = async () => {
      await axios
        .get(`http://localhost:8080/api/admin/Dishes/${productId}`)
        .then((response) => {
          const d = response.data;
          const data = {
            id: d.dish_id,
            image: d.dish_image,
            title: d.dish_name,
            description: d.dish_description,
            rating: d.rating,
            price: d.dish_price,
          };

          setCurrentData(data);

          console.log("CCCCCCCCCCCCCCCCCCCCCC : ", currentData);
        })
        .catch((error) => {
          console.log(error);
        });
    };

    if (user_id) {
      verifyUser();
    } else {
      navigate("/login");
    }
    getOneDish();
  }, []);

  const addCartDetailsApi = async (data) => {
    console.log("DDDDDDAAAAAAAAAAAAAATTTTTTTTTTTTTAAAAAAAAAAAAAAAAAA", data);

    await axios
      .post("http://localhost:8080/api/admin/add", data)
      .then((response) => {
        navigate("/cart-detail");
      });
  };

  return !currentData ? (
    <>
      <h1>Dont Change Url Please!</h1>
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        Go To Home
      </button>
    </>
  ) : (
    <div className="product__details">
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

                  const data = {
                    user_id: user_id.user_id,
                    dish_id: currentData.id,
                    quantity: 1,
                  };
                  // call the db api to add the details
                  addCartDetailsApi(data);
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
