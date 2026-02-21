'use client'

import { useSiteContext } from '@/context/SiteContext'

export default function Modal() {
  const { isModalOpen, closeModal } = useSiteContext()

  return (
    <div className={`modal${isModalOpen ? ' active' : ''}`} id="modal">
      <div className="modal-block">
        <div className="modal-top">
          <h2 className="modal-brand">Получить консультацию</h2>
          <button className="modal-close" onClick={closeModal}>&times;</button>
        </div>
        <button className="modal-whatsapp">
          <a href="https://wa.me/77071202377" rel="noopener noreferrer">Написать в WhatsApp</a>
        </button>
        <button className="modal-phone">
          <a href="tel:+77071202377">Позвоните нам</a>
        </button>
      </div>
    </div>
  )
}
