//IMPORTACIONES
import styled from "styled-components";

export const Content = styled.div`
  width: 100%;
  text-align: start;
`;
export const Theree = styled.div`
  margin-top: 24px;
  display: flex;
  flex-wrap: wrap;
`;
export const Card = styled.div`
  width: 33%;
  padding: 15px 8px;
  transition: all 200ms;
  h3{
    font-family: Montserrat;
    font-size: 24px;
    font-weight: 600;
    line-height: 29px;
    margin: 14px 0;
    color: var(--color-black);
  }
  p{
    font-size: 16px;
    font-weight: 300;
    line-height: 24px;
    color: #555550;
  }
  @media screen and (max-width: 928px) {
    width: 50%;
    h3{
    font-family: Montserrat;
    font-size: 21px;
    font-weight: 600;
    line-height: 29px;
    margin: 14px 0;
    }
    p{
    font-size: 14px;
    font-weight: 300;
    line-height: 24px;
    color: #555550;
  }
  @media screen and (max-width: 425px){
    width: 100%;
    padding: 10px 0;
  }
}
`;
