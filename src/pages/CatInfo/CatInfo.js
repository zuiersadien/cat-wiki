import { Form } from "formik";
import React, { useEffect, useState } from "react";

import { FaCat } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import CarStar from "../../components/CarStar/CarStar";
import {
  FlexInfoCat,
  DivCatinfo,
  CarImg,
  DivInfo,
  TitleInfo,
  TOLDiv,
  IMGcatP,
  OtherCats,
  DivPhotosContainer,
  TitleOtherCats,
  ImgOTher,
} from "./styles";
import Header from "../../components/Header/Header";

const CatInfo = () => {
  let { search } = useLocation();
  let query = new URLSearchParams(search);

  let idQ = query.get("id");
  let nameQ = query.get("name");
  console.log(nameQ);
  const [divCat, setdivCat] = useState([]);
  const [img, setimg] = useState("");
  const [info, setInfo] = useState([]);
  const FechSeach = async () => {
    const res2 = await fetch(
      `https://api.thecatapi.com/v1/images/search?breed_ids=${idQ}`
    );
    const res = await fetch(
      `https://api.thecatapi.com/v1/breeds/search?q=${nameQ}`
    );
    const jres = await res.json();
    const jres2 = await res2.json();
    setimg(jres2[0].url);
    setInfo(jres[0]);
  };

  const DivCats = async () => {
    const res2 = await fetch(
      `https://cat-wiki-api-nr.herokuapp.com/breeds-photos/${idQ}`
    );
    const jres2 = await res2.json();
    setdivCat(jres2);
    console.log(jres2);
  };

  useEffect(() => {
    DivCats();
  }, []);

  useEffect(() => {
    FechSeach();
  }, []);
  return (
    <DivCatinfo>
      <Header />
      <FlexInfoCat>
        <CarImg>
          <IMGcatP src={img} alt="" />
        </CarImg>
        <DivInfo>
          <TitleInfo>
            <h4>{info.name}</h4>
            <p>{info.description}</p>
          </TitleInfo>

          <TOLDiv>
            <p>
              <b>temperament :</b> {info.temperament}
            </p>
            <p>
              <b>Origin :</b> {info.origin}
            </p>
            <p>
              <b>Life Span :</b> {info.life_span} years
            </p>
          </TOLDiv>
          <div>
            <CarStar name="adaptability:" number={info.adaptability} />
            <CarStar name="Affection level:" number={info.affection_level} />
            <CarStar name="Child Friendly:" number={info.child_friendly} />
            <CarStar name="Grooming:" number={info.grooming} />
            <CarStar name="Intelligence:" number={info.intelligence} />
            <CarStar name="Health issues:" number={info.health_issues} />
            <CarStar name="Social needs:" number={info.social_needs} />
            <CarStar
              name="Stranger friendly:"
              number={info.stranger_friendly}
            />
          </div>
        </DivInfo>
      </FlexInfoCat>
      <OtherCats>
        <TitleOtherCats>
          <h4>Other photos</h4>
        </TitleOtherCats>
        <DivPhotosContainer>
          {divCat.map((l) => (
            <ImgOTher src={l.url} alt="" />
          ))}
        </DivPhotosContainer>
      </OtherCats>
      <Footer />
    </DivCatinfo>
  );
};

export default CatInfo;
