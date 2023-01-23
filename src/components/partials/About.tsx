import Title from "../elements/Title"

const About = () => {
  return (
    <div id="about" className="about">
      <Title title="ОБО МНЕ"/>
      <div className="about-content">
        <div className='about-image'>
          <div className="about-image__wrapper">
            <img src="/img/sultanbek-min.jpg" alt="user-logo" />
          </div>
        </div>
        <div className="about-body">
          <div className="about-info">
            <h3>Султанбек</h3>
            <p> 
              Привет, меня зовут Султанбек и я фанат SEO! 
              На данный момент работаю как SEO спецалист на Американскую компанию, но в свободное время котов помочь вашему сайту стать конкурентоспособным в Google. 
            </p>
          </div>
          <div className="about-certificates">
            <h3>Сертификаты</h3>
            <div>
              <img src="/img/certificate-three.png" alt="certificate" />
              <img src="/img/certificate-two.png" alt="certificate" />
              <img src="/img/certificate-one.png" alt="certificate" />
            </div>
          </div>
          <div className="about-education">
            <h3>Образование</h3>
            <div>
              <img src="/img/education.png" alt="certificate" />
              <img src="/img/education-2.png" alt="certificate" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About