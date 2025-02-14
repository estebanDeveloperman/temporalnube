import React from "react"
import { Heading } from "../common/Heading"
import { about } from "../data/dummydata"
import "./About.css"

export const About = () => {
  return (
    <section className="about">
      <div className="container">
        {/* Sección de texto a la izquierda */}
        <div className="about-text" data-aos="fade-right">
          <h3 className="about-subtitle">¿QUIÉNES SOMOS?</h3>
          <h1 className="about-title">NUESTRO EQUIPO</h1>
          <p className="about-description">
            En Basketcenter, formamos jugadores con mentalidad ganadora. Nuestro compromiso es brindar un entrenamiento de calidad, respaldado por entrenadores con amplia experiencia nacional e internacional. Creemos en el trabajo duro, la disciplina y la pasión como pilares del desarrollo de cada atleta. Competimos en las mejores ligas y preparamos a nuestros jugadores para enfrentar cualquier desafío dentro y fuera de la cancha.
          </p>
        </div>

        {/* Imagen a la derecha */}
        <div className="about-image" data-aos="fade-left">
          <img src="https://estebandeveloperman.github.io/temporalnube/build/images/about/foto_about_basketcenter.jpg" alt="Nuestro Equipo" />
        </div>
      </div>
    </section>
  );
};