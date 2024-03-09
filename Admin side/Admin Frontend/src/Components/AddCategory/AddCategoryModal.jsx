import React from "react";
import { IoCloseCircleOutline } from "react-icons/io5";
import { FaUpload } from "react-icons/fa6";
import "./AddCategoryModal.css";
import { useFormik } from "formik";
import { addCategoryModelSchema } from "./schemas/addCategoryModelSchema";
import toast from "react-hot-toast";
import axios from "axios";
const AddCategoryModal = ({ closeModal, addFoodCategory }) => {
  const addCategoryData = {
    category_name: "",
    category_description: "",
  };
  const handleCreateDish = async (finalData) => {
    const { category_name, category_description } = finalData;

    const response = await axios.post(
      "http://localhost:8080/api/admin/addCategory",
      {
        category_name,
        category_description,
      }
    );
    // const categoryId = response.data.id;
    // const res = await axios.post("http://localhost:8080/api/admin/addDish", {
    //   dish_name: finalData.dish_name,
    //   dish_image: "https://davur.dexignzone.com/frontend/images/food-icon/1.png",
    //   dish_price: finalData.dish_price,
    //   category_id: categoryId,
    //   dish_description: finalData.dish_description
    // });
  };
  // addFoodItem("finalDataddd");
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: addCategoryData,
      validationSchema: addCategoryModelSchema,
      onSubmit: async (values, action) => {
        const finalData = {
          category_name: values.category_name,
          category_description: values.category_description,
        };
        addFoodCategory(finalData);
        // console.log("fckkk", finalData);
        handleCreateDish(finalData);
        closeModal(false);
        toast.success("Category Added Successfully");
        action.resetForm();
      },
    });

  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="modal-header">
          <h1>Add New Category</h1>
          <button className="modalCloseBtn" onClick={() => closeModal(false)}>
            <IoCloseCircleOutline />
          </button>
        </div>

        <form
          name="addItemForm"
          method="post"
          onSubmit={handleSubmit}
          encType="multipart/form-data"
        >
          <div className="addItemForm">
            <div className="form-field">
              <label htmlFor="itemName">Category name</label>
              <div className="form-control">
                <input
                  type="text"
                  name="category_name"
                  id="category_name"
                  placeholder="Enter category name"
                  value={values.category_name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </div>
              {errors.category_name && touched.category_name ? (
                <p className="form-error">{errors.category_name}</p>
              ) : null}
            </div>

            {/* <div className="form-field">
              <label htmlFor="itemPrice">Price</label>
              <div className="form-control">
                <input
                  type="number"
                  name="itemPrice"
                  id="itemPrice"
                  placeholder="Enter price"
                  value={values.itemPrice}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </div>
              {errors.itemPrice && touched.itemPrice ? (
                <p className="form-error">{errors.itemPrice}</p>
              ) : null}
            </div> */}

            {/* <div className="form-field">
              <label htmlFor="itemImage">Item Image</label>
              <div className="form-control itemImage">
                <span>
                  {values.itemImage == ""
                    ? "Select an Image"
                    : values.itemImage.split("\\").reverse()[0]}
                </span>
                <img src={values.itemImage} alt="" />
                <label htmlFor="itemImage">
                  <FaUpload />
                </label>
                <input
                  type="file"
                  name="itemImage"
                  value={values.itemImage}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  id="itemImage"
                />
              </div>
              {errors.itemImage ? (
                <p className="form-error">{errors.itemImage}</p>
              ) : null}
            </div> */}
            {/* 
            <div className="form-field">
              <label htmlFor="">Category</label>
              <div className="form-control">
                <select
                  name="itemCategory"
                  id="itemCategory"
                  value={values.itemCategory}
                  onChange={handleChange}
                  onBlur={handleBlur}
                >
                  <option value={"Select Category"}>Select Category</option>
                  <option value="burgers">Burgers</option>
                  <option value="italian">Italian</option>
                  <option value="american">American</option>
                  <option value="mexican">Mexican</option>
                </select>
              </div>
              {errors.itemCategory && touched.itemCategory ? (
                <p className="form-error">{errors.itemCategory}</p>
              ) : null}
            </div> */}

            <div className="form-field">
              <label htmlFor="itemDescription">Description</label>
              <div className="form-control">
                <textarea
                  name="category_description"
                  id="category_description"
                  placeholder="Enter Description"
                  value={values.category_description}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </div>
              {errors.category_description && touched.category_description ? (
                <p className="form-error">{errors.category_description}</p>
              ) : null}
            </div>
          </div>
          {/* 
          <div className="addItemForm">
            <div className="form-field">
              <label htmlFor="itemName">Item name</label>
              <div className="form-control">
                <input
                  type="text"
                  name="itemName"
                  id="itemName"
                  placeholder="Enter dish name"
                  value={values.itemName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </div>
            </div>
          </div> */}
          <div className="model-footer">
            <button type="submit" className="modal-saveBtn">
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCategoryModal;
