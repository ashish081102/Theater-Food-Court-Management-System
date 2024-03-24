import React from "react";
import Header from "../Components/Header/Header";
import { Outlet } from "react-router-dom";
import "./Cart/animate.css";
import "./Cart/bootstrap-select.min.css";
import "./Cart/Cart.css";
const RootLayout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default RootLayout;
