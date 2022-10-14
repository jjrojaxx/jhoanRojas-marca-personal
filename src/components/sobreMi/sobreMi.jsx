//IMPORTACIONES
import React from "react";
import {
  Container,
  Wrapper,
  Photo,
  ColTwo,
  Subtitle,
  Content,
} from "../GloblalElements";
import { List } from "./SobreElements";
import PhotoSobre from "../../assets/photo-jhoan-rojas.png";
import Rayo from "../../assets/icon-rayo-yellow.svg";
import ListRayo from "../../assets/list-rayo.svg";
import { motion } from "framer-motion";
//JSX
export default function SobreMi() {
  return (
    <Container>
      <Wrapper>
        <Photo
          as={motion.div}
          initial={{ opacity: 0, x: -200 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <img src={PhotoSobre} alt="" width="100%" />
        </Photo>
        <Content
          as={motion.div}
          initial={{ opacity: 0, x: 200 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <ColTwo>
            <img src={Rayo} alt="" />
            <Subtitle>Sobre mi</Subtitle>
          </ColTwo>
          <h2>Soy Especialista</h2>
          <p>
            Jhoan Rojas, colombiano residenciado en Medellín, electricista
            certificado con amplia experiencia, más de 7 años en el campo
            laboral, muy profesional y honesto. estamos para servirle.
          </p>
          <ColTwo>
            <img src={ListRayo} alt="icon" />
            <List>
              Técnico en canalizaciones eléctricas residenciales y tuberías EMT,
              IMC...norma RETIE, NTC 2050
            </List>
          </ColTwo>
          <ColTwo>
            <img src={ListRayo} alt="icon" />
            <List>
              Especialista en control eléctrico (lógica cableada) acometidas
              eléctricas para residencia o industria{" "}
            </List>
          </ColTwo>
          <ColTwo>
            <img src={ListRayo} alt="icon" />
            <List>
              Motores electricos, arrancadores suaves, bombas hidroneumaticas
            </List>
          </ColTwo>
        </Content>
      </Wrapper>
    </Container>
  );
}
