import React, { useEffect, useState } from "react";
import "./Shop.css";
import Banner from "../../Components/Banner/Banner";
import ShopData from "../../data/FoodList.json";
import SingleProduct from "../../Components/SingleProduct/SingleProduct";
import Header from "../../Components/Header/Header";
import Pagination from "../../Components/Pagination/Pagination";
import { ShimmerTable, ShimmerTitle } from "react-shimmer-effects";
import axios from "axios";
import { Link } from "react-router-dom";
const Shop = () => {
  const [shopData, setShopData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(8);

  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;

  const [filterData, setFilterData] = useState(shopData);

  const currentPosts = filterData.slice(indexOfFirstPost, indexOfLastPost);

  useEffect(() => {
    const fetch = async () => {
      setLoading(true);

      setShopData(ShopData);

      //API CALL HERE

      // const response = await axios.get(
      //   "../../data/FoodList.json"
      // );
      // console.log("First time load", response.data);
      // const data = response.data;

      // merging food with its correspondoing category name

      // const mergedData = data.map((item) => {
      //   return { ...item, category: item.category.category_name };
      // });
      // console.log("Merged ", mergedData);
      // setFoodData(mergedData);

      setFilterData(ShopData);
      setLoading(false);
    };

    fetch();
  }, []);

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
      <Header />
      <Banner title="Shop Page" path="Shop" />

      <div className="shop__container">
        <div className="shop__container--data">
          {currentPosts.map((data, index) => {
            return (
              <Link to={`/product/${data.id}`}>
                <SingleProduct key={index} itemInfo={data} />
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
