import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaTrophy, FaBasketballBall, FaFlag, FaUsers } from "react-icons/fa";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Portfolio.css"; // Archivo CSS externo

const logros = [
  { year: "2019", events: ["06 Enero - Nace Basketcenter", "🏆 Campeones Liga de Lima U12 Damas", "4to lugar Liga de Lima U13 Damas"] },
  { year: "2020", events: ["🏆 Campeones Copa Azurmendy Chile", "🏆 Campeones Copa Los Lagos Chile"] },
  { year: "2021", events: ["💻 Virtualidad Zoomamericano"] },
  { year: "2022", events: ["🥈 Finalistas Liga de Lima U15 Damas", "💪 Creación de la rama masculina", "5to lugar U19 Varones Liga de Lima"] },
  { year: "2023", events: ["🏆 Campeones Liga de Lima U19 Varones", "🥈 Subcampeones Liga de Lima U13 Damas", "🥉 Tercer Lugar Liga de Lima U17 Varones", "📢 Aportamos 5 jugadores a la selección de Lima", "📢 Aportamos 1 entrenador y 1 asistente a la selección de Lima"] },
  { year: "2024", events: ["🏆 1er Lugar Campeonato Nacional Ica U13 Damas", "🥈 2do Lugar Campeonato Nacional Ica U12 Damas", "🏆 1er Lugar Campeonato Internacional Encesta Copa Spalding U17 Varones", "🥈 2do Lugar Campeonato Internacional Encesta Copa Spalding U13 Varones", "🥈 2do Lugar Liga de Lima U15 Varones", "🥈 2do Lugar Liga de Lima U17 Varones", "🏆 1er Lugar Campeonato Nacional Liga de San Borja U15 Damas", "📢 Aportamos 8 jugadores a la selección de Lima", "📢 Aportamos 1 entrenador a la selección de Lima", "🔥 4 categorías llegaron a semifinales de la Liga de Lima"] }
];

export const Portfolio = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);

  return (
    <section className="portfolio-section">
      <h2 className="portfolio-title" data-aos="fade-down">🏀 Logros e Hitos Históricos</h2>

      <VerticalTimeline className="timeline">
        {logros.map((logro, index) => (
          <VerticalTimelineElement
            key={index}
            date={logro.year}
            iconStyle={{ background: "#C54527", color: "#fff" }}
            icon={index % 2 === 0 ? <FaTrophy /> : <FaBasketballBall />}
            contentStyle={{ background: "#333", color: "#fff", borderRadius: "8px", border: "2px solid #C54527" }}
            contentArrowStyle={{ borderRight: "7px solid #C54527" }}
          >
            <h3 className="timeline-year">{logro.year}</h3>
            <ul className="timeline-events">
              {logro.events.map((evento, i) => (
                <li key={i}>{evento}</li>
              ))}
            </ul>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </section>
  );
};
