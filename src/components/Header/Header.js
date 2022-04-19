import React from "react";
import {DivLogoHeader}from "./styles"
import cat from "../../img/CatwikiLogo2.png";
const Header = () => {
  return (
    <DivLogoHeader>
      <img src={cat} alt="" />
    </DivLogoHeader>
  );
};

export default Header;
