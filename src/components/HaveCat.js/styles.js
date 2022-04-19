import styled from "styled-components";

export const DivHaveCaT = styled.div`

  display: flex;
  width: 80%;
  margin: 0 auto;
  padding: 10rem 0;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;
export const TextHavecat = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  flex-direction: column;
  & > h3 {
    font-style: normal;
    font-weight: 700;
    font-size: 4.8rem;
    line-height: 59px;
    color: #291507;
  
  }
  & > p {
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 22px;

    color: #291507;
  }
  & > a {
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 22px;
    color: rgba(41, 21, 7, 0.6);
    text-align: start;
    margin: 6rem 0;
  }
`;

export const ImgDivHaveCat = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-wrap: wrap;
  &>div{
    display: flex;
    justify-content: flex-end;
    flex-direction: column;
  }
  &>div>div{
    display: flex;
    justify-content: flex-end;

  }
`;
export const IMG3 = styled.img`
  max-width: 23.8rem;
  object-fit: cover;
  margin: 1.4rem ;

`;
export const IMG2 = styled.img`
    max-width: 19.5rem;
  object-fit: cover;
  margin: 1.4rem ;
  max-height: 29.3rem;
  
  
`;
export const IMG1 = styled.img`
    max-width: 273.5rem;
  object-fit: cover;
  max-height: 16.5rem;
  margin: 1.4rem ;
  
`;