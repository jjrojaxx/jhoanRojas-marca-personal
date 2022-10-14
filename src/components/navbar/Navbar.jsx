import React, { useState } from "react";
import {
  ContainerNav,
  Wrapper,
  BtnMenu,
  Menu,
  IconLogoMobile,
  MenuResposive,
  BtnMenuReponsive,
  LogoReponsive,
} from "./NavbarElements";
import Logo from "../../assets/logo.svg";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link as Scroll } from "react-scroll";

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
            <Scroll
              className="sobre"
              to="sobre"
              spy={true}
              smooth={true}
              offset={-30}
              duration={500}
              activeClass="active"
            >
              <Menu>Sobre mi</Menu>
            </Scroll>
            <Scroll
              className="sobre"
              to="experiencia"
              spy={true}
              smooth={true}
              offset={-0}
              duration={500}
              activeClass="active"
            >
              <Menu>Experiencia</Menu>
            </Scroll>
            <Scroll
              className="sobre"
              to="trabajos"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              activeClass="active"
            >
              <Menu>Trabajos</Menu>
            </Scroll>
            <Scroll
              className="contacto"
              to="conatact"
              spy={true}
              smooth={true}
              offset={-30}
              duration={500}
              activeClass="active"
            >
              <BtnMenu>Contacto</BtnMenu>
            </Scroll>
          </ul>
          <MenuResposive click={click}>
            <LogoReponsive>
              <a href="/">
                <img src={Logo} alt="Jhoanrojas.com" />
              </a>
            </LogoReponsive>
            <Scroll
                onClick={() => ChangeClick()}
                className="sobre"
                to="sobre"
                spy={true}
                smooth={true}
                offset={-30}
                duration={500}
                activeClass="active"
              >
            <span >
                Sobre mi
            </span>
              </Scroll>
            <Scroll
                onClick={() => ChangeClick()}
                className="sobre"
                to="experiencia"
                spy={true}
                smooth={true}
                offset={-30}
                duration={500}
                activeClass="active"
              >
            <span>
               Experiencia
            </span>
              </Scroll>
            <Scroll
                 onClick={() => ChangeClick()}
                className="sobre"
                to="trabajos"
                spy={true}
                smooth={true}
                offset={-30}
                duration={500}
                activeClass="active"
              >
            <span>
                Trabajos
            </span>
              </Scroll>
    
              <Scroll
                 onClick={() => ChangeClick()}
                className="sobre"
                to="conatact"
                spy={true}
                smooth={true}
                offset={-30}
                duration={500}
                activeClass="active"
              >
            <BtnMenuReponsive>
              Contacto
            </BtnMenuReponsive>
            </Scroll>
          </MenuResposive>
        </nav>
      </Wrapper>
    </ContainerNav>
  );
}
