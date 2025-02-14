import React from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaInstagram } from "react-icons/fa";
import logo from "../data/images/logo_bcenter.png";

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        {/* Logo */}
        <div style={styles.logoContainer}>
          <img src={logo} alt="Basketcenter Logo" style={styles.logo} />
          <h2 style={styles.clubName}>Basketcenter</h2>
        </div>

        {/* Contacto */}
        <div style={styles.contactContainer}>
          <p style={{ margin: "0" }}><FaPhone style={styles.icon} /> +51 926 868 587</p>
          <p style={{ margin: "0" }}><FaEnvelope style={styles.icon} /> clubbasketcenter@gmail.com</p>
          <p style={{ margin: "0" }}><FaMapMarkerAlt style={styles.icon} /> Av. Alfredo Benavides 2315, Miraflores</p>
        </div>

        {/* Redes Sociales */}
        <div style={styles.socialContainer}>
          <a href="https://web.facebook.com/basketcenter.pe" target="_blank" rel="noopener noreferrer" style={styles.socialLink}>
            <FaFacebook />
          </a>
          <a href="https://www.instagram.com/clubbasketcenter/" target="_blank" rel="noopener noreferrer" style={styles.socialLink}>
            <FaInstagram />
          </a>
        </div>
      </div>

      {/* Derechos reservados */}
      <p style={styles.rights}>© {new Date().getFullYear()} Basketcenter. Todos los derechos reservados.</p>
    </footer>
  );
};

// **Estilos en CSS puro (JSX Style)**
const styles = {
  footer: {
    backgroundColor: "#222222",
    color: "#ffffff",
    padding: "15px 0", // 🔴 Reduce la altura general
    textAlign: "center",
  },
  container: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    maxWidth: "1100px",
    margin: "0 auto",
    padding: "10px 20px", // 🔴 Reduce separación interna
  },
  logoContainer: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
  },
  logo: {
    width: "50px", // 🔴 Reduce el tamaño del logo
    height: "50px",
  },
  clubName: {
    fontSize: "18px",
    fontWeight: "bold",
    color: "#C54527",
  },
  contactContainer: {
    display: "flex",
    flexDirection: "column",
    fontSize: "13px", // 🔴 Reduce tamaño de texto
    textAlign: "left",
    gap: "3px",
  },
  icon: {
    color: "#C54527",
    marginRight: "6px",
  },
  socialContainer: {
    display: "flex",
    gap: "10px",
  },
  socialLink: {
    color: "#ffffff",
    fontSize: "20px", // 🔴 Reduce tamaño de iconos
    transition: "0.3s",
  },
  rights: {
    fontSize: "11px",
    opacity: "0.7",
    marginTop: "10px", // 🔴 Reduce espacio entre contenido y derechos reservados
  },
};

export default Footer;
