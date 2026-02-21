'use client'

import { MessageCircle, Phone } from 'lucide-react'
import { useSiteContext } from '@/context/SiteContext'

export default function Modal() {
  const { isModalOpen, closeModal } = useSiteContext()

  return (
    <div className={`modal${isModalOpen ? ' active' : ''}`} id="modal">
      <div className="modal-block">
        <div className="modal-top">
          <h2>Получить консультацию</h2>
          <p>Выберите удобный способ связи</p>
          <button className="modal-close" onClick={closeModal}>&times;</button>
        </div>
        <button className="modal-whatsapp">
          <a href="https://wa.me/77071202377" rel="noopener noreferrer">
            <MessageCircle size={20} />
            <span>Написать в WhatsApp</span>
          </a>
        </button>
        <button className="modal-phone">
          <a href="tel:+77071202377">
            <Phone size={20} />
            <span>Позвоните нам</span>
          </a>
        </button>
      </div>
    </div>
  )
}
