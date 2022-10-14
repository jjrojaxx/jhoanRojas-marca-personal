//IMPORTACIONES
import React from "react";
import { FooterCopy, Copy, Redes, Wrapper, Icons } from "./FooterElements";
import { FaWhatsapp, FaFacebookMessenger, FaInstagram } from "react-icons/fa";

//JSX
export default function Footer() {
  return (
    <FooterCopy>
      <Wrapper>
        <Copy>
          2022 <a href="/">jhoanrojas.com</a> Todos los derechos reservados.
          Realizado por
          <a href="https://lealjoseph.com" target="Blank">
            Joseph Leal
          </a>
        </Copy>

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
      </Wrapper>
    </FooterCopy>
  );
}
