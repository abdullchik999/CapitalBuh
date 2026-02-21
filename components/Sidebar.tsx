'use client'

import { useSiteContext } from '@/context/SiteContext'

export default function Sidebar() {
  const { isSidebarOpen, closeSidebar } = useSiteContext()

  return (
    <div className={`sidebar${isSidebarOpen ? ' active' : ''}`} id="sidebar">
      <div className="sidebar-top">
        <h2 className="sidebar__brand">CapitalBuh.kz</h2>
        <button className="sidebar-close__button button" onClick={closeSidebar}>↩</button>
      </div>
      <ul className="sidebar-list">
        <li className="sidebar-list__element">
          <a href="#hero" className="navbar-block__link sidebar-list__link" onClick={closeSidebar}>Главная</a>
        </li>
        <li className="sidebar-list__element">
          <a href="#about" className="navbar-block__link sidebar-list__link" onClick={closeSidebar}>О компании</a>
        </li>
        <li className="sidebar-list__element">
          <a href="#services" className="navbar-block__link sidebar-list__link" onClick={closeSidebar}>Услуги</a>
        </li>
        <li className="sidebar-list__element">
          <a href="#advantages" className="navbar-block__link sidebar-list__link" onClick={closeSidebar}>Преимущества</a>
        </li>
      </ul>
    </div>
  )
}
