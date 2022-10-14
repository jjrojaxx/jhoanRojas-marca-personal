//IMPORTACIONES
import styled from "styled-components"

export const ContainerNav = styled.header`
  background-color: var(--color-blue);
  display: flex;
  justify-content: center;
  width: 100%;
`
export const Wrapper = styled.div`
  max-width: 1040px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  padding: 16px 16px;
  ul{
    list-style: none;
    display: flex;
    flex-direction: row;
    align-items: center;
    @media (max-width: 821px){
      display: none;
    }
  }
  a{
    img{
       width: 100% ;
       padding-right: 40px;
    }
  }
`
export const Menu = styled.li`
        color: var(--color-white);
        padding: 5px 0;
        margin: 0 20px;
        font-weight: 500;
        font-size: 16px;
        transition: all 300ms;
        cursor: pointer;
        display: inline-block;
        position: relative;
        &::before{
            content: "";
            position: absolute;
            left: 0;
            bottom: 0;
            width: 0;
            height: 2px;
            background-color: var(--color-yellow);;
            transition: width 0.25s ease-out;
        }
        &:hover{
            color: var(--color-yellow);
        }
        &:hover::before{
            width: 100%;
        }

`
export const BtnMenu = styled.li`
  background-color: var(--color-yellow);
  color: var(--color-blue) !important;
  padding: 12px 35px !important;
  border-radius: 100px;
  font-weight: 800 !important;
  transition: all 300ms;
  margin-left: 20px;
  &:hover{
    background-color: var(--color-white);
    cursor: pointer;
  }
`
export const MenuResposive = styled.div`
  position: absolute;
  top: 0;
  left: 0px;
  background-color: #183372ba;
  display: flex;
  flex-direction: column;
  height: 100vh;
  padding: 20px 16px;
  transition: all 300ms;
  backdrop-filter: blur(8px);
  left: ${({click}) => (click ? '-400px' : 0 )};
  @media screen and (max-width: 425px){
    width: 80%;
  }
  span{
    text-decoration: none;
    padding: 20px 0px;
    font-size: 16px;
    font-weight: 500;
    border-radius: 10px;
    transition: all 300ms;
    a{
      text-decoration: none;
      color: var(--color-white);
    }
    &:hover{
      background: #ffd50030;
      padding-left: 20px;
    }
    
  }
  
`
export const IconLogoMobile = styled.div`
  color: var(--color-yellow);
  font-size: 28px;
  display: none;
  margin-bottom: -7px;
  transition: all 300ms;
  @media screen and (max-width: 821px) {
    display: block;
  } 
`
export const BtnMenuReponsive = styled.div`
  background-color: var(--color-yellow);
  color: var(--color-blue);
  padding: 12px 35px;
  border-radius: 100px;
  font-weight: 800 ;
  transition: all 300ms;
  text-align: center;
  margin-top: 26px;
  &:hover{
    background-color: var(--color-white);
    cursor: pointer;
  }
`
export const LogoReponsive = styled.div`
  width: 95%;
  margin-bottom: 24px;
`