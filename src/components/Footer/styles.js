import styled from "styled-components";
import { AiOutlineCopyrightCircle } from 'react-icons/ai';

export const DivFooter = styled.div`
  position: fixed;
  bottom:0;
  background-color: rgba(0, 0, 0, 1);
  color: white;
  display: flex;
  justify-content: space-around;
  width: 80%;
  padding:1rem;
  margin: 0 auto;
  

  max-height: 8rem;

  align-items: center;
  border-radius: 42px 42px 0 0;
  font-size: 2rem;
  font-style: normal;
  font-weight: 400;
  line-height: 22px;
  flex-wrap: wrap;
  & > h3 {
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
  
  }
  & >h3>a{
      color: white;
      font-size: 2rem;
  }
`;
export const ImgLogoFooter = styled.img`
  max-width: 10rem;
  min-width: 7rem;
`;
export const Icono = styled(AiOutlineCopyrightCircle)`
  font-size: 2rem;
`;