import React, { useState } from "react";
import "./Header.css";
import { Link, useNavigate } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { SidebarData } from "../Sidebar-Menu/SidebarData";
import { IconContext } from "react-icons";
import toast from "react-hot-toast";
const Header = () => {
  const [sidebar, setSidebar] = useState(false);
  const navigate = useNavigate();
  const showSidebar = () => {
    setSidebar(!sidebar);
  };

  const admin_id = JSON.parse(localStorage.getItem("admin_id"));

  const handleLogout = () => {
    function deleteCookie(cookieName) {
      document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
    }

    localStorage.removeItem("admin_id");
    deleteCookie("Token");
    toast.success("Logout Successfully!");

    navigate("/signIn");
  };
  return (
    <>
      <IconContext.Provider value={{ color: "#000" }}>
        <div className="header">
          <Link to="#" className="menu-bars">
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>

          {/* SIDE BAR START */}
          <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
            <ul className="nav-menu-items" onClick={showSidebar}>
              <li className="navbar-toggle">
                <div className="logo-header">
                  <img
                    src="data:image/png;base64,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"
                    alt=""
                  />
                </div>
                <Link to="#" className="menu-bars close">
                  <AiIcons.AiOutlineClose />
                </Link>
              </li>
              {SidebarData.map((item, index) => {
                return (
                  <li key={index} className={item.className}>
                    <Link to={item.path}>
                      {item.icon}
                      <span>{item.title}</span>
                    </Link>
                  </li>
                );
              })}
              {admin_id && (
                <li className="nav-text" onClick={handleLogout}>
                  <Link to="/signIn">
                    <span>Logout</span>
                  </Link>
                </li>
              )}
            </ul>
          </nav>
          {/* SIDE BAR ENDS */}

          <div className="logo-header">
            <img
              src="data:image/png;base64,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"
              alt=""
            />
          </div>

          <div className="nav-items">
            <ul>
              <Link to={"payment-details"}>
                <li>Transaction</li>
              </Link>
              <Link to={"order-details"}>
                <li>Order Status</li>
              </Link>
              <Link to={"/"}>
                <li>Check Dashboard</li>
              </Link>
            </ul>
          </div>

          <div className="user">
            <div className="user-detail">
              Sumit <br />
              Dubey
            </div>
            <div className="user-profile">
              <img
                src="https://davur.dexignzone.com/frontend/images/avatar/1.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </IconContext.Provider>
    </>
  );
};

export default Header;
