//IMPORTACIONES
import React from "react";
import {
  ContainerLeft,
  WrapperLeft,
  Subtitle,
  ColTwoLeft,
  Title2,
} from "../GloblalElements";
import { Content, Theree, Card } from "./JobElements";
import Rayo from "../../assets/icon-rayo-yellow.svg";
import TrabajoOne from "../../assets/Trabajo1.png";
import TrabajoTwo from "../../assets/medellin.png";
import TrabajoTheree from "../../assets/Bomba.png";
import TrabajoFour from "../../assets/poste.png";
import TrabajoFive from "../../assets/epm.png";
import { motion } from "framer-motion";
export default function Trabajos() {
  return (
    <ContainerLeft id="trabajos">
      <WrapperLeft
        as={motion.div}
        initial={{ opacity: 0, y: 200 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <Content>
          <ColTwoLeft>
            <img src={Rayo} alt="" />
            <Subtitle>Sobre mi</Subtitle>
          </ColTwoLeft>
          <Title2>Trabajos realizados</Title2>
        </Content>

        <Theree>
          <Card as={motion.div} whileHover={{ scale: 1.02 }}>
            <img src={TrabajoOne} alt="" width="100%" />
            <h3>Túnel del occidente</h3>
            <p>
              colocación de bandejas porta cables, conexión de puesta tierra y
              montaje eléctrico en general{" "}
            </p>
          </Card>
          <Card as={motion.div} whileHover={{ scale: 1.02 }}>
            <img src={TrabajoTwo} alt="" width="100%" />
            <h3>ITS medellín</h3>
            <p>chequeo y conexión de transformadores tipo 1 y tipo 2</p>
          </Card>
          <Card as={motion.div} whileHover={{ scale: 1.02 }}>
            <img src={TrabajoTheree} alt="" width="100%" />
            <h3>Bomba de plantas de tratamiento</h3>
            <p>
              REPARACION DE MOTORES Y BOMBAS PARA PISCINA Y PLANTAS DE
              TRATAMIENTO COSTA RICA.
            </p>
          </Card>
          <Card as={motion.div} whileHover={{ scale: 1.02 }}>
            <img src={TrabajoFour} alt="" width="100%" />
            <h3>Camaras de trafico tipo domo</h3>
            <p>
              {" "}
              chequeo y conexion de camaras para trafico, switches de fibras
              optica
            </p>
          </Card>
          <Card as={motion.div} whileHover={{ scale: 1.04 }}>
            <img src={TrabajoFive} alt="" width="100%" />
            <h3>Túnel del occidente</h3>
            <p>certificacion e instalacion de acometidas electricas, EPM</p>
          </Card>
        </Theree>
      </WrapperLeft>
    </ContainerLeft>
  );
}
