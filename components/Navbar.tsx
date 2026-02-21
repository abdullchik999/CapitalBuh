'use client'

import { useSiteContext } from '@/context/SiteContext'

export default function Navbar() {
  const { openSidebar, openModal } = useSiteContext()

  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-block">
          <div className="navbar-block__sidebar">
            <button
              className="navbar-block__burger button"
              id="burger-button"
              onClick={openSidebar}
            >
              ☰
            </button>
            <span className="navbar-block__brand">CapitalBuh.kz</span>
          </div>
          <div className="navbar-block__links">
            <a href="#hero" className="navbar-block__link">Главная</a>
            <a href="#about" className="navbar-block__link">О компании</a>
            <a href="#services" className="navbar-block__link">Услуги</a>
            <a href="#advantages" className="navbar-block__link">Преимущества</a>
          </div>
          <button className="navbar-block__button button" onClick={openModal}>
            Получить консультацию
          </button>
        </div>
      </div>
    </nav>
  )
}
