import styled from "styled-components";

export const Container = styled.section`
  background-color: var(--color-white);
  padding: 120px 16px;
  display: flex;
  justify-content: center;
  @media screen and (max-width: 425px) {
    padding: 80px 16px;
  }
`;
export const ContainerLeft = styled.section`
  background-color: var(--color-white);
  padding: 120px 16px;
  display: flex;
  justify-content: center;
  @media screen and (max-width: 425px) {
      padding: 80px 16px;
    }
    `;
export const ContainerBlue = styled(Container)`
  background-color: var(--color-blue);
  `;
export const Wrapper = styled.div`
  max-width: 1040px;
  display: flex;
  max-width: 1040px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  @media screen and (max-width: 1025px) {
    flex-direction: column;
  }
`;
export const WrapperLeft = styled.div`
  display: flex;
  max-width: 1040px;
  flex-direction: column;
  justify-content: start !important;
  width: 100%;
  text-align: start;
  @media screen and (max-width: 1025px) {
    flex-direction: column;
  }
`;
export const WrapperCenter = styled(Wrapper)` 
  justify-content: center;
  flex-direction: column;
`;

export const Photo = styled.div`
  width: 50%;
  @media screen and (max-width: 1025px) {
    width: 100%;
    margin-bottom: 25px;
  }
`;
export const Content = styled.div`
  width: 50%;
  @media screen and (max-width: 1025px) {
    width: 100%;
  }
  h2 {
    font-size: 48px;
    color: var(--color-black);
    font-weight: 700;
    margin-bottom: 28px;
    @media screen and (max-width: 425px) {
      text-align: center;
      font-size: 34px;
      margin-bottom: 10px;
    }
  }
  p {
    font-size: 16px;
    font-weight: 400;
    color: #555555;
    line-height: 24px;
    margin-bottom: 24px;
    @media screen and (max-width: 450px) {
      text-align: center;
    }
  }
`;
export const ColTwo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  margin-bottom: 4px;
  @media screen and (max-width: 450px) {
    justify-content: center;
  }
`;
export const ColTwoLeft = styled(ColTwo)`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  margin-bottom: 4px;
  width: 100%;
  @media screen and (max-width: 450px) {
    justify-content: center;
  }
`;
export const ColTwoCenter = styled(ColTwo)`
  justify-content: center;
`;
export const Subtitle = styled.div`
  font-size: 14px;
  font-weight: 500;
  line-height: 17px;
  margin-left: 8px;
  color: #5f5f5f;
`;
export const SubtitleWhite = styled.div`
  font-size: 14px;
  font-weight: 500;
  line-height: 17px;
  margin-left: 8px;
  color: #ffff;
`;
export const TitleCenter = styled.h2`
    font-size: 48px;
    color: var(--color-white);
    font-weight: 700;
    margin-bottom: 28px;
    text-align: center;
    @media screen and (max-width: 425px) {
      font-size: 34px;
      margin-bottom: 10px;
    } 
`
export const Title2 = styled.h2`
  font-size: 48px;
  font-weight: 700;
  line-height: 50px;
  color: var(--color-black);
  @media screen and (max-width: 425px) {
    font-size: 28px;
    text-align: center;
    } 
`
export const Title = styled.h2`
    font-size: 48px;
    color: #fff !important; 
    font-weight: 700;
    margin-bottom: 28px;
    @media screen and (max-width: 425px) {
      text-align: center;
      font-size: 34px;
      margin-bottom: 10px;
    }
    span{
        color: var(--color-yellow);
    }
`
export const Parrafo = styled.p`
    font-size: 16px;
    font-weight: 400;
    color: #B8B8B8 !important;
    line-height: 24px;
    margin-bottom: 24px;
    span{
      color: #1081E8;
    }
    @media screen and (max-width: 450px) {
      text-align: center;
    }
`
export const Redes = styled.div`
  display: flex;
  margin-top: 42px;
  line-height: 13px;
  @media screen and (max-width: 1024px){
    margin-bottom: 25px;
  }
  @media screen and (max-width: 425px){
    justify-content: center;
    margin-bottom: 25px;
  }
`
export const Icons = styled.div`
  padding: 16px 18px;
  background-color: var(--color-white);
  border-radius: 150px;
  color: var(--color-blue); 
  margin-right: 15px;
  transition: all 300ms;
  &:hover{
    background-color: var(--color-yellow);
    color: var(--color-white);
  }
  svg{
      font-size: 38px;
      line-height: 38px;
  }
`
