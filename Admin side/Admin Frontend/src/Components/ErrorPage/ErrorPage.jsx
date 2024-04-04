import React from "react";
import "./ErrorPage.css";
import { Link } from "react-router-dom";
const ErrorPage = () => {
  return (
    <>
      <div
        class="error-500"
        data-text="Oh no! Our spaghetti code is not working properly."
      >
        <spaguetti>
          <fork></fork>
          <meat></meat>
          <pasta></pasta>
          <plate></plate>
          <div>
            <Link to={"/"}>
              <button className="error__page__btn">Go To Dashboard</button>
            </Link>
          </div>
        </spaguetti>
      </div>
    </>
  );
};

export default ErrorPage;
