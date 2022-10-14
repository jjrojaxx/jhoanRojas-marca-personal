//IMPORTACIONES
import React from "react";
import {
  ContainerBlue,
  WrapperCenter,
  SubtitleWhite,
  ColTwoCenter,
  TitleCenter,
} from "../GloblalElements";
import {
  Theree,
  Caja,
  CajaU,
  CajaT,
  CajaTH,
  CajaF,
  Line,
  Punto,
  Punto2,
  Punto3,
  Punto4,
  Punto5,
  Content,
} from "./ExpElements";
import Icon from "../../assets/icon-rayo-yellow.svg";
import { motion } from "framer-motion";

//JSX
export default function Experiencia() {
  return (
    <ContainerBlue id="experiencia">
      <WrapperCenter
        as={motion.div}
        initial={{ opacity: 0, y: 200 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <ColTwoCenter>
          <img src={Icon} alt="" />
          <SubtitleWhite>Experiencia</SubtitleWhite>
        </ColTwoCenter>
        <TitleCenter>Experiencia Laboral</TitleCenter>
        <Theree>
          <div>
            <Caja>2015 - 2016</Caja>
            <CajaU>2015 - 2016</CajaU>
            <CajaT>2015 - 2016</CajaT>
            <CajaTH>2015 - 2016</CajaTH>
            <CajaF>2015 - 2016</CajaF>
          </div>

          <div>
            <Line>
              <Punto />
              <Punto2 />
              <Punto3 />
              <Punto4 />
              <Punto5 />
            </Line>
          </div>

          <div>
            <Content>
              <h3>
                SOLUCIONES INTEGRALES ELECTRICAS Y TELECOMUNICACIONES, C.A
              </h3>
              <p>Montaje electrico ( 13-12-2015 hasta 02-12-2016 ) </p>
            </Content>
            <Content>
              <h3>POLIFILM DE VENEZUELA, C.A.</h3>
              <p>
                supervisor de turno electromecánico, neumática, hidráulica,
                extrusoras, motores, arrancadores suaves, bombas
                hidroneumáticas, alta tensión. (05-12-2016 hasta 25-02-2018){" "}
              </p>
            </Content>
            <Content>
              <h3>WEDO, ICS</h3>
              <p>
                reparación y mantenimiento de línea blanca, aire acondicionado,
                bombas hidroneumáticas, etc. (12-03-2018 hasta 27-01-2019)
              </p>
            </Content>
            <Content>
              <h3>Hotel w marriot costa rica </h3>
              <p>
                reparación y mantenimientos de bombas para piscinas,
                calentadores eléctricos, sistemas de iluminación LUTRON,
                chiller. (04-07-2019 hasta 11-12-2020)
              </p>
            </Content>
            <Content>
              <h3>CONSORCIO MEDELLIN AL MAR</h3>
              <p>
                trabajos eléctricos en el túnel del occidente, bandejas porta
                cables, montaje eléctrico, conexión y reparación de cámaras tipo
                domo de tráfico, galibo electrónicos, SOS, y paneles de
                movilidad variable PMV, Tecnología ITS 4g. (04-02-2022){" "}
              </p>
            </Content>
          </div>
        </Theree>
      </WrapperCenter>
    </ContainerBlue>
  );
}
