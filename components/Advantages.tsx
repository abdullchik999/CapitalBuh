'use client'

import { useSiteContext } from '@/context/SiteContext'

const advantages = [
  {
    icon: '/img/adv1.svg',
    alt: 'Иконка: Опыт в бухгалтерии',
    title: 'Более 25 лет профессионального опыта',
    description: 'Глубокие знания и практический опыт в бухгалтерии',
    delay: '0.3s',
  },
  {
    icon: '/img/adv2.svg',
    alt: 'Иконка: Знание законодательства',
    title: 'Глубокое знание законодательства РК',
    description: 'Актуальные знания налогового и бухгалтерского законодательства',
    delay: '0.5s',
  },
  {
    icon: '/img/adv3.svg',
    alt: 'Иконка: Комплексное сопровождение',
    title: 'Комплексное бухгалтерское сопровождение',
    description: 'Полный спектр услуг для вашего бизнеса',
    delay: '0.7s',
  },
  {
    icon: '/img/adv4.svg',
    alt: 'Иконка: Контроль сроков',
    title: 'Строгий контроль сроков отчетности',
    description: 'Своевременная сдача всех видов отчетности',
    delay: '0.9s',
  },
  {
    icon: '/img/adv5.svg',
    alt: 'Иконка: Оперативное решение',
    title: 'Оперативное решение срочных вопросов',
    description: 'Быстрая реакция на возникающие задачи',
    delay: '1.1s',
  },
  {
    icon: '/img/adv6.svg',
    alt: 'Иконка: Конфиденциальность',
    title: 'Конфиденциальность и ответственность',
    description: 'Гарантия защиты ваших данных и интересов',
    delay: '1.3s',
  },
]

export default function Advantages() {
  const { openModal } = useSiteContext()

  return (
    <section className="advantages" id="advantages">
      <div className="container">
        <h2 className="advantages__title wow animate__fadeInUp" data-wow-delay="0.1s">Почему выбирают CapitalBuh</h2>
        <div className="advantages-grid">
          {advantages.map((adv, i) => (
            <div key={i} className="advantages-card wow animate__fadeInUp" data-wow-delay={adv.delay}>
              <div className="advantages-card__icon">
                <img src={adv.icon} alt={adv.alt} />
              </div>
              <h3 className="advantages-card__title">{adv.title}</h3>
              <p className="advantages-card__description">{adv.description}</p>
            </div>
          ))}
        </div>
        <button
          className="button advantages__button wow animate__fadeInUp"
          data-wow-delay="1.5s"
          onClick={openModal}
        >
          Получить консультацию
        </button>
      </div>
    </section>
  )
}
