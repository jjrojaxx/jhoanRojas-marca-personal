import styled from "styled-components";

export const Container = styled.div`
  background-color: var(--color-blue);
  display: flex;
  justify-content: center;
  padding: 120px 16px;
  @media screen and (max-width: 1061px){
    padding: 80px 16px;
  }
`
export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1040px;
  @media screen and (max-width: 1061px){
    flex-direction: column;
  }
`
export const ColTwo = styled.div`
  display: flex;
  @media screen and (max-width: 1061px){
    justify-content: center;
  }
`
export const ColTwoBtn = styled.div`
  display: flex;
  @media screen and (max-width: 1061px){
    justify-content: center;
  }
  @media screen and (max-width: 369px){
      flex-direction: column;
      text-align: center;
  }
`
export const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  @media screen and (max-width: 1061px){
    width: 100%;
    margin-bottom: 42px;
  }
`
export const SubHero = styled.h2`
  font-size: 13px;
  font-weight: 400; 
  line-height: 16px;
  padding-left: 5px;
  color: var(--color-white);
`
export const TitleHero = styled.h2`
  font-size: 48px;
  font-weight: 700;
  line-height: 59px;
  color: var(--color-white);
  margin-bottom: 32px;
  span{
    color: var(--color-yellow);
  }
  @media screen and (max-width: 1061px){
    text-align: center;
  }
  @media screen and (max-width: 425px){
    font-size: 36px;
    line-height: 42px;
  }
`
export const Content = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  color: var(--color-gris);
  margin-bottom: 32px;
  @media screen and (max-width: 1061px){
    text-align: center;
  }
`
export const BtnHero = styled.button`
  border: none;
  padding: 12px 35px;
  background-color: var(--color-yellow);
  border-radius: 1000px;
  font-size: 16px;
  font-weight: 800;
  color: var(--color-blue);
  transition: all 300ms;
  cursor: pointer;
  margin-right: 16px;
  &:hover{
    background-color:#c9a800;
  }
  @media screen and (max-width: 369px){
    margin-right: 0px;
    margin-bottom: 20px
  }
`
export const BtnHeroWhite = styled(BtnHero)` 
  background-color: var(--color-white);
` 
export const Heroimg = styled.div`
  width: 40%;
  @media screen and (max-width: 1061px){
    width: 100%;
  }
`
