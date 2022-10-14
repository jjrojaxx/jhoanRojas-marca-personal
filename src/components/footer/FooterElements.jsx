//IMPORTACIONES
import styled from "styled-components"

export const FooterCopy = styled.footer`
  display: flex;
  padding: 30px 16px;
  justify-content: center;
  border-top: 1px solid #B8B8B8;
  background-color: var(--color-blue); 
  width: 100%;
`
export const Copy = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 22px;
  color: #B8B8B8;
  text-align: left;
  a{
    font-weight: 600;
    color: #1081E8;
  }
  @media screen and (max-width: 672px) {
    text-align: center;
  }
`
export const Redes = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`
export const Wrapper = styled.div`
  max-width: 1040px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  @media screen and (max-width: 1072px) {
    justify-content: center;
    flex-direction: column;
  }
`
export const Icons = styled.div`
  font-size: 38px;   
  margin-left: 15px;
  color: #B8B8B8;
  transition: all 300ms;
  line-height: 30px;
  &:hover {
    color: var(--color-yellow);
  }
  @media screen and (max-width: 1072px) {
    margin-top: 24px;
  }
`
