import React, { useEffect } from "react"
import { home } from "../data/dummydata"
import Typewriter from "typewriter-effect"
import "./Hero.css"

export const Hero = () => {
  return (
    <section className="hero">
      <video autoPlay loop muted className="video-bg">
        <source src="/videos/video_bg_basket.mp4" type="video/mp4" />
      </video>
      <div className="overlay"></div>
      <div className="heroContent">
        <h3 className="hero-subtitle">SOMOS BASKETCENTER</h3>
        <h1 className="hero-title">
          <Typewriter
            options={{
              strings: [
                "BASKETCENTER: EXPERIENCIA, COMPETENCIA Y PASIÓN",
                "ENTRENA COMO UN PROFESIONAL, COMPITE CON LOS MEJORES",
                "MEJORA TU TÉCNICA, PERFECCIONA TU JUEGO",
              ],
              autoStart: true,
              loop: true,
              delay: 60,
              deleteSpeed: 30,
            }}
          />
        </h1>
      </div>
    </section>
  );
};