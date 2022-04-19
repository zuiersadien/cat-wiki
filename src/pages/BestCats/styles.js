import styled from "styled-components";

export const DivBestCats = styled.div`
  width: 80%;
  margin: 0 auto;
  & > h4 {
    font-style: normal;
    font-weight: 700;
    font-size: 36px;
    line-height: 44px;

    color: #291507;
  }
`;

export const CarBestCat = styled.div`
  display: flex;
  margin: 5rem 0;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;

`;
export const FlexCatCar = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 5rem;
`;
export const DivImgBest = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin:0 5rem;

  & > img {
    width: 170px;
    height: 170px;
    border-radius: 24px;
    margin: 0 auto;
  }
`;
export const DivTextBest = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
width: 70%;

  & > h5 {
    font-style: normal;
    font-weight: 600;
    font-size: 36px;
    line-height: 44px;
    margin: 2rem 0;
    color: #291507;
  }
  & > p {

    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 22px;

    color: #291507;
  }
`;
