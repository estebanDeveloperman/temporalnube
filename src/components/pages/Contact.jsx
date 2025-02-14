import React from "react";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import "./Contact.css";

export const Contact = () => {
  return (
    <section className="contact-section">
      <div className="container">
        <h2 className="contact-title">📞 CONTACTO</h2>

        <div className="contact-content">
          {/* Formulario */}
          <div className="contact-form">
            <form>
              <div className="input-group">
                <input type="text" placeholder="Nombre" required />
              </div>
              <div className="input-group">
                <input type="email" placeholder="Correo" required />
              </div>
              <div className="input-group">
                <textarea placeholder="Escríbenos tu mensaje..." required></textarea>
              </div>
              <button type="submit">Enviar Mensaje</button>
            </form>
          </div>

          {/* Información de contacto */}
          <div className="contact-info">
            <p>📍 <a href="https://www.google.com/maps/place/Colegio+Juana+Alarco+de+Dammert,+Av.+Alfredo+Benavides+2315,+Santiago+de+Surco+15048/@-12.1267822,-77.0112208,17z/data=!3m1!4b1!4m6!3m5!1s0x9105c7ffb41dbeab:0xd541e3bb30d66aa3!8m2!3d-12.1267822!4d-77.0086459!16s%2Fg%2F11hg2l_bv1?entry=ttu&g_ep=EgoyMDI1MDIxMC4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer">Av. Alfredo Benavides 2315, Miraflores 15048</a></p>
            <p>📧 clubbasketcenter@gmail.com</p>
            <p>📞 +51 926 868 587</p>

            {/* Redes Sociales */}
            <div className="social-icons">
              <a href="https://web.facebook.com/basketcenter.pe" target="_blank" rel="noopener noreferrer">
                <FaFacebookF className="social-icon" />
              </a>
              <a href="https://www.instagram.com/clubbasketcenter/" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="social-icon" />
              </a>
            </div>

            {/* Botón de WhatsApp destacado */}
            <a href="https://wa.me/51926868587" target="_blank" rel="noopener noreferrer" className="whatsapp-btn">
              <FaWhatsapp className="whatsapp-icon" /> Escríbenos por WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
