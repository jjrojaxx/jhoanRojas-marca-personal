//IMPORTACIONES
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion/dist/framer-motion";

//STYLES
const Container = styled.div`
  background-color: var(--color-blue);
  height: 100vh;
  width: 100vw;
  padding: 0 16px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  button {
    background-color: var(--color-yellow);
    border: none;
    padding: var(--padding-btn);
    border-radius: var(--border-btn);
    cursor: pointer;
    transition: all 300ms;
    &:hover {
      background-color: #cbaa03;
    }

    a {
      text-decoration: none;
      color: var(--color-blue);
      font-weight: 800;
      font-size: 18px;
      width: 100%;
    }
  }
  p {
    color: var(--color-gris);
    font: 500;
    margin-bottom: 24px;
    text-align: center;
  }
`;
const Title = styled.h1`
  font-size: 64px;
  color: var(--color-white);
  text-align: center;
  span {
    color: var(--color-yellow);
  }
`;
//JSX
export default function Error404() {
  document.title = "Error 404 | jhoan Rojas";
  return (
    <div>
      <Container>
        <Wrapper
          as={motion.div}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <Title>
            Error <span>404</span> 😵
          </Title>
          <p>
            Esta página no existe, por favor presione el botón para volver al
            inicio
          </p>
          <button>
            <Link to="/"> Volver al inicio </Link>
          </button>
        </Wrapper>
      </Container>
    </div>
  );
}
