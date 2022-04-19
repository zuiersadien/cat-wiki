import React, { useState, useEffect } from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

import {
  DivBestCats,
  CarBestCat,
  FlexCatCar,
  DivTextBest,
  DivImgBest,
} from "./styles";
const BestCats = ( ) => {

  const [topBreeds, setTopBreeds] = useState([])
  const getTopBreedsWithPhoto = async ( limit ) => {
    const resp = await fetch(`https://cat-wiki-api-nr.herokuapp.com/top-breeds/${limit}`);
    const data = await resp.json();

    const referens_image = data.map((image, i) => {
        return (image.reference_image_id);
    })

    const photos = referens_image.map(async (photo, i) => {
        const resp2 = await fetch(`https://api.thecatapi.com/v1/images/${photo}`);
        const data2 = await resp2.json();

        return data2.url;
    })

    const photoLink = await Promise.all(photos);
    const breeds = data.map((breed, i) => {
        return {
            ...breed,
            photo: photoLink[i]
        }
    })


    return breeds;
}
const getTopBreeds = () => {
  getTopBreedsWithPhoto(10).then(breeds => {
      setTopBreeds(breeds);
  })
}

  useEffect(() => {
    getTopBreeds();
  }, []);// eslint-disable-line react-hooks/exhaustive-deps

  console.log();
  return (
    <DivBestCats>
      <Header />
      <h4>Top 10 most searched breeds</h4>
      <FlexCatCar>
        {topBreeds.map((l, input) => (
          <CarBestCat key={input}>
            <DivImgBest><img src={l.photo} alt="" /></DivImgBest>
            <DivTextBest>
              <h5>
                {input + 1}.- {l.name}
              </h5>
              <p>{l.description}</p>
            </DivTextBest>
          </CarBestCat>
        ))}
      </FlexCatCar>
      <Footer />
    </DivBestCats>
  );
};

export default BestCats;
