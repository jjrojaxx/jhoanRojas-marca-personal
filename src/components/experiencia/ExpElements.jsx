//IMPORTACIONES
import styled from "styled-components";

//JSX
export const Theree = styled.div`
  margin-top: 32px;
  display: flex;
  justify-content: space-between;
`
export const Caja = styled.div `
  padding: 15px 20px;
  border: 1px solid #B8B8B8;  
  color: #B8B8B8; 
  margin: 0 80px 100px 200px;
  width: 38%;
  @media screen and (max-width: 768px) {
    margin: 0 40px 100px 0px;
    width: 110%;
  }
  @media screen and (max-width: 607px) {
    display: none;
  }

`
export const CajaU = styled.div `
  padding: 15px 20px;
  border: 1px solid #B8B8B8;  
  color: #B8B8B8; 
  margin: 0 80px 110px 200px;
  width: 38%;

  @media screen and (max-width: 768px) {
    margin: 0 40px 110px 0px;
    width: 110%;
  }
  @media screen and (max-width: 607px) {
    display: none;
  }
`
export const CajaT = styled.div `
  padding: 15px 20px;
  border: 1px solid #B8B8B8;  
  color: #B8B8B8; 
  margin: 0 80px 100px 200px;
  width: 38%;

  @media screen and (max-width: 768px) {
    margin: 0 40px 120px 0px;
    width: 110%;
  }
  @media screen and (max-width: 607px) {
    display: none;
  }
`
export const CajaTH = styled.div `
  padding: 15px 20px;
  border: 1px solid #B8B8B8;  
  color: #B8B8B8; 
  margin: 0 80px 90px 200px;
  width: 38%;
  @media screen and (max-width: 768px) {
    margin: 0 40px 120px 0px;
    width: 110%;
  }
  @media screen and (max-width: 607px) {
    display: none;
  }
`
export const CajaF = styled.div `
  padding: 15px 20px;
  border: 1px solid #B8B8B8;  
  color: #B8B8B8; 
  margin: 0 80px 80px 200px;
  width: 38%;
  @media screen and (max-width: 768px) {
    margin: 0 40px 80px 0px;
    width: 110%;
  }
  @media screen and (max-width: 607px) {
    display: none;
  }
`
export const Line = styled.div `
 height: 800px;
 border: 1px solid #B8B8B8;
 display: flex;

 flex-direction: column;
 align-items: center;
 margin-right: 58px;
 @media screen and (max-width: 768px) {
    margin-left: 50px;
  }
@media screen and (max-width: 607px) {
    display: none;
}
`
export const Punto = styled.div`
  width: 10px;
  height: 10px;
  background-color: var(--color-yellow);
  border-radius: 100px;
  margin-top: 20px;
  position: absolute;
`
export const Punto2 = styled.div`
  width: 10px;
  height: 10px;
  background-color: var(--color-yellow);
  border-radius: 100px;
  margin-top: 170px;
  position: absolute;
`
export const Punto3 = styled.div`
  width: 10px;
  height: 10px;
  background-color: var(--color-yellow);
  border-radius: 100px;
  margin-top: 335px;
  position: absolute;
`
export const Punto4 = styled.div`
  width: 10px;
  height: 10px;
  background-color: var(--color-yellow);
  border-radius: 100px;
  margin-top: 480px;
  position: absolute;
  @media screen and (max-width: 768px) {
    margin-top: 500px;
  }
`
export const Punto5 = styled.div`
  width: 10px;
  height: 10px;
  background-color: var(--color-yellow);
  border-radius: 100px;
  margin-top: 620px;
  position: absolute;
  @media screen and (max-width: 768px) {
    margin-top: 680px;
  }
`
export const Content = styled.div`
  h3{
    font-size: 24px;
    font-weight: 500;
    line-height: 29px;
    color: var(--color-yellow) !important;
    margin-bottom: 12px;
  }
  p{
    font-size: 16px;
    font-weight: 200;
    line-height: 29px;
    margin-bottom: 42px;
    color: var(--color-gris);
  }
`