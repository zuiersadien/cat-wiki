import React from "react";
import { DivFooter, ImgLogoFooter, Icono } from "./styles";
import LogoF from "../../img/CatwikiLogo.png";


const Footer = () => {
  return (
    <DivFooter>
      <ImgLogoFooter src={LogoF} alt="" />
      <h3>
        <Icono />
        created by
        <a href="https://github.com/zuiersadien"> zuiersadien </a>
        2022
      </h3>
    </DivFooter>
  );
};

export default Footer;
