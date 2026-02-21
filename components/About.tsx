export default function About() {
  return (
    <section className="about" id="about">
      <div className="container">
        <h2 className="about__title wow animate__fadeInUp" data-wow-delay="0.1s">О компании</h2>
        <p className="about__description wow animate__fadeInUp" data-wow-delay="0.3s">
          <span className="about__brand">CapitalBuh</span> — компания, оказывающая профессиональные бухгалтерские и налоговые услуги для
          индивидуальных предпринимателей и товариществ с ограниченной ответственностью.
        </p>
        <p className="about__description wow animate__fadeInUp" data-wow-delay="0.5s">
          Компания работает под руководством опытного главного бухгалтера с профессиональным стажем более
          25 лет и специализируется на комплексном бухгалтерском сопровождении бизнеса, включая ведение и
          восстановление учета, а также подготовку и своевременную сдачу налоговой, финансовой и
          статистической отчетности.
        </p>
      </div>
    </section>
  )
}
