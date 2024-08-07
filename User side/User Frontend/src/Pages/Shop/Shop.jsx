import React, { useEffect, useState } from "react";
import "./Shop.css";
import Banner from "../../Components/Banner/Banner";
import ShopData from "../../data/FoodList.json";
import SingleProduct from "../../Components/SingleProduct/SingleProduct";
import Header from "../../Components/Header/Header";
import Pagination from "../../Components/Pagination/Pagination";
import { ShimmerTable, ShimmerTitle } from "react-shimmer-effects";
import { IoSearch } from "react-icons/io5";
import axios from "axios";

import { Link, useNavigate, useParams } from "react-router-dom";
const Shop = () => {
  const [shopData, setShopData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(8);

  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const [searchText, setSearchText] = useState("");

  const [filterData, setFilterData] = useState(shopData);

  const currentPosts = filterData.slice(indexOfFirstPost, indexOfLastPost);
  const user_id = JSON.parse(localStorage.getItem("user_id"));
  console.log("From local     ", user_id);
  const navigate = useNavigate();

  const params = useParams();
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
    if (user_id) {
      verifyUser();
    } else {
      navigate("/login");
    }
  }, []);
  useEffect(() => {
    const fetch = async () => {
      setLoading(true);

      //API CALL HERE
      await axios
        .get(
          `http://localhost:8080/api/admin/getDishesByCategory/${params.category_id}`
        )
        .then((response) => {
          let data = response.data;
          const data_array = data.map((d) => {
            return {
              id: d.dish_id,
              image: d.dish_image,
              title: d.dish_name,
              description: d.dish_description,
              rating: d.rating,
              price: d.dish_price,
            };
          });

          setShopData(data_array);
          setFilterData(data_array);
        })
        .catch((error) => {
          console.log(error);
        });

      setLoading(false);
    };

    fetch();
  }, [params]);

  const searchFilter = () => {
    setFilterData(
      shopData.filter((data) =>
        data.title.toLowerCase().includes(searchText.toLowerCase())
      )
    );
    setCurrentPage(1);
  };

  const paginate = (pagenumber) => {
    if (
      pagenumber >= 1 &&
      pagenumber <= Math.ceil(filterData.length / postPerPage) &&
      pagenumber !== currentPage
    ) {
      setCurrentPage(pagenumber);
    }
  };

  return loading ? (
    <div
      style={{
        margin: "20px",
      }}
    >
      <ShimmerTitle line={2} gap={10} variant="primary" />
      <ShimmerTable row={7} col={6} />
    </div>
  ) : (
    <div className="shop">
      <Banner title="Shop Page" path="Shop" />

      <div className="shop__container">
        <div className="shop__container--search">
          <input
            type="text"
            value={searchText}
            placeholder="Search "
            onChange={(e) => {
              setSearchText(e.target.value);

              if (e.target.value == "") {
                setFilterData(shopData);
              }
            }}
          />
          <button onClick={searchFilter}>
            <IoSearch />
          </button>
        </div>
        <div className="shop__container--data">
          {currentPosts.map((data, index) => {
            return (
              <Link key={index} to={`/product/${data.id}`}>
                <SingleProduct  itemInfo={data} />
              </Link>
            );
          })}
        </div>

        <div className="shop__container--pagination">
          <Pagination
            totalPosts={filterData.length}
            postsPerPage={postPerPage}
            paginate={paginate}
            currentPage={currentPage}
          />
        </div>
      </div>
    </div>
  );
};

export default Shop;
