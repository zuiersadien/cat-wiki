import styled from "styled-components";

export const DivCatinfo = styled.div`
 width: 80%;
 margin: 0 auto;
`;
export const FlexInfoCat = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  margin-top: 4rem;
  flex-wrap: wrap;

`;
export const CarImg = styled.div`
  width: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
`;
export const IMGcatP = styled.img`
  object-fit: cover;
  width: 300px;
  height: 300px;
  border-radius: 24px;
`;
export const DivInfo = styled.div`
  max-width: 50%;
  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

export const TitleInfo = styled.div`
  & > h4 {
    font-style: normal;
    font-weight: 600;
    font-size: 36px;
    line-height: 44px;
    margin: 0;
    color: #291507;
  }
  & > p {
    font-style: normal;
    font-weight: 500;
    font-size: 1.8rem;
    line-height: 22px;

    color: #291507;
  }
`;
export const TOLDiv = styled.div`
  & > p > b {
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 20px;
  }
  & > p {
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
  }
`;

export const OtherCats = styled.div`
  width: 80%;
  margin: 0 auto;
  margin-bottom: 15rem;
`;

export const DivPhotosContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
`;
export const TitleOtherCats = styled.div`
  & > h4 {
    font-style: normal;
    font-weight: 600;
    font-size: 36px;
    line-height: 44px;
    color: #291507;
  }
`;

export const ImgOTher = styled.img`
  object-fit: cover;
  width: 250px;
  height: 250px;
  margin: 1rem 0;
  border-radius: 24px;

`;
