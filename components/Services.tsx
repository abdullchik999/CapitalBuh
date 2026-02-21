export default function Services() {
  return (
    <section className="services" id="services">
      <div className="container">
        <h2 className="services__title wow animate__fadeInUp" data-wow-delay="0.1s">Наши услуги</h2>
        <div className="services-block">
          <div className="services-card wow animate__fadeInUp" data-wow-delay="0.3s">
            <h3 className="services-card__title">Бухгалтерский и налоговый учет</h3>
            <ul className="services-card__list">
              <li className="services-card__item">Ведение и восстановление бухгалтерского и налогового учета ИП и ТОО</li>
              <li className="services-card__item">Сдача налоговой отчетности (ф. 910, 913, 200, 300, 220, 328, 100 и др.)</li>
              <li className="services-card__item">Сдача статистической отчетности</li>
              <li className="services-card__item">Расчет и сопровождение НДС, возврат НДС</li>
              <li className="services-card__item">Ответы на уведомления налоговых органов</li>
              <li className="services-card__item">Оформление и сопровождение СНТ</li>
            </ul>
          </div>
          <div className="services-card wow animate__fadeInUp" data-wow-delay="0.5s">
            <h3 className="services-card__title">Регистрация и сопровождение бизнеса</h3>
            <ul className="services-card__list">
              <li className="services-card__item">Регистрация, приостановление и ликвидация ИП и ТОО</li>
              <li className="services-card__item">Открытие и закрытие ИП</li>
              <li className="services-card__item">Смена ОКЭД, юридического адреса, наименования</li>
              <li className="services-card__item">Регистрация и снятие онлайн-касс</li>
              <li className="services-card__item">Получение ЭЦП</li>
              <li className="services-card__item">Услуги через портал eGov.kz</li>
            </ul>
          </div>
          <div className="services-card wow animate__fadeInUp" data-wow-delay="0.7s">
            <h3 className="services-card__title">Разовые и дополнительные услуги</h3>
            <ul className="services-card__list">
              <li className="services-card__item">ЭСФ, АВР, накладные, счета на оплату, СНТ</li>
              <li className="services-card__item">Учет банковских операций</li>
              <li className="services-card__item">Импорт и экспорт</li>
              <li className="services-card__item">Помощь при блокировке счетов</li>
              <li className="services-card__item">Консультации</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
