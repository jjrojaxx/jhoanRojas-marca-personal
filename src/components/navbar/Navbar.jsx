import React, { useState } from "react";
import {
  ContainerNav,
  Wrapper,
  BtnMenu,
  Menu,
  IconLogoMobile,
  MenuResposive,
  BtnMenuReponsive,
  LogoReponsive
} from "./NavbarElements";
import Logo from "../../assets/logo.svg";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [click, setClick] = useState(true);

  const ChangeClick = () => {
    setClick(!click);
  };
  return (
    <ContainerNav>
      <Wrapper>
        <a href="/">
          <img src={Logo} alt="Jhoanrojas.com" />
        </a>
        <nav>
          <IconLogoMobile onClick={() => ChangeClick()}>
            {click ? <FaBars /> : <FaTimes />}
          </IconLogoMobile>
          <ul>
            <Menu>Sobre mi</Menu>
            <Menu>Experiencia</Menu>
            <Menu>Trabajos</Menu>
            <BtnMenu>Contacto</BtnMenu>
          </ul>
          <MenuResposive click={click}>
            <LogoReponsive>
              <a href="/">
                <img src={Logo} alt="Jhoanrojas.com" />
              </a>
            </LogoReponsive>
            <span onClick={() => ChangeClick()}><a href="/">Sobre mi</a></span>
            <span onClick={() => ChangeClick()}><a href="/">Experiencia</a></span>
            <span onClick={() => ChangeClick()}><a href="/">Trabajos</a></span>
            <BtnMenuReponsive onClick={() => ChangeClick()}>Contacto</BtnMenuReponsive>
          </MenuResposive>
        </nav>
      </Wrapper>
    </ContainerNav>
  );
}
