import ContactBtn from "../elements/ContactBtn"

const Heading = () => {
  return (
    <div style={{background: "url('/img/heading.jpg') center / cover"}} className="heading">
      <div>
        <h1>SEO оптимизация</h1>
        <h3>Эффективное продвижение вашего сайта в Бишкеке</h3>
        <ContactBtn isInside/>
      </div>
    </div>
  )
}

export default Heading