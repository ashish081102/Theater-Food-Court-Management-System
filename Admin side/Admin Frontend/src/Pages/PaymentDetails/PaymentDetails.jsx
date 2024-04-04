import React, { useEffect, useState } from "react";
import { IoIosSearch } from "react-icons/io";  
import Pagination from "../../Components/Pagination/Pagination";
import axios from "axios";
import { ShimmerTable, ShimmerTitle } from "react-shimmer-effects";
import { useNavigate } from "react-router-dom";
import NoProductFound from "../../Components/NoProductFound ";

const PaymentDetails = () => {
  const [transactions, setTransactions] = useState([]);
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
      .get("http://localhost:8080/api/admin/getOrderMaster")
      .then((response) => {
        setTransactions(response.data);
        setFilterData(response.data);
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
                transactions.filter((data) =>
                  data.user_name
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
        <NoProductFound title="Transaction" description={"transaction"} />
      ) : (
        <>
          <div className="fooditems-bottom table">
            <table>
              <thead>
                <tr>
                  <th>Transaction Id</th>
                  <th>User Name</th>
                  <th>Order Price</th> 
                </tr>
              </thead>
              <tbody>
                {currentData &&
                  currentData.map((item) => {
                    return (
                      <tr key={item.ordermaster_id}>
                        <td>{item.ordermaster_id}</td>
                        <td>{item.user_name}</td>
                        <td>{parseInt(item.total_price).toFixed(2)}</td> 
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

export default PaymentDetails;
