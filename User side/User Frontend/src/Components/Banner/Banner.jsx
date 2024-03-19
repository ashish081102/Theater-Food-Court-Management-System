import React from "react";
import "./Banner.css";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { Link } from "react-router-dom";
const Banner = ({title,path}) => {
  return (
    <div className="banner__main">
      <h1 className="banner__title">{title}</h1>

      <nav className="banner__bredcrum">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <NavigateNextIcon />
          </li>
          <li>{path}</li>
        </ul>
      </nav>
    </div>
  );
};

export default Banner;
