//IMPORTACIONES

import {
  HeroContent,
  SubHero,
  TitleHero,
  Content,
  BtnHero,
  BtnHeroWhite,
  Container,
  Wrapper,
  ColTwo,
  Heroimg,
  ColTwoBtn,
} from "./HeroElements";
import React from "react";
import Trabajador from "../../assets/trabajador.svg";
import Rayo from "../../assets/icon-rayo.svg";
import { motion } from "framer-motion";
import { Link as Scroll } from "react-scroll";
//JSX
export default function Hero() {
  return (
    <Container>
      <Wrapper>
        <HeroContent
          as={motion.div}
          initial={{ opacity: 0, x: -200 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <ColTwo>
            <img src={Rayo} alt="" />
            <SubHero>Electricista</SubHero>
          </ColTwo>
          <TitleHero>
            Necesitas un <span>Electricista</span> para resolver tus{" "}
            <span>problemas</span> 🛠
          </TitleHero>
          <Content>
            especialistas en resolver fallas eléctricas residenciales e
            industriales, cortocircuitos, conexiones, acometidas eléctricas
            según RETIE, certificaciones para legalizar EPM, problemas con
            bombas hidroneumáticas, portones eléctricos, motores etc.{" "}
          </Content>
          <ColTwoBtn>
            <Scroll
              className="sobre"
              to="conatact"
              spy={true}
              smooth={true}
              offset={-30}
              duration={500}
              activeClass="active"
            >
              <BtnHero>Contacto</BtnHero>
            </Scroll>
            <Scroll
              className="sobre"
              to="sobre"
              spy={true}
              smooth={true}
              offset={-30}
              duration={500}
              activeClass="active"
            >
              <BtnHeroWhite>saber más</BtnHeroWhite>
            </Scroll>
          </ColTwoBtn>
        </HeroContent>
        <Heroimg
          as={motion.div}
          initial={{ opacity: 0, x: 200 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <img src={Trabajador} alt="" width="100%" />{" "}
        </Heroimg>
      </Wrapper>
    </Container>
  );
}
