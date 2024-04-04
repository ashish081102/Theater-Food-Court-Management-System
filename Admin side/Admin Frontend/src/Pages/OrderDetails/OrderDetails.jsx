import React, { useEffect, useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { AiTwotoneDelete } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";
import AddCategoryModal from "../../Components/AddCategory/AddCategoryModal";
import EditCategoryModal from "../../Components/AddCategory/EditCategoryModal";
// import Data from "../../Data/FoodData.json";
import Pagination from "../../Components/Pagination/Pagination";
import axios from "axios";
import { ShimmerTable, ShimmerTitle } from "react-shimmer-effects";
import { useNavigate } from "react-router-dom";
import NoProductFound from "../../Components/NoProductFound ";

const OrderDetails = () => {
  const [orderData, setOrderData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(7);
  const [filterData, setFilterData] = useState([]);
  //getting current page posts
  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentData = filterData.slice(indexOfFirstPost, indexOfLastPost);

  const [searchText, setSearchText] = useState("");

  const admin_id = JSON.parse(localStorage.getItem("admin_id"));
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/admin/getAllOrder")
      .then((response) => {
        setOrderData(response.data);
        setFilterData(response.data)
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
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
  
    <div className="fooditems">
      <div className="fooditems-top">
        <div className="fooditems-top-left">
          <h1>Order Details</h1>
        </div>

        <div className="fooditems-top-right search-area">
          <input
            type="text"
            placeholder="Search here.."
            value={searchText}
            onChange={(event) => {
              setSearchText(event.target.value);
              setFilterData(
                orderData.filter((data) =>
                  data.dish_name
                    .toLowerCase()
                    .includes(event.target.value.toLowerCase())
                )
              );
              setCurrentPage(1);
            }}
          />
          <span className="search-icon">
            <IoIosSearch />
          </span>
        </div>
      </div>

      {filterData.length <= 0 ? (
        <NoProductFound title="Category" description={"category"} />
      ) : (
        <>
          <div className="fooditems-bottom table">
            <table>
              <thead>
                <tr>
                  <th>Order Id</th>
                  <th>Dish   Name</th> 
                  <th>Order Price</th>
                  <th>Order Date</th>
                </tr>
              </thead>
              <tbody>
                {currentData &&
                  currentData.map((item) => {
                    return (
                      <tr key={item.order_id}>
                        <td>{item.order_id}</td>
                        <td>{item.dish_name}</td> 
                        <td>{parseInt(item.order_price).toFixed(2)}</td>
                        <td>{item.order_date}</td>

                      
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
          <Pagination
            totalPosts={filterData.length}
            postsPerPage={postPerPage}
            paginate={paginate}
            currentPage={currentPage}
          />
        </>
      )}
    </div>
  );
};

export default OrderDetails;
