import React from "react";
import { NavLink } from "react-router-dom";

const Arabic = () => {
  return (
    <div className="tabbed-navigation">
      <NavLink to="/">العربية</NavLink>
      <p>الفارسية</p>
      <p>الكردية</p>
    </div>
  );
};

export default Arabic;
