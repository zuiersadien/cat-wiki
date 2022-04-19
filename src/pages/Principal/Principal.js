import React from "react";
import Footer from "../../components/Footer/Footer";
import HaveCat from "../../components/HaveCat.js/HaveCat";
import Header from "../../components/Header/Header";
import Search from "../../components/search/Search";
import {DivPrincipal}from "./styles"
const Principal = ({breeds}) => {

  return (
    <DivPrincipal>
      <Header/>
      <Search  imag={breeds}/>
      <HaveCat/>
      <Footer/>
    </DivPrincipal>
  );
};

export default Principal;
