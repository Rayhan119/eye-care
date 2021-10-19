import React from "react";
import "./NotFound.css";
//images not found
import notFound from "../../images/Error-404.png";
import { Link } from "react-router-dom";
const NotFound = () => {
  return (
    <div>
      <Link to="/home">
        <div className="not-found-btn">
          <button>Go to home</button>
        </div>
      </Link>
      <div className="not-found-section">
        <img src={notFound} alt="" />
      </div>
    </div>
  );
};

export default NotFound;
