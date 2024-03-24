import React from "react";
import "./SingleProduct.css";
const SingleProduct = ({ itemInfo }) => {
  return (
    <div className="card">
      <div className="card__image">
        <img
          src={itemInfo.image}
          alt="Salad"
        />
      </div>
      <div className="card__info">
        <div className="car__info--title">
          <h3>{itemInfo.title}</h3> 
        </div> 
        <div className="card__info--price">
          <div className="rating">
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
          </div>
          <p>$ {itemInfo.price}</p>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
