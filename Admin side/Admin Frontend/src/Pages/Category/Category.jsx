import React, { useEffect, useState } from "react";
import "./Category.css";
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

import toast from "react-hot-toast";
import NoProductFound from "../../Components/NoProductFound ";
const AddCategory = () => {
  const [categoryData, setCategoryData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(7);
  const [openModal, setOpenModal] = useState(false);
  const [openEditModal, setOpenEditModal] = useState(false);
  const [filterData, setFilterData] = useState([]);
  const [editModalData, setEditModalData] = useState("");
  //getting current page posts 
  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentData = filterData.slice(indexOfFirstPost, indexOfLastPost);

  const [searchText, setSearchText] = useState("");

  const admin_id = JSON.parse(localStorage.getItem("admin_id"));
  const navigate = useNavigate();
  useEffect(() => {
    async function verifyUser() {
      console.log("VVVVVVVVVVVVVVVVVERIFYING", admin_id);

      await axios
        .post("http://localhost:8080/api/admin/checkAdmin", {
          admin_id: admin_id,
        })
        .then((response) => {
          navigate("/category");
        })
        .catch((err) => {
          navigate("/signIn");
          console.log(err);
        });
    }
    if (admin_id) {
      console.log("DDDDDDDDDOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOing");
      verifyUser();
    } else {
      navigate("/signIn");
    }
  }, []);

  useEffect(() => {
    const fetch = async () => {
      setLoading(true);
      const response = await axios.get(
        "http://localhost:8080/api/admin/getAllCategory"
      );

      setCategoryData(response.data);
      setFilterData(response.data);
      console.log(response.data);
      setLoading(false);
    };

    fetch();
  }, []);

  function addNewFoodCategory(data) {
    setFilterData(filterData.concat(data));
  }
  function updateCategory(data) {
    setCategoryData(
      categoryData.map((item) => {
        if (item.category_id === data.category_id) {
          item.category_name = data.category_name;
          item.category_description = data.category_description;
        }

        return item;
      })
    );
  }
  const handleDelete = async (category_id) => {
    console.log(category_id);
    await axios
      .delete("http://localhost:8080/api/admin/deleteCategory/" + category_id)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    console.log("deleted sdvmfis");
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
    <div className="fooditems">
      <div className="fooditems-top">
        <div className="fooditems-top-left">
          <h1>Add Category</h1>
          <button
            className="openModalButton"
            onClick={() => {
              setOpenModal(true);
            }}
          >
            Add New
          </button>
        </div>

        <div className="fooditems-top-right search-area">
          <input
            type="text"
            placeholder="Search here.."
            value={searchText}
            onChange={(event) => {
              setSearchText(event.target.value);
              setFilterData(
                categoryData.filter((data) =>
                  data.category_name
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

      {openModal ? (
        <AddCategoryModal
          closeModal={setOpenModal}
          addFoodCategory={addNewFoodCategory}
        />
      ) : null}
      {openEditModal ? (
        <EditCategoryModal
          closeModal={setOpenEditModal}
          editId={editModalData}
          data={currentData}
          updateData={updateCategory}
        />
      ) : null}
      {filterData.length <= 0 ? (
        <NoProductFound
        title="Category"
        description={"category"}
        />
      ) : (
        <>
          <div className="fooditems-bottom table">
            <table>
              <thead>
                <tr>
                  <th>Category Id</th>
                  <th>Category Name</th>
                  <th>Description</th>
                  <th>ACTION</th>
                </tr>
              </thead>
              <tbody>
                {currentData &&
                  currentData.map((item) => {
                    return (
                      <tr key={item.category_id}>
                        <td>{item.category_id}</td>
                        <td>{item.category_name}</td>
                        <td>{item.category_description}</td>

                        <td>
                          <div className="fooditems-actions">
                            <span
                              className="fooditems-action-edit"
                              onClick={(e) => {
                                console.log(item.category_id);
                                setOpenEditModal(true);
                                setEditModalData(item.category_id);
                              }}
                            >
                              <FiEdit />
                            </span>
                            <span
                              onClick={(e) => {
                                console.log(e.target);
                                let action = confirm(
                                  "Are You Sure You Want to Delete?"
                                );

                                if (action) {
                                  // setToBeDeleted(item.id)
                                  setFilterData(
                                    filterData.filter(
                                      (data) =>
                                        data.category_id != item.category_id
                                    )
                                  );
                                  handleDelete(item.category_id);
                                  toast.success("Item Deleted Successfully");
                                } else {
                                  toast.error("Action Aborted");
                                }
                              }}
                            >
                              <AiTwotoneDelete />
                            </span>
                          </div>
                        </td>
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
export default AddCategory;
