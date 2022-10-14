//IMPORTACIONES
import React from "react"
import Navbar from "../components/navbar/Navbar";
import Hero from "../components/hero/Hero";
import SobreMi from "../components/sobreMi/sobreMi"
import Experiencia from "../components/experiencia/Experiencia"
import Trabajos from "../components/trabajos/Trabajos"
import Contacto from "../components/contacto/Contacto"
import Footer from "../components/footer/Footer"

//JSX
export default function Home() {
  return (
    <div>
        <Navbar />
        <Hero />
        <SobreMi />
        <Experiencia />
        <Trabajos />
        <Contacto />
        <Footer />
    </div>
  );
}
