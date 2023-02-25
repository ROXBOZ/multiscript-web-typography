import React from "react";
import { NavLink } from "react-router-dom";

const Latin = () => {
  return (
    <div className="tabbed-navigation">
      <p>Deutsch</p>
      <NavLink to="/">English</NavLink>
      <p>Polski</p>
      <p>Türkçe</p>
    </div>
  );
};

export default Latin;
