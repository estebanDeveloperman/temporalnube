import { Menu } from "@mui/icons-material"
import React, { useState } from "react"
import { Link } from "react-router-dom"
import { navlink } from "../data/dummydata"
import logo from "../data/images/logo_bcenter.png"
import "./Header.css"

export const Header = () => {
  const [responsive, setResponsive] = useState(false)

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setResponsive(false); // Cierra el menú en móviles
    }
  };

  return (
    <>
      <header className='header'>
        <div className='container'>
          <div className='logo'>
            <img src={logo} alt='Basket Center' className='logo-img' />
            <b className='logo-text'>BASKETCENTER</b>
          </div>
          <nav className={responsive ? 'nav show' : 'nav'}>
            {navlink.map((link, i) => (
              <a key={i} className='nav-link' onClick={() => scrollToSection(link.id)}>
                {link.text}
              </a>
            ))}
          </nav>
          <button className='toggle' onClick={() => setResponsive(!responsive)}>
            <Menu className='icon' />
          </button>
        </div>
      </header>
    </>
  )
}
