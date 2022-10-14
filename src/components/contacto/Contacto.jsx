//IMPORTACIONES
import React from "react";
import Rayo from "../../assets/icon-rayo-yellow.svg";
import Contact from "../../assets/contact.svg";
import {
  ContainerBlue,
  Wrapper,
  ColTwo,
  SubtitleWhite,
  Content,
  Title,
  Parrafo,
  Redes,
  Icons,
} from "../GloblalElements";
import { Photo } from "./ContactElements";
import { FaWhatsapp, FaFacebookMessenger, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";
//JSX
export default function Contacto() {
  return (
    <ContainerBlue id="conatact">
      <Wrapper>
        <Content
          as={motion.div}
          initial={{ opacity: 0, x: -200 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <ColTwo>
            <img src={Rayo} alt="" />
            <SubtitleWhite>Contacto</SubtitleWhite>
          </ColTwo>
          <Title>
            Contactame en mis <span>redes</span> sociales
          </Title>
          <Parrafo>
            Horarios de atención <span>7:00 am</span> a <span>8:00 pm</span> por
            favor si no te respondo deja tu mensaje serás atendido en breve.
          </Parrafo>
          <Redes>
            <a href="https://wa.link/1ofubz" target="Blank" alt="">
              <Icons>
                <FaWhatsapp />
              </Icons>
            </a>
            <a href="https://m.me/jhoan.rojas.5201" target="Blank" alt="">
              <Icons>
                <FaFacebookMessenger />
              </Icons>
            </a>
            <a
              href="https://www.instagram.com/jhoan.rojas.5201/"
              target="Blank"
              alt=""
            >
              <Icons>
                <FaInstagram />
              </Icons>
            </a>
          </Redes>
        </Content>
        <Photo
          as={motion.div}
          initial={{ opacity: 0, x: 200 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <img src={Contact} alt="" width="100%" />
        </Photo>
      </Wrapper>
    </ContainerBlue>
  );
}
