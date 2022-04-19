import styled from "styled-components";
import { FaCat } from "react-icons/fa";

export const DIVCarStar = styled.div`
  display: flex;
  & > p {
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 20px;

    color: #000000;
    margin-right: 1rem;
    width: 140px;
  }
`;
export const startPadding = styled.div`
`;

export const Cat = styled(FaCat)`
  font-size: 3rem;
  color: #e0e0e0;
  margin: 0 1rem;
`;
export const CatPadding = styled(FaCat)`
  font-size: 3rem;
  color: #544439; ;
  margin: 0 1rem;
`;
export const DivPadding = styled.div`
  position: absolute;
`;

export const Startscat = styled.div`
  
`;
