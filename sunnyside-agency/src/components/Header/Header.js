import React from "react";
import { ReactComponent as YourSvg } from "../../images/icon-arrow-down.svg";

import "./Header.css";

const Header = () => {
  return (
    <div className="d-flex justify-content-center text-white mt-5">
      <div className="header-content">
        <h1 className="text-uppercase header-title">we are creatives</h1>
        <div className="svg-image">
          <YourSvg />
        </div>
      </div>
    </div>
  );
};

export default Header;
