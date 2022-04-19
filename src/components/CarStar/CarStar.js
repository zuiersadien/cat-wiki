import React from "react";
import { DIVCarStar, Cat, DivPadding, CatPadding,Startscat } from "./styles";

const CarStar = ({name ,number}) => {
  return (
    <DIVCarStar>
      <p>{name}</p>
      <Startscat>
        <DivPadding>
          {[...Array(number)].map((star) => {
            return <CatPadding />;
          })}
        </DivPadding>
        <div>
          {[...Array(5)].map((star) => {
            return <Cat />;
          })}
        </div>
      </Startscat>
    </DIVCarStar>
  );
};

export default CarStar;
