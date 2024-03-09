import React, { useState } from "react";
import { IoCloseCircleOutline } from "react-icons/io5";
import { FaUpload } from "react-icons/fa6";
// import "./EditFoodItemModal.css";
import axios from "axios";
import { useFormik } from "formik";
import { editCategoryModelSchema } from "./schemas/EditCategoryModalSchema";
import { FetchProducts } from "../../Data/Products";
import toast from "react-hot-toast";

const EditCategoryModal = ({ closeModal, editId, data, updateData }) => {


  const [editData] = useState(data.find((id) => id.category_id == editId));


  const editItemData = {
    category_id: editData.category_id,
    category_name: editData.category_name,
    category_description: editData.category_description,
  };
  async function updateCategoryById(values) {
    const { category_name, category_id, category_description } = values;

    await axios
      .put("http://localhost:8080/api/admin/updateCategory/" + category_id, {
        category_name,
        category_description,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: editItemData,
      validationSchema: editCategoryModelSchema,
      onSubmit: (values, action) => {
        updateData(values);
        updateCategoryById(values);
        // console.log(values);
        closeModal(false);
        toast.success("Category Updated Successfully!");
        // action.resetForm();
      },
    });

  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="modal-header">
          <h1>Edit Category</h1>
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

            {/* <div className="form-field">
              <label htmlFor="">Category</label>
              <div className="form-control">
                <select
                  name="itemCategory"
                  id="itemCategory"
                  // value={values.itemCategory}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  defaultValue={values.itemCategory}
                >
                  <option value={"Select Category"}>Select Category</option>
                  <option value="apple">Apple</option>
                  <option value="samsung">Samsung</option>
                  <option value="khana">Khana</option>
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
                  type="text"
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

export default EditCategoryModal;
