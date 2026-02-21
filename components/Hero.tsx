'use client'

import { useSiteContext } from '@/context/SiteContext'

export default function Hero() {
  const { openModal } = useSiteContext()

  return (
    <section className="hero" id="hero">
      <div className="container">
        <div className="hero-block">
          <div className="hero-block__info">
            <h1 className="hero-block__title">Бухгалтерские и налоговые услуги для ИП и ТОО</h1>
            <p className="hero-block__subtitle">Комплексное бухгалтерское сопровождение бизнеса в Республике Казахстан</p>
            <button className="hero-block__button button" onClick={openModal}>
              Получить консультацию
            </button>
          </div>
          <img
            src="/img/hero-img.jpg"
            alt="Женщина-бухгалтер работает за компьютером в офисе CapitalBuh"
            className="hero-block__img"
          />
        </div>
      </div>
    </section>
  )
}
