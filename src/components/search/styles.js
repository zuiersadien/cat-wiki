import styled from "styled-components";
import HeroImagesm from "../../img/HeroImagemd.png";

export const DivSearch = styled.div`
  width: 100%;

  margin: 0 auto;
  margin-top:5rem ;
  background: #e3e1dc;
  border-radius: 42px;
`;
export const FondoSearch = styled.div`
  background-image: url(${HeroImagesm});
  border-radius: 42px 42px 0 0;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
export const TextFondoSearch = styled.div `
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 1rem;
  & > img {
   
    max-width: 270px;
    min-width: 100px;
  }
  & > h2 {
    font-style: normal;
    font-weight: 500;
    font-size: 2.4rem;
    line-height: 29px;
    color: #ffffff;
    width: 100%;
  }
`;

export const MostBreeds = styled.div`
  width: 80%;
  margin: 0 auto;

  & > h3 {
    font-style: normal;
    font-weight: 500;
    font-size: 1.8rem;
    line-height: 22px;
    margin-top: 4rem;
  }
`;
export const MostBreedstext = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  &  > h2 {
    font-style: normal;
    font-weight: 700;
    font-size: 4.8rem;
    line-height: 59px;
    color: #291507;
  }
  & > a {
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    text-align: right;
    color: rgba(41, 21, 7, 0.6);
  }
`;


export const CarcatFour = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  & > div {
  }
  & > div > h4 {
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 22px;
  }
  & > div > img {
    min-width: 200px;
    min-height: 200px;
    width: 200px;
    height: 200px;
    border-radius: 24px;
    object-fit: cover;
  }
`;
export const DivInput = styled.form`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 5rem 0 7rem 0;

  & > input {
    width: 80%;
    height: 7rem;
    border-radius: 5.9rem 0 0 5.9rem;
    font-style: normal;
    font-weight: 500;
    font-size: 1.8rem;
    line-height: 22px;
    border: none;

    color: #291507;

    display: flex;
    align-items: center;
   padding-left:2rem ;
  }
  & > button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 20%;
    height: 7.2rem;
    border: none;
    background-color: white;
    border-radius: 0 5.9rem 5.9rem 0;
  }
  &>button>svg{
    font-size: 1.8rem;
  }
  &>button:hover{
    cursor: pointer;
   border: 1px solid black;
  }
  &>button:active{
    cursor: default;
  }
`;
