import React from "react";
import imag1 from "../../img/image1.png";
import imag2 from "../../img/image2.png";
import imag3 from "../../img/image3.png";
import { TextHavecat, DivHaveCaT, ImgDivHaveCat ,IMG3,IMG2,IMG1 } from "./styles";
const HaveCat = () => {
  return (
    <DivHaveCaT>
      <TextHavecat>
        <h3>Why should you have a cat?</h3>
        <p>
          Having a cat around you can actually trigger the release of calming
          chemicals in your body which lower your stress and anxiety leves
        </p>
        <a href="https://www.helpguide.org/articles/healthy-living/joys-of-owning-a-cat.htm#:~:text=The%20health%20benefits%20of%20cats&text=They%20can%3A,and%20lower%20your%20blood%20pressure.">READ MORE</a>
      </TextHavecat>
      <ImgDivHaveCat>
        <div>
          <IMG1 src={imag2} alt="" />
          <div>
            <IMG2 src={imag1} alt="" />
          </div>
        </div>
        <div>
          <IMG3 src={imag3} alt="" />
        </div>
      </ImgDivHaveCat>
    </DivHaveCaT>
  );
};

export default HaveCat;
